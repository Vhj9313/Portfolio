import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-950 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">Vaibhav</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-3">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-md font-medium transition duration-200 ${
                pathname === path
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md font-medium transition duration-200 ${
                pathname === path
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
