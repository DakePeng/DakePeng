const CustomBlockquote = ({ node, ...props }) => (
  <blockquote
    className="border-l-4 border-blue-500 italic text-gray-700 bg-blue-50 dark:bg-blue-900 dark:text-blue-200 px-4 py-2 my-6"
    {...props}
  />
);

export default CustomBlockquote;