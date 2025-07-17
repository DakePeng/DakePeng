import { useState } from "react";
import { useResponsive } from "@hooks/useResponsive.js";
import { scrollToElement } from "@utils/General/scrollUtils.js";
import MenuBackdrop from "./MenuBackDrop.jsx";
import MenuList from "./MenuList.jsx";
import MenuToggle from "./MenuToggle.jsx";

const DEFAULT_MENU_ITEMS = [
  { id: "intro", label: "Intro", href: "#intro" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "interests", label: "Interests", href: "#interests" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
  { id: "about", label: "About", href: "#about" },
];

export default function FloatingMenu({ 
  menuItems = DEFAULT_MENU_ITEMS,
  scrollOffset = -150,
  position = "bottom-6 left-6",
  onMenuItemClick
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useResponsive(768);

  const handleItemClick = (item) => {
    scrollToElement(item.href, scrollOffset);
    setIsOpen(false);
    onMenuItemClick?.(item);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuBackdrop 
        isOpen={isOpen} 
        onClose={handleBackdropClick} 
        isMobile={isMobile} 
      />

      <div className={`fixed ${position} z-50`}>
        <MenuList
          items={menuItems}
          isOpen={isOpen}
          onItemClick={handleItemClick}
        />
        
        <MenuToggle
          isOpen={isOpen}
          onToggle={handleToggle}
        />
      </div>
    </>
  );
}
