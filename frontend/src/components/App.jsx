import './App.css'
import ProjectCard  from './ProjectCard.jsx'
import ProjectCarousel from './ProjectCarousel.jsx'

function App() {
  return (
    <div>
      <ProjectCarousel {...ProjectCarousel.defaultProps} />
      {/* <ProjectCard {...ProjectCard.defaultProps}/> */}
    </div>
  )
}

export default App
