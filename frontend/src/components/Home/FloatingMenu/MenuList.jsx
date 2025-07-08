import MenuItem from "./MenuItem";

export default function MenuList({ items, isOpen, onItemClick, className = "" }) {
  const containerClassName = `
    flex flex-col items-start space-y-4 mb-4 transition-all duration-300
    ${isOpen 
      ? "opacity-100 translate-y-0" 
      : "opacity-0 translate-y-4 pointer-events-none"
    }
    ${className}
  `;

  return (
    <div className={containerClassName}>
      {items.map((item, index) => (
        <MenuItem
          key={item.id || index}
          item={item}
          onClick={() => onItemClick(item)}
        />
      ))}
    </div>
  );
}