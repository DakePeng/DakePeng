const ProjectCard = (props) => {
  return (
    <div className="w-full max-w-full sm:max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={props.image} alt={props.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{props.title}</h2>

        {props.tags && props.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {props.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-600 mt-3 text-sm">{props.description}</p>

        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

// Default dummy props
ProjectCard.defaultProps = {
  id: 4,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
  title: 'Sample Project Title',
  description: 'This is a brief description of the project, showing what it is about.',
  tags: ['React', 'Tailwind', 'UI'],
  link: 'https://example.com'
};


export default ProjectCard;
