import React, { useEffect } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export const Hero = () => {
  useEffect(() => {
    // Initialize animation observers when component mounts
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-trigger').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      // Cleanup observer when component unmounts
      document.querySelectorAll('.scroll-trigger').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-sm rounded-full mb-6 animated-element">
              <span className="text-sm font-medium text-primary-light">Streamline Your Service Business</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animated-element staggered-delay-1">
              Scheduling & Client Communication <span className="gradient-text">Simplified</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl animated-element staggered-delay-2">
              The all-in-one platform designed for service businesses to manage jobs, assign crews, 
              track materials, and keep clients updated—all in one place.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animated-element staggered-delay-3">
              <button className="btn-primary">Start Your Free Trial</button>
              <button className="btn-secondary">Schedule Demo</button>
            </div>
            
            <div className="flex flex-wrap gap-6 animated-element staggered-delay-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">14-day free trial</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-gray-700 floating">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold">Today's Schedule</h3>
                  <p className="text-gray-400">8 jobs scheduled</p>
                </div>
                <Clock className="h-6 w-6 text-primary" />
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3].map(job => (
                  <div 
                    key={job} 
                    className="p-3 bg-gray-700/50 rounded-lg flex justify-between items-center hover:bg-gray-600/50 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          job === 1 ? 'bg-secondary' : job === 2 ? 'bg-accent' : 'bg-primary'
                        }`}></div>
                        <h4 className="font-medium">Job #{8240 + job}</h4>
                      </div>
                      <p className="text-sm text-gray-400">{
                        job === 1 ? 'Installation • 10:00 AM' : 
                        job === 2 ? 'Maintenance • 1:30 PM' : 
                        'Inspection • 4:00 PM'
                      }</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex -space-x-2 mr-4">
                        {[1, 2].map(crew => (
                          <div 
                            key={crew} 
                            className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center border-2 border-gray-700"
                          >
                            <Users className="h-4 w-4" />
                          </div>
                        ))}
                      </div>
                      <span className={`px-2 py-1 text-xs rounded ${
                        job === 1 ? 'bg-secondary/20 text-secondary-light' : 
                        job === 2 ? 'bg-accent/20 text-accent-light' : 
                        'bg-primary/20 text-primary-light'
                      }`}>
                        {job === 1 ? 'In Progress' : job === 2 ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 text-sm text-primary hover:text-primary-light transition-colors">
                View Full Schedule →
              </button>
            </div>
            
            <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-64 h-32 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-xl filter blur-2xl"></div>
            <div className="hidden md:block absolute -left-8 -bottom-8 w-48 h-48 bg-primary/30 rounded-full filter blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};