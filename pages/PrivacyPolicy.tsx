import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Privacy Policy
      </motion.h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-6">Last updated: October 2, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            Palettes & Hues is a browser extension designed to extract and display the dominant color palette 
            from the visible area of the current webpage. We are committed to protecting your privacy and 
            ensuring the security of any data processed by our extension.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Data Collection and Usage</h2>
          
          <h3 className="text-xl font-bold mb-2">2.1 Temporary Screenshot Capture</h3>
          <p className="mb-4">
            When you click the "Extract Palette" button, Palettes & Hues temporarily captures a screenshot 
            of the visible area of your current webpage. This screenshot is used solely for the purpose 
            of color analysis.
          </p>

          <h3 className="text-xl font-bold mb-2">2.2 Local Processing</h3>
          <p className="mb-4">
            All color extraction and analysis is performed locally within your browser. The captured 
            screenshot and resulting color data are not stored permanently or transmitted to any 
            external servers.
          </p>

          <h3 className="text-xl font-bold mb-2">2.3 No Personal Information Collection</h3>
          <p>
            Palettes & Hues does not collect, store, or process any personal information, including 
            but not limited to names, email addresses, or browsing history.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Data Sharing and Third-Party Access</h2>
          <p>
            We do not share, sell, rent, or trade any information with third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
          <p>
            The temporary screenshot used for color analysis is discarded immediately after the color 
            palette is generated. No data is retained beyond the immediate use for palette extraction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. User Controls</h2>
          <p>
            Color palette extraction is initiated only when you explicitly click the "Extract Palette" 
            button. You have full control over when and where the extension performs its function.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by 
            posting the new privacy policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:developer.mayank.singh@gmail.com" className="text-blue-400 hover:text-blue-300">
              developer.mayank.singh@gmail.com
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-400 mt-8">
          By using Palettes & Hues, you agree to the collection and use of information in accordance 
          with this policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;