import React from 'react';
import axios from "axios";
import ProjectCarousel from './ProjectCarousel.jsx';
import Interests from './Interests.jsx';
import Header from './Header.jsx';
import ExperienceShowcase from './ExperienceShowcase.jsx';
import Intro from './Intro.jsx';
import FloatingMenu from './FloatingMenu.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cvLink: "https://1drv.ms/w/c/e712a48a69688c8b/EavzYQEBp_tCuf8q8YW2eQkB7uuxwbeJupqLUEr7SKVnJg?e=9yQ09f",
      experiences: [],
      selectedExperience: {},
      projects:[],
    };
  }
  componentDidMount() {
    const url = "http://localhost:5000"
    const url_experience = url + '/api/experiences';
    axios.get(url_experience)
      .then((response) => {
        const experiences = response.data;
        this.setState({
          experiences: experiences,
          selectedExperience: experiences[0] || {},
        });
      })
      .catch((error) => console.error("Error fetching experiences:", error));

    const url_project = url + '/api/projects';
    axios.get(url_project)
      .then((response) => {
        const projects = response.data;
        this.setState({
          projects: projects,
        });
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }

  handleExperienceSelect = (experience) => {
    this.setState({ selectedExperience: experience });
  }

  render() {
    const { experiences, projects, selectedExperience, cvLink } = this.state;
    return (
      <div className="mb-24">
        <Header />
        <FloatingMenu {...FloatingMenu.defaultProps} />
        <Intro {...Intro.defaultProps} />
        <ExperienceShowcase
          experiences={experiences}
          selectedExperience={selectedExperience}
          onSelectExperience={this.handleExperienceSelect}
          cvLink={cvLink}
        />
        <Interests />
        <ProjectCarousel projects={projects} />
        <Contact />
        <About />
      </div>
    );
  }
}

export default App;
