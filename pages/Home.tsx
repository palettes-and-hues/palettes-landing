import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChoose from '../components/WhyChoose';
import ColorGame from '../components/ColorGame';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhyChoose />
      <ColorGame />
    </>
  );
};

export default Home;