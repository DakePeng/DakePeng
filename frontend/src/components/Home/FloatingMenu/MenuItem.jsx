export default function MenuItem({ item, onClick, className = "" }) {
  const defaultClassName = `
    bg-white text-gray-900 font-semibold
    text-lg px-6 py-3 rounded-lg
    shadow-md
    hover:shadow-lg hover:scale-[1.04] transform transition
    w-full text-left focus:outline-none focus:ring-2 focus:ring-gray-400
  `;

  return (
    <button
      onClick={onClick}
      className={`${defaultClassName} ${className}`}
    >
      {item.label}
    </button>
  );
}