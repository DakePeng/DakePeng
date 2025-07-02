const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Project = require('../models/Project');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Path to your TSV file
const filePath = './assets/Projects.tsv';

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
        const transformed = results.data
                  .filter(row => row.title?.trim()) // filter out blank rows
                  .map(row => {
                    const hasPost = row.hasPost?.trim().toLowerCase() === 'true';
                    return {
                      title: row.title?.trim(),
                      coverImg: row.coverImg?.trim(),
                      description: row.description?.trim(),
                      tags: row.tags ? row.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
                      date: row.date?.trim(),
                      hasPost,
                      postLink: hasPost ? row.postLink?.trim() : null,
                    };
                  });
        
        // Optional: clear collection first
        await Project.deleteMany({});
        console.log('✅ Cleared existing data');

        const insertedDocs = await Project.insertMany(transformed);
        console.log(`✅ Data imported successfully. Inserted ${insertedDocs.length} records.`);
        process.exit(0);
      } catch (error) {
        console.error('❌ Error inserting into DB:', error);
        process.exit(1);
      }
    },
  });
});
