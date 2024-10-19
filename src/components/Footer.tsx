import React from 'react';
import { Coffee, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 md:py-8 px-4 glass mt-12 md:mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-xs md:text-sm text-gray-400 mb-4 md:mb-0 font-inter font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            © {new Date().getFullYear()} Chroma Palette. All rights reserved.
          </motion.p>
          <div className="flex space-x-4 md:space-x-6">
            <motion.a 
              href="https://github.com/bymayanksingh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/bymayanksingh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
            <motion.a 
              href="https://buymeacoffee.com/bymayanksingh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center font-inter text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Coffee className="w-4 h-4 mr-1 md:mr-2" />
              <span>Buy me a coffee</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;