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

// Read TSV file and parse
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
        // Insert parsed data into MongoDB
        await Experience.insertMany(results.data);
        console.log('✅ Data imported successfully');
        process.exit();
      } catch (error) {
        console.error('❌ Error inserting into DB:', error);
        process.exit(1);
      }
    },
  });
});
