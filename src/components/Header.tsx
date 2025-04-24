import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageSquare, Users, Layers } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Calendar className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold">FlowSync</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#interface" className="text-gray-300 hover:text-white transition-colors">Interface</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
        </nav>
        
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-300 hover:text-white transition-colors">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>
        
        <button 
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-gray-900 transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container-custom flex flex-col space-y-4">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#interface" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Interface</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Testimonials</a>
          <div className="flex flex-col space-y-3 pt-2">
            <button className="text-gray-300 hover:text-white transition-colors py-2">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};