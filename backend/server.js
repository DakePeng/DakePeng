const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db');  // Updated to destructure

// Load environment variables
dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'https://dakepeng.onrender.com/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());

// Routes
const experienceRoutes = require('./routes/experienceRoutes');
app.use('/api/experiences', experienceRoutes);

const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

// Connect to DB, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB, server not started:', err);
  });
