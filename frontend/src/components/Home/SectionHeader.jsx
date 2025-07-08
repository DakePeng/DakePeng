export default function SectionHeader({title, description}) {
    return(
        <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-center mb-12">
                {title}
            </h1>
            <p className="text-center max-w-3xl mx-auto mb-12">
                {description}
            </p>
        </div>
    )};

