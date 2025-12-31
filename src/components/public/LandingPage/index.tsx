import React from 'react';
import Header from './Header';
import Hero from './Hero';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default LandingPage;