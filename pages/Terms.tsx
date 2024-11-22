import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Terms of Service
      </motion.h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-6">Last updated: March 19, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By installing and using the Palettes & Hues Chrome extension, you agree to these Terms of Service.
            If you disagree with any part of these terms, please uninstall the extension.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable license to use the Palettes & Hues
            extension for personal or commercial purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Restrictions</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or create derivative works</li>
            <li>Reverse engineer the extension</li>
            <li>Remove any copyright notices</li>
            <li>Use the extension for illegal purposes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Updates</h2>
          <p>
            We reserve the right to update or modify these Terms of Service at any time. Continued use
            of the extension constitutes acceptance of any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Contact</h2>
          <p>
            For questions about these Terms, please contact us at{' '}
            <a href="mailto:terms@palettes.fyi" className="text-blue-400 hover:text-blue-300">
              terms@palettes.fyi
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;