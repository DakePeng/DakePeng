export default function SectionHeader({title, description}) {
    return(
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-center mb-6">
                {title}
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12">
                {description}
            </p>
        </div>
    )};

