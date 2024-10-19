import React, { useState } from 'react';
import { Palette, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="py-4 px-4 md:py-6 glass sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-xl md:text-2xl flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-playfair">
            🎨  Chroma Palette
          </span>
        </motion.h1>
        <nav className="hidden md:flex space-x-6 font-inter">
          <motion.a href="#features" className="hover:text-blue-400 transition-colors duration-300" whileHover={{ scale: 1.1 }}>Features</motion.a>
          <motion.a href="#why-choose" className="hover:text-purple-400 transition-colors duration-300" whileHover={{ scale: 1.1 }}>Why Choose</motion.a>
          <motion.a 
            href="https://chromewebstore.google.com/detail/chroma-palette-%F0%9F%8E%A8/miokoikjlpbhhfepkneagdjmgakendep"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download
          </motion.a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 py-4 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 font-inter">
              <a href="#features" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#why-choose" className="hover:text-purple-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Why Choose</a>
              <a href="https://chromewebstore.google.com/detail/chroma-palette-%F0%9F%8E%A8/miokoikjlpbhhfepkneagdjmgakendep" className="inline-block" onClick={() => setIsMenuOpen(false)}>Download</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;