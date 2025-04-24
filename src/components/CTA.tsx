import React from 'react';
import { ChevronRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="section bg-gradient-to-b from-black to-gray-950 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 scroll-trigger">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Service Business?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of service professionals who've streamlined their operations, delighted their customers, and grown their business with FlowSync.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 p-5 rounded-xl text-center">
              <div className="bg-primary/20 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Start Your Free Trial</h3>
              <p className="text-gray-400 text-sm">
                Get full access to all features for 14 days, no credit card required.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-5 rounded-xl text-center">
              <div className="bg-primary/20 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Set Up Your Account</h3>
              <p className="text-gray-400 text-sm">
                Our onboarding team will help configure FlowSync for your specific needs.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-5 rounded-xl text-center">
              <div className="bg-primary/20 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transform Your Business</h3>
              <p className="text-gray-400 text-sm">
                Watch your efficiency soar and your customer satisfaction ratings climb.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="btn-primary px-8 py-3 text-lg">
              <span className="flex items-center">
                Start Your Free Trial <ChevronRight className="ml-1 h-5 w-5" />
              </span>
            </button>
            <p className="mt-4 text-gray-400">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};