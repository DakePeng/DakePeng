import './App.css'
import ProjectCarousel from './ProjectCarousel.jsx'
import Interests from './Interests.jsx'
import SectionLine from './SectionLine.jsx'
function App() {
  return (
    <div>
      <SectionLine />
      <ProjectCarousel {...ProjectCarousel.defaultProps} />
      {/* <ProjectCard {...ProjectCard.defaultProps}/> */}
      <Interests /> 
    </div>
  )
}

export default App
