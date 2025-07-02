const express = require('express');
const router = express.Router();

const {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers/experienceControllers');

// GET all experiences
router.get('/', getExperiences);

// POST create new experience
router.post('/', createExperience);

// PUT update experience by ID
router.put('/:id', updateExperience);

// DELETE experience by ID
router.delete('/:id', deleteExperience);

module.exports = router;
