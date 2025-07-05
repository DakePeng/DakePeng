import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <h1 className="text-xl font-bold text-gray-900">Dake Peng</h1>
        {/* <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav> */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {/* <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a> */}
        </div>
      )}
    </header>
  );
}
