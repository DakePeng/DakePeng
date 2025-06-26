import './App.css'
import ProjectCarousel from './ProjectCarousel.jsx'
import Interests from './Interests.jsx'
function App() {
  return (
    <div>
      <ProjectCarousel {...ProjectCarousel.defaultProps} />
      {/* <ProjectCard {...ProjectCard.defaultProps}/> */}
      <div className="h-120"></div>
      <Interests /> 
      <div className="h-100"></div>
    </div>
  )
}

export default App
