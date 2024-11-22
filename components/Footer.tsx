import React from 'react';
import { Coffee, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-[#2A2A2A] mt-20" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">About Palettes & Hues</h2>
            <p className="text-gray-400 mb-4">
              A powerful Chrome extension for designers and developers to extract color palettes from websites and images.
              Built with love for the creative community.
            </p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/bymayanksingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                aria-label="Visit our GitHub repository"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/bymayanksingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#why-choose" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#game" className="text-gray-400 hover:text-white transition-colors">Color Game</a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://developer.chrome.com/docs/extensions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chrome Extensions Guide
                </a>
              </li>
              <li>
                <a 
                  href="https://color.adobe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Adobe Color
                </a>
              </li>
              <li>
                <a 
                  href="https://coolors.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Coolors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#2A2A2A]">
          <motion.p 
            className="text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            © {currentYear} Palettes & Hues. All rights reserved.
          </motion.p>
          
          <motion.a 
            href="https://buymeacoffee.com/bymayanksingh" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 !py-2"
            whileHover={{ scale: 1.05 }}
            aria-label="Support us on Buy Me a Coffee"
          >
            <Coffee className="w-5 h-5" />
            <span>Buy me a coffee</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;