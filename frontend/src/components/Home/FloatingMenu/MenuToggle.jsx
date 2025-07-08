import { Menu, X } from "lucide-react";

export default function MenuToggle({ isOpen, onToggle, className = "" }) {
  const defaultClassName = `
    w-16 h-16 rounded-full bg-black text-white
    flex items-center justify-center shadow-lg
    hover:scale-105 transition-transform
  `;

  return (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="floating-menu"
      className={`${defaultClassName} ${className}`}
    >
      {isOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
  );
}