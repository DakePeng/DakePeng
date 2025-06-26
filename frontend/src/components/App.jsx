import './App.css'
import ProjectCard  from './ProjectCard.jsx'
import ProjectCarousel from './ProjectCarousel.jsx'

function App() {
  return (
    <div>
      {/* <FanCarousel projects={projects} /> */}
       <ProjectCard {...ProjectCard.defaultProps}/>
    </div>
  )
}

export default App
