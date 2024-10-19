import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white font-['Inter',sans-serif]">
      <Header />
      <main>
        <Hero />
        <Features />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
}

export default App;
