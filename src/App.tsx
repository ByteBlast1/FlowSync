import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppInterface } from './components/AppInterface';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA'; 
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white font-ubuntu">
      <Header />
      <main>
        <Hero />
        <Features />
        <AppInterface />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;