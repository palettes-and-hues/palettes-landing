import React from 'react';
import { Palette, Download, Eye, Clipboard } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <Palette className="w-6 h-6" />, title: "Instant Color Extraction", description: "Capture dominant colors from any webpage with a single click." },
  { icon: <Eye className="w-6 h-6" />, title: "Real-Time Design Inspiration", description: "Discover inspiring color combinations as you browse the web." },
  { icon: <Clipboard className="w-6 h-6" />, title: "Effortless Color Copying", description: "Copy HEX codes with one click for streamlined workflow." },
  { icon: <Download className="w-6 h-6" />, title: "Export Color Palette", description: "Export captured palettes in multiple formats like JPG, PNG, CSV, JSON." },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl mb-8 md:mb-12 text-center text-gradient font-playfair"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Key Features
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass p-4 md:p-6 rounded-2xl"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-3 md:mb-4">
                <div className="mr-3 md:mr-4 p-2 bg-blue-500 bg-opacity-20 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold font-playfair">{feature.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-300 font-inter font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;