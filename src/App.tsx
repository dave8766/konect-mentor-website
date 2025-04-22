import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Safety from './components/Safety';
import AthleteCallout from './components/AthleteCallout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-primary-text bg-primary-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Safety />
        <AthleteCallout />
      </main>
      <Footer />
    </div>
  );
}

export default App;
