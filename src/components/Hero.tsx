import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Capture Colors from
          <span className="text-[#2563EB]"> the Web</span>
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A powerful Chrome extension that instantly extracts the dominant color palette from any webpage. Perfect for designers and developers.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="https://chromewebstore.google.com/detail/palettes-hues-%F0%9F%8E%A8/miokoikjlpbhhfepkneagdjmgakendep"
            className="btn w-full sm:w-auto"
          >
            Install Extension
          </a>
          <a 
            href="#features"
            className="btn-secondary w-full sm:w-auto"
          >
            Learn More
          </a>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#1E40AF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;