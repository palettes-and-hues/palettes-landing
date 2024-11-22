import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Extract Beautiful Color Palettes from
          <span className="text-[#2563EB]"> Any Website</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the perfect color combinations for your next project with our powerful Chrome extension. 
          Extract dominant colors, create custom palettes, and streamline your design workflow.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="https://chromewebstore.google.com/detail/palettes-hues-%F0%9F%8E%A8/miokoikjlpbhhfepkneagdjmgakendep"
            className="btn w-full sm:w-auto"
            aria-label="Install Chrome Extension"
          >
            Install Extension
          </a>
          <a 
            href="#features"
            className="btn-secondary w-full sm:w-auto"
            aria-label="Learn more about our features"
          >
            Learn More
          </a>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass p-3 rounded-xl hover:scale-105 transition-transform duration-300">
            <a 
              href="https://www.producthunt.com/posts/palettes-hues"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="View Palettes & Hues on Product Hunt"
            >
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=573474&theme=light" 
                alt="Palettes & Hues featured on Product Hunt"
                width="250" 
                height="54" 
                className="rounded-lg"
                loading="lazy"
              />
            </a>
          </div>
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