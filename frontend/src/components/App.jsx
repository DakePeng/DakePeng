import ProjectCarousel from './ProjectCarousel.jsx'
import Interests from './Interests.jsx'
import Header from './Header.jsx'
import ExperienceShowcase from './ExperienceShowcase.jsx' 
import CoverScreen from './Cover.jsx'
import FloatingMenu from './FloatingMenu.jsx'
import Contact from './Contact.jsx'
const App = () => {
  return (
    <div className="mb-24">
      <Header />
      <FloatingMenu {...FloatingMenu.defaultProps}/>
      <CoverScreen {...CoverScreen.defaultProps}/>
      <ExperienceShowcase {...ExperienceShowcase.defaultProps} />
      <Interests />
      <ProjectCarousel {...ProjectCarousel.defaultProps} />
      <Contact />
    </div>
  );
};

export default App
