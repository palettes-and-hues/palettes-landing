import React from 'react';
import { Coffee, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-[#2A2A2A] mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            © {new Date().getFullYear()} Palettes & Hues{' '}
            <span className="inline-block align-middle">🎨</span>. All rights reserved.
          </motion.p>
          <div className="flex items-center space-x-6">
            <motion.a 
              href="https://github.com/bymayanksingh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/bymayanksingh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://buymeacoffee.com/bymayanksingh" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 !py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Coffee className="w-5 h-5" />
              <span>Buy me a coffee</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;