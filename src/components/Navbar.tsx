import React, { useState } from 'react';
import { Menu, X, CircleDollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Login', path: '/login' },
  ];

  return (
    <nav className="fixed w-full bg-navy-dark/80 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <CircleDollarSign className="w-8 h-8 text-gold" />
            <span className="text-xl font-display font-bold">FundVision</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-gold transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-gray-300 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <button className="btn-primary w-full mt-4">Get Started</button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}