// hooks/usePortfolioData.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config.js';

export const usePortfolioData = () => {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [experiencesResponse, projectsResponse] = await Promise.all([
          axios.get(`${BACKEND_URL}/api/experiences`),
          axios.get(`${BACKEND_URL}/api/projects`)
        ]);

        const sortedExperiences = experiencesResponse.data.sort((a, b) => a.order - b.order);
        setExperiences(sortedExperiences);
        setSelectedExperience(sortedExperiences[0] || {});
        setProjects(projectsResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleExperienceSelect = (experience) => {
    setSelectedExperience(experience);
  };

  return {
    experiences,
    projects,
    selectedExperience,
    loading,
    error,
    handleExperienceSelect
  };
};