import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 w-full">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-lg font-bold">MyWebsite</div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            onClick={handleToggle}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" onClick={closeMenu} className="block hover:text-gray-300">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-gray-300">About Us</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-gray-300">Contact</Link>
          <Link to="/register" onClick={closeMenu} className="block hover:text-gray-300">Register</Link>
          <Link to="/login" onClick={closeMenu} className="block hover:text-gray-300">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
