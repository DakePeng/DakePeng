import ProjectCarousel from './ProjectCarousel.jsx'
import Interests from './Interests.jsx'
import SectionLine from './SectionLine.jsx'
import Header from './Header.jsx'
import ExperienceShowcase from './ExperienceShowcase.jsx' 
import CoverScreen from './Cover.jsx'
import FloatingMenu from './FloatingMenu.jsx'
const App = () => {
  return (
    <>
      <Header />
      <FloatingMenu {...FloatingMenu.defaultProps}/>
      <CoverScreen {...CoverScreen.defaultProps}/>
      <SectionLine />
      <ExperienceShowcase {...ExperienceShowcase.defaultProps} />
      <Interests />
      <ProjectCarousel {...ProjectCarousel.defaultProps} />
    </>
  );
};

export default App
