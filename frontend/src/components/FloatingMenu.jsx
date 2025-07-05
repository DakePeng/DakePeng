import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function FloatingMenu({ menuItems }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Backdrop: only on mobile */}
      {open && isMobile && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-md z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Menu & Button */}
      <div className="fixed bottom-6 left-6 z-50">
        {/* Menu */}
        <div
          className={`flex flex-col items-start space-y-4 mb-4 transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                const target = document.querySelector(item.href);
                if (target) {
                  const yOffset = -150;
                  const y =
                    target.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
                setOpen(false);
              }}
              className="
                bg-white text-gray-900 font-semibold
                text-lg px-6 py-3 rounded-lg
                shadow-md
                hover:shadow-lg hover:scale-[1.04] transform transition
                w-full text-left focus:outline-none focus:ring-2 focus:ring-gray-400
              "
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Floating Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="floating-menu"
          className="
            w-16 h-16 rounded-full bg-black text-white
            flex items-center justify-center shadow-lg
            hover:scale-105 transition-transform
          "
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
    </>
  );
}

FloatingMenu.defaultProps = {
  menuItems: [
    { label: "Intro", href: "#intro" },
    { label: "Experience", href: "#experience" },
    { label: "Interests", href: "#interests" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "About", href: "#about" },
  ],
};
