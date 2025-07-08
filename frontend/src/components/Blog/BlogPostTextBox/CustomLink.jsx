const CustomLink = ({ node, ...props }) => (
  <a
    className="text-blue-600 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

export default CustomLink;