import React, { useState } from 'react';
import { Focus, Clock, UserCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <Focus className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />,
    title: 'Context-Aware Analysis',
    description: 'Focus on the visible area for relevant color schemes',
  },
  {
    icon: <Clock className="w-10 h-10 md:w-12 md:h-12 text-green-400" />,
    title: 'Time-Saving Tool',
    description: 'Quickly analyze color schemes without leaving your browser',
  },
  {
    icon: <UserCheck className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />,
    title: 'User-Friendly Interface',
    description: 'Clean, intuitive design for easy color extraction',
  },
  {
    icon: <Lock className="w-10 h-10 md:w-12 md:h-12 text-red-400" />,
    title: 'Privacy-Focused',
    description:
      'Works locally in your browser without sending data to external servers',
  },
];

const WhyChoose: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

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
      console.error('Error submitting form: ', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="why-choose" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-8 md:mb-12 text-center text-gradient font-playfair">
          Why Choose Chroma Palette?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="glass p-4 md:p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-center font-playfair">
                {reason.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 text-center font-inter font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="max-w-md mx-auto glass p-6 md:p-8 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-center text-gradient font-playfair">
            Get Chroma Palette Today
          </h3>
          <p className="text-sm md:text-base text-center mb-4 md:mb-6 text-gray-300 font-inter font-light">
            Start capturing colors and finding inspiration with just one click.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white bg-opacity-10 text-white border border-white border-opacity-20 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 font-inter text-sm md:text-base"
              />
            </div>
            <motion.button
              type="submit"
              className={`btn w-full font-inter text-sm md:text-base ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe for Updates'}
            </motion.button>
          </form>
          {submitStatus === 'success' && (
            <p className="text-green-400 text-center mt-4 font-inter text-sm md:text-base">
              Thank you for subscribing!
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-center mt-4 font-inter text-sm md:text-base">
              Oops! Something went wrong. Please try again.
            </p>
          )}
          <p className="text-xs md:text-sm text-gray-400 text-center mt-4 font-inter font-light">
            Compatible with Google Chrome, Arc & Chromium based Browsers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;