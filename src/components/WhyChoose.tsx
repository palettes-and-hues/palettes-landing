import React, { useState } from 'react';
import {
  Palette,
  Image as ImageIcon,
  History,
  Download,
  Eye,
  Zap,
  Lock,
  MousePointer,
  PaintBucket,
  Brush,
  FileJson,
  Focus,
  Clock,
  Shield,
  Sparkles,
  Laptop
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <Zap className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />,
    title: 'Instant Color Extraction',
    description: 'Capture dominant colors with HEX codes and names in one click from any webpage.',
    category: 'Features'
  },
  {
    icon: <ImageIcon className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />,
    title: 'Image Color Analysis',
    description: 'Upload images to extract color palettes or pick specific colors for custom combinations.',
    category: 'Features'
  },
  {
    icon: <History className="w-10 h-10 md:w-12 md:h-12 text-green-400" />,
    title: 'Palette History',
    description: 'Access and manage your previously captured color palettes with ease.',
    category: 'Features'
  },
  {
    icon: <FileJson className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />,
    title: 'Multiple Export Formats',
    description: 'Export palettes in JPG, PNG, CSV, JSON, and CP formats for versatile use.',
    category: 'Features'
  },
  {
    icon: <Focus className="w-10 h-10 md:w-12 md:h-12 text-indigo-400" />,
    title: 'Context-Aware Analysis',
    description: 'Smart analysis of visible webpage areas for relevant color schemes.',
    category: 'Features'
  },
  {
    icon: <MousePointer className="w-10 h-10 md:w-12 md:h-12 text-pink-400" />,
    title: 'Precision Color Picker',
    description: 'Select specific colors with pixel-perfect accuracy from any element.',
    category: 'Features'
  },
  {
    icon: <PaintBucket className="w-10 h-10 md:w-12 md:h-12 text-orange-400" />,
    title: 'Color Name Recognition',
    description: 'Get human-readable color names alongside technical color codes.',
    category: 'Features'
  },
  {
    icon: <Brush className="w-10 h-10 md:w-12 md:h-12 text-rose-400" />,
    title: 'Custom Palette Creation',
    description: 'Build and save your own color combinations from multiple sources.',
    category: 'Features'
  },
  {
    icon: <Clock className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" />,
    title: 'Time-Saving Workflow',
    description: 'Streamline your design process with quick color management.',
    category: 'Features'
  },
  {
    icon: <Laptop className="w-10 h-10 md:w-12 md:h-12 text-teal-400" />,
    title: 'Cross-Browser Support',
    description: 'Works seamlessly across Chrome, Edge, Brave, and other Chromium browsers.',
    category: 'Features'
  },
  {
    icon: <Shield className="w-10 h-10 md:w-12 md:h-12 text-red-400" />,
    title: 'Privacy Protection',
    description: 'Local processing ensures your browsing and color data stays private.',
    category: 'Features'
  }
];

const WhyChoose: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mbljloge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = Array.from(new Set(features.map(f => f.category)));

  return (
    <section id="why-choose" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            Why Choose <span className="gradient-text">Palettes & Hues</span> 🎨?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the most powerful color extraction tool that offers intuitive user interface.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="text-2xl md:text-3xl font-display text-primary-400 text-center"
              >
                {category}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features
                  .filter(feature => feature.category === category)
                  .map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="glass p-6 rounded-xl hover:border-primary-500 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="p-2 bg-white/5 rounded-lg mb-4">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-md mx-auto glass p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl md:text-3xl mb-4 font-display">
            Subscribe for future updates.
          </h3>
          <p className="text-gray-400 mb-6">
            Join a pool of designers and developers using Palettes & Hues to streamline their color workflow.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-center"
                required
              />
            </div>
            <motion.button
              type="submit"
              className={`btn w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
          </form>
          {submitStatus === 'success' && (
            <p className="text-green-400 mt-4">Thank you for subscribing!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
          )}
        </motion.div>
      </div>

      <p className="text-xs md:text-sm text-gray-400 text-center mt-4">Ready to use on <span className="text-[#2563EB]">Chrome</span>, <span className="text-[#2563EB]">Arc</span>, <span className="text-[#2563EB]">Brave</span>, <span className="text-[#2563EB]">Edge</span> and all modern Chromium browsers. No additional setup needed! 🚀</p>


      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>
    </section>
  );
};

export default WhyChoose;