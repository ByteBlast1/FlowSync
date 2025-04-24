import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 49,
    description: 'Perfect for small service businesses just getting started.',
    features: [
      'Up to 10 team members',
      'Job scheduling & management',
      'Client messaging',
      'Basic reporting',
      'Mobile app access',
      'Email support'
    ],
    missingFeatures: [
      'Advanced analytics',
      'Team performance tracking',
      'Custom job workflows',
      'API access',
      'White-label client portal'
    ],
    highlight: false,
    ctaText: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing service businesses with multiple teams.',
    features: [
      'Up to 25 team members',
      'Job scheduling & management',
      'Client messaging & portal',
      'Material tracking',
      'Advanced reporting',
      'Custom job workflows',
      'Mobile app access',
      'Priority support'
    ],
    missingFeatures: [
      'API access',
      'White-label client portal'
    ],
    highlight: true,
    ctaText: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'Full-featured solution for established service businesses.',
    features: [
      'Unlimited team members',
      'Job scheduling & management',
      'Client messaging & portal',
      'Material tracking',
      'Advanced analytics',
      'Team performance tracking',
      'Custom job workflows',
      'API access',
      'White-label client portal',
      'Dedicated account manager',
      '24/7 premium support'
    ],
    missingFeatures: [],
    highlight: false,
    ctaText: 'Contact Sales'
  }
];

export const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  return (
    <section id="pricing" className="section bg-gradient-to-b from-black to-gray-950 relative">
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
          
          <div className="mt-8 inline-flex items-center bg-gray-800/50 p-1 rounded-full">
            <button 
              className={`px-4 py-2 rounded-full text-sm ${
                billingPeriod === 'monthly' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-400 hover:text-white'
              } transition-all duration-200`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm ${
                billingPeriod === 'annual' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-400 hover:text-white'
              } transition-all duration-200`}
              onClick={() => setBillingPeriod('annual')}
            >
              Annual <span className="text-xs text-accent">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`card relative overflow-hidden ${
                plan.highlight 
                  ? 'border-2 border-primary translate-y-[-8px]' 
                  : 'border border-gray-800'
              } scroll-trigger`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${billingPeriod === 'annual' ? Math.round(plan.price * 0.8) : plan.price}</span>
                <span className="text-gray-400">/month</span>
                {billingPeriod === 'annual' && (
                  <span className="block text-sm text-accent">Billed annually</span>
                )}
              </div>
              
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
                
                {plan.missingFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-500">
                    <X className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-md transition-all ${
                  plan.highlight 
                    ? 'bg-primary hover:bg-primary-dark' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 text-center scroll-trigger">
          <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
          <p className="text-gray-400 mb-4">
            We offer tailored plans for large enterprises with specific requirements.
          </p>
          <button className="btn-secondary">Contact Our Sales Team</button>
        </div>
      </div>
    </section>
  );
};