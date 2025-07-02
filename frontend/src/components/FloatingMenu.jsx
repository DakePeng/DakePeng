import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function FloatingMenu({ menuItems }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Menu */}
      <div
        className={`flex flex-col items-start space-y-3 mb-4 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
        <button
            key={index}
            onClick={() => {
            const target = document.querySelector(item.href);
            if (target) {
                const yOffset = -150; // adjust based on your fixed header height
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
            setOpen(false);
            }}
            className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 text-left w-full"
        >
            {item.label}
        </button>
        ))}
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
}

FloatingMenu.defaultProps = {
  menuItems: [
    { label: "Intro", href: "#intro" },
    { label: "Experience", href: "#experience" },
    { label: "Interests", href: "#interests" },
    { label: "Projects", href: "#projects" },
  ],
};