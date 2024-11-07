import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-semibold">MyWebsite</div>
        
        {/* Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 items-center text-center">
          <a href="/" className="hover:text-gray-300 transition duration-300">Home</a>
          <a href="/about" className="hover:text-gray-300 transition duration-300">About Us</a>
          <a href="/contact" className="hover:text-gray-300 transition duration-300">Contact</a>
       
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-500" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
