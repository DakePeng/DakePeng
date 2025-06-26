import './App.css'
import ProjectCard  from './ProjectCard.jsx'
import FanCarousel from './ProjectCarousel.jsx'
const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Mountain Escape',
    description: 'Explore breathtaking mountain landscapes with this travel guide.',
    link: 'https://example.com/mountain-escape',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    title: 'City Lights',
    description: 'Discover vibrant city nightlife with curated spots and events.',
    link: 'https://example.com/city-lights',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
    title: 'Creative Workspace',
    description: 'Boost your productivity with tips for a creative and organized workspace.',
    link: 'https://example.com/creative-workspace',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    title: 'Gourmet Recipes',
    description: 'Step-by-step guides to create delicious gourmet meals at home.',
    link: 'https://example.com/gourmet-recipes',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
    title: 'Adventure Gear',
    description: 'The latest gear reviews and recommendations for your next adventure.',
    link: 'https://example.com/adventure-gear',
  },
];
function App() {
  return (
    <div>
      <ProjectCard
        image = "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80" 
        title="Dev Tools Dashboard"
        description="A responsive dashboard built with React, Tailwind CSS, and Chart.js for tracking dev metrics."
        link="https://your-dashboard-link.com"
      />
      <FanCarousel projects={projects} />
    </div>
  )
}

export default App
