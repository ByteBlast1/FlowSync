import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Rodriguez',
    company: 'Rodriguez Plumbing Services',
    role: 'Owner',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'FlowSync has completely transformed how we manage our jobs. Our techs know exactly where to go and what to do, and our clients love the automated updates. Our revenue has increased by 23% since implementing this system.',
    rating: 5
  },
  {
    name: 'Jennifer Chen',
    company: 'Elite Electrical Contractors',
    role: 'Operations Manager',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'After trying 3 other scheduling solutions, we found FlowSync and never looked back. The interface is intuitive enough that even our least tech-savvy team members picked it up in no time. Client communication has never been better.',
    rating: 5
  },
  {
    name: 'David Washington',
    company: 'Washington HVAC Solutions',
    role: 'CEO',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Managing a team of 35 technicians was a nightmare before FlowSync. Now we\'ve eliminated double-bookings, reduced travel time between jobs, and our customer satisfaction scores have increased dramatically.',
    rating: 4
  },
  {
    name: 'Sarah Johnson',
    company: 'Johnson Landscaping',
    role: 'Director',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The material tracking feature alone saved us thousands in the first month. We always know what supplies we need and when we need them. The team at FlowSync has thought of everything that service businesses need.',
    rating: 5
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setSlideDirection('slide-left');
    setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setSlideDirection('slide-right');
    }, 300);
  };
  
  const prevTestimonial = () => {
    setSlideDirection('slide-right');
    setTimeout(() => {
      setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
      setSlideDirection('slide-left');
    }, 300);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSlideDirection('slide-right');
        }
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="testimonials" className="section bg-gradient-to-b from-gray-950 to-black relative">
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of service businesses already growing with FlowSync.
          </p>
        </div>
        
        <div ref={testimonialsRef} className="max-w-4xl mx-auto">
          <div className="relative">
            <div className={`transition-all duration-300 ${slideDirection}`}>
              <div className="card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">{testimonials[activeIndex].name}</h3>
                    <p className="text-gray-400 text-center mb-1">{testimonials[activeIndex].role}</p>
                    <p className="text-sm text-gray-400 text-center">{testimonials[activeIndex].company}</p>
                    <div className="flex mt-2">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                      {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-600" />
                      ))}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="h-full flex flex-col justify-center">
                      <div className="mb-4">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/30">
                          <path d="M14.4 24H8V16H16V24C16 32 8 32 8 32V36C16 36 22.4 30.4 22.4 24V16C22.4 11.6 18.8 8 14.4 8H8C3.6 8 0 11.6 0 16V24C0 28.4 3.6 32 8 32H14.4V24ZM40 24H33.6V16H41.6V24C41.6 32 33.6 32 33.6 32V36C41.6 36 48 30.4 48 24V16C48 11.6 44.4 8 40 8H33.6C29.2 8 25.6 11.6 25.6 16V24C25.6 28.4 29.2 32 33.6 32H40V24Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <blockquote className="text-lg italic mb-6">
                        "{testimonials[activeIndex].quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-primary' : 'bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 hidden md:block">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-800/80 text-white hover:bg-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16 hidden md:block">
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-800/80 text-white hover:bg-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};