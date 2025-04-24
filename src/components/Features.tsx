import React from 'react';
import { Calendar, MessageSquare, Truck, Users, ClipboardCheck, BarChart3, Bell, Briefcase } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Intelligent Scheduling',
    description: 'Optimize crew assignments and job timelines with AI-powered scheduling that considers travel time, skill sets, and availability.'
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Client Communication',
    description: 'Automated updates, custom notifications, and a client portal keep everyone informed about job status and next steps.'
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'Material Tracking',
    description: 'Monitor inventory, schedule deliveries, and ensure materials arrive on time for every job in your pipeline.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Team Management',
    description: 'Assign the right crews to the right jobs, track performance, and streamline communication between office and field.'
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: 'Job Workflow',
    description: 'Custom status tracking from estimate to completion with notifications at each stage of your service process.'
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Performance Analytics',
    description: 'Gain insights into job profitability, team efficiency, and client satisfaction with comprehensive reporting.'
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: 'Smart Notifications',
    description: 'Customizable alerts keep your team updated on schedule changes, client requests, and critical job information.'
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Business Integration',
    description: 'Seamlessly connects with your accounting software, CRM, and other business tools to create a unified workflow.'
  }
];

export const Features = () => {
  return (
    <section id="features" className="section bg-gradient-to-b from-gray-900 to-gray-950 relative">
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Service Professionals</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to streamline operations, delight customers, and grow your service business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:translate-y-[-8px] scroll-trigger" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};