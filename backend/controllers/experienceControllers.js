const Experience = require('../models/Experience');

// Get all experiences
const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({}).sort({ createdAt: -1 }); // newest first
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new experience
const createExperience = async (req, res) => {
  const { logo, jobTitle, company_shortened, company, dateRange, description } = req.body;

  try {
    const experience = new Experience({
      logo,
      jobTitle,
      company_shortened,
      company,
      dateRange,
      description,
    });

    const createdExperience = await experience.save();
    res.status(201).json(createdExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update experience by ID
const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });

    const { logo, jobTitle, company_shortened, company, dateRange, description } = req.body;

    experience.logo = logo || experience.logo;
    experience.jobTitle = jobTitle || experience.jobTitle;
    experience.company_shortened = company_shortened || experience.company_shortened;
    experience.company = company || experience.company;
    experience.dateRange = dateRange || experience.dateRange;
    experience.description = description || experience.description;

    const updatedExperience = await experience.save();
    res.json(updatedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete experience by ID
const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });

    await experience.remove();
    res.json({ message: 'Experience removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
