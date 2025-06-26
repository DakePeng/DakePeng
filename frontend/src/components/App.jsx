import './App.css'
import ProjectCarousel from './ProjectCarousel.jsx'
import Interests from './Interests.jsx'
import SectionLine from './SectionLine.jsx'
import Header from './Header.jsx'
function App() {
  return (
    <div>
      <Header />
      <SectionLine />
      <Interests /> 
      <ProjectCarousel {...ProjectCarousel.defaultProps} />
      {/* <ProjectCard {...ProjectCard.defaultProps}/> */}

    </div>
  )
}

export default App
