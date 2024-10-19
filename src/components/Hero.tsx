import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gradient font-playfair"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Capture Colors from the Web
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300 font-inter font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Chroma Palette is a powerful Chrome extension that instantly extracts the dominant color palette from any webpage.
        </motion.p>
        <motion.a 
          href="https://chromewebstore.google.com/detail/chroma-palette-%F0%9F%8E%A8/miokoikjlpbhhfepkneagdjmgakendep"
          className="btn inline-block font-inter text-sm md:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Chroma Palette
        </motion.a>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-3/4 left-3/4 w-32 md:w-64 h-32 md:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 md:w-64 h-32 md:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;