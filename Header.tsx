import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="py-6 px-4 sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-[#2A2A2A]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      role="banner"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-xl md:text-2xl flex items-center font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <a href="/" aria-label="Palettes & Hues Home">
            Palettes & Hues&nbsp;
            <span className="inline-block align-middle" aria-hidden="true">&nbsp;🎨</span>
          </a>
        </motion.div>
        <nav className="hidden md:flex items-center space-x-8" role="navigation">
          <motion.a href="#features" className="text-gray-400 hover:text-white transition-colors" whileHover={{ scale: 1.05 }}>Features</motion.a>
          <motion.a href="#why-choose" className="text-gray-400 hover:text-white transition-colors" whileHover={{ scale: 1.05 }}>Why Choose</motion.a>
          <motion.a href="#game" className="text-gray-400 hover:text-white transition-colors" whileHover={{ scale: 1.05 }}>Play Game</motion.a>
          <motion.a
            href="https://chromewebstore.google.com/detail/palettes-hues-%F0%9F%8E%A8/miokoikjlpbhhfepkneagdjmgakendep"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Install Chrome Extension"
          >
            Install Now
          </motion.a>
        </nav>
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav
          className="md:hidden absolute top-full left-0 right-0 bg-[#1A1A1A] border-b border-[#2A2A2A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          role="navigation"
        >
          <div className="flex flex-col space-y-4 p-4">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#why-choose" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Why Choose</a>
            <a href="#game" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Play Game</a>
            <a 
              href="https://chromewebstore.google.com/detail/palettes-hues-%F0%9F%8E%A8/miokoikjlpbhhfepkneagdjmgakendep" 
              className="btn text-center" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Install Chrome Extension"
            >
              Install Now
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;