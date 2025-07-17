const FootnotesDisplay = ({ footnoteRefs, footnotes }) => {
  if (footnoteRefs.length === 0) return null;

  return (
    <div className="mt-2 p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900 dark:text-blue-200 text-sm rounded">
      {footnoteRefs.map((id, index) => (
        <p 
          key={id} 
          id={`footnote-${id}`}
          className={index !== footnoteRefs.length - 1 ? 'mb-2' : ''}
        >
          <sup className="align-super text-xs text-blue-600">{id}</sup> {footnotes[id]}
        </p>
      ))}
    </div>
  );
};

export default FootnotesDisplay;