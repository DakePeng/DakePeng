import ProjectCarousel from './ProjectCarousel.jsx'
import Interests from './Interests.jsx'
import SectionLine from './SectionLine.jsx'
import Header from './Header.jsx'
import ExperienceShowcase from './ExperienceShowcase.jsx' 
import CoverScreen from './Cover.jsx'
const App = () => {
  return (
    <>
      <Header />
      <CoverScreen />
      <SectionLine />
      <ExperienceShowcase {...ExperienceShowcase.defaultProps} />
      <Interests />
      <ProjectCarousel {...ProjectCarousel.defaultProps} />
    </>
  );
};

export default App
