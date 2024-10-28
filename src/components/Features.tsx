import React from 'react';
import { Palette, Download, Eye, Clipboard, Upload, History } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    icon: <Palette className="w-6 h-6 text-[#2563EB]" />, 
    title: "Color Picker & Extraction", 
    description: "Extract dominant colors and use color picker tool from any webpage with a single click." 
  },
  { 
    icon: <Upload className="w-6 h-6 text-[#2563EB]" />, 
    title: "Image Color Analysis", 
    description: "Upload images to extract dominant colors or create custom palettes by picking colors." 
  },
  { 
    icon: <History className="w-6 h-6 text-[#2563EB]" />, 
    title: "Palette History", 
    description: "Maintain and easily access your previously captured color palettes." 
  },
  { 
    icon: <Download className="w-6 h-6 text-[#2563EB]" />, 
    title: "Multiple Export Options", 
    description: "Export palettes in various formats: JPG, PNG, CSV, JSON, and CP (Color Palette)." 
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl mb-12 text-center font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Key Features
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl hover:border-[#2563EB] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-2 bg-[#2563EB] bg-opacity-10 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;