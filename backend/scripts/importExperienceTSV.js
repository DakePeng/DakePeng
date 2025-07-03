const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const dotenv = require('dotenv');
const { connectDB } = require('../config/db');
const Experience = require('../models/Experience');

dotenv.config();

const filePath = path.join(__dirname, '../assets/Experiences.tsv');

const runImport = async () => {
  try {
    await connectDB();

    const data = fs.readFileSync(filePath, 'utf8');

    const parsed = Papa.parse(data, {
      header: true,
      delimiter: '\t',
      skipEmptyLines: true,
    });

    const validData = parsed.data.filter(row =>
      Object.values(row).some(val => val && val.trim() !== '')
    );

    if (validData.length === 0) {
      console.log('⚠️ No valid data found in the TSV file.');
      process.exit(0);
    }

    //await Experience.deleteMany({});
    //console.log('🗑️ Cleared Experience collection');

    const inserted = await Experience.insertMany(validData);
    console.log(`✅ Inserted ${inserted.length} experiences`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Error importing experiences:', err.message);
    process.exit(1);
  }
};

runImport();
