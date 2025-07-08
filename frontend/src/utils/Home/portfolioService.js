import axios from 'axios';
import { BACKEND_URL } from '../../config.js';

class PortfolioService {
  static async fetchExperiences() {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/experiences`);
      return response.data.sort((a, b) => a.order - b.order);
    } catch (error) {
      console.error("Error fetching experiences:", error);
      throw error;
    }
  }

  static async fetchProjects() {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/projects`);
      return response.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }

  static async fetchPortfolioData() {
    try {
      const [experiences, projects] = await Promise.all([
        this.fetchExperiences(),
        this.fetchProjects()
      ]);
      return { experiences, projects };
    } catch (error) {
      throw error;
    }
  }
}

export default PortfolioService;