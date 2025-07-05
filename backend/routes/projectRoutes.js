const express = require('express');
const router = express.Router();

const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectControllers');

// Get all projects
router.get('/', getProjects);

// Get a single project by ID
router.get('/:id', getProjectById);

// Create a new project
router.post('/', createProject);

// Update an existing project by ID
router.put('/:id', updateProject);

// Delete a project by ID
router.delete('/:id', deleteProject);

module.exports = router;
