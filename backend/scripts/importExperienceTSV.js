const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Experience = require('../models/Experience');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Path to your TSV file
const filePath = path.join(__dirname, '../Experiences.tsv');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading TSV:', err);
    process.exit(1);
  }

  Papa.parse(data, {
    header: true,
    delimiter: '\t',
    complete: async (results) => {
      try {
        const validData = results.data.filter(
          row => Object.values(row).some(value => value && value.trim() !== '')
        );

        if (validData.length === 0) {
          console.log('No valid data to import.');
          process.exit(0);
        }

        // Clear the collection first
        await Experience.deleteMany({});
        console.log('✅ Cleared existing data');

        // Insert new data
        const insertedDocs = await Experience.insertMany(validData);
        console.log(`✅ Data imported successfully. Inserted ${insertedDocs.length} records.`);
        process.exit(0);
      } catch (error) {
        console.error('❌ Error inserting into DB:', error);
        process.exit(1);
      }
    },
  });
});
