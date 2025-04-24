import React, { useState } from 'react';
import { Calendar, MessageSquare, Users, BarChart3, Settings, Home, LogOut } from 'lucide-react';

export const AppInterface = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'schedule':
        return <ScheduleTab />;
      case 'messages':
        return <MessagesTab />;
      case 'teams':
        return <TeamsTab />;
      default:
        return <DashboardTab />;
    }
  };
  
  return (
    <section id="interface" className="section bg-gradient-to-b from-gray-950 to-black relative">
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intuitive Interface Design</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful functionality wrapped in a clean, easy-to-use interface that your entire team will love.
          </p>
        </div>
        
        <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800 max-w-5xl mx-auto scroll-trigger">
          {/* App header */}
          <div className="bg-gray-800/80 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              <span className="font-semibold">FlowSync</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1.5 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors">
                <Bell className="h-4 w-4" />
              </button>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">JS</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* App body */}
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:block w-16 lg:w-64 bg-gray-800/40 h-[500px] p-3">
              <nav className="space-y-1">
                <SidebarItem 
                  icon={<Home className="h-5 w-5" />} 
                  label="Dashboard" 
                  isActive={activeTab === 'dashboard'} 
                  onClick={() => setActiveTab('dashboard')}
                  expandable={true}
                />
                <SidebarItem 
                  icon={<Calendar className="h-5 w-5" />} 
                  label="Schedule" 
                  isActive={activeTab === 'schedule'} 
                  onClick={() => setActiveTab('schedule')}
                  expandable={true}
                />
                <SidebarItem 
                  icon={<MessageSquare className="h-5 w-5" />} 
                  label="Messages" 
                  isActive={activeTab === 'messages'} 
                  onClick={() => setActiveTab('messages')}
                  expandable={true}
                />
                <SidebarItem 
                  icon={<Users className="h-5 w-5" />} 
                  label="Teams" 
                  isActive={activeTab === 'teams'} 
                  onClick={() => setActiveTab('teams')}
                  expandable={true}
                />
                <SidebarItem 
                  icon={<BarChart3 className="h-5 w-5" />} 
                  label="Reports" 
                  isActive={false} 
                  onClick={() => {}}
                  expandable={true}
                />
                <div className="mt-auto pt-4">
                  <SidebarItem 
                    icon={<Settings className="h-5 w-5" />} 
                    label="Settings" 
                    isActive={false} 
                    onClick={() => {}}
                    expandable={true}
                  />
                  <SidebarItem 
                    icon={<LogOut className="h-5 w-5" />} 
                    label="Logout" 
                    isActive={false} 
                    onClick={() => {}}
                    expandable={true}
                  />
                </div>
              </nav>
            </div>
            
            {/* Main content */}
            <div className="flex-1 p-4 lg:p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SidebarItem = ({ icon, label, isActive, onClick, expandable }) => (
  <button 
    className={`flex items-center w-full p-2 ${
      isActive ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-700/30 hover:text-white'
    } rounded-md transition-colors`}
    onClick={onClick}
  >
    <span className="flex-shrink-0">{icon}</span>
    {expandable && <span className="ml-3 hidden lg:block">{label}</span>}
  </button>
);

const Bell = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const DashboardTab = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex space-x-2">
        <span className="text-sm text-gray-400">Today, May 15, 2025</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-gray-400">Today's Jobs</p>
            <h3 className="text-2xl font-bold">8</h3>
          </div>
          <span className="p-2 bg-primary/20 rounded-md text-primary">
            <Calendar className="h-5 w-5" />
          </span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-green-500 mr-1">↑ 12%</span>
          <span className="text-gray-400">from last week</span>
        </div>
      </div>
      
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-gray-400">Team Members Active</p>
            <h3 className="text-2xl font-bold">12/15</h3>
          </div>
          <span className="p-2 bg-secondary/20 rounded-md text-secondary">
            <Users className="h-5 w-5" />
          </span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-green-500 mr-1">80%</span>
          <span className="text-gray-400">availability</span>
        </div>
      </div>
      
      <div className="bg-gray-800/50 p-4 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-gray-400">Client Messages</p>
            <h3 className="text-2xl font-bold">24</h3>
          </div>
          <span className="p-2 bg-accent/20 rounded-md text-accent">
            <MessageSquare className="h-5 w-5" />
          </span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-red-500 mr-1">↑ 18%</span>
          <span className="text-gray-400">from yesterday</span>
        </div>
      </div>
    </div>
    
    <div className="bg-gray-800/50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Upcoming Jobs</h3>
      <div className="space-y-3">
        {[1, 2, 3].map(job => (
          <div key={job} className="flex justify-between items-center p-2 hover:bg-gray-700/30 rounded-md transition-colors">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-3 ${
                job === 1 ? 'bg-green-500' : job === 2 ? 'bg-yellow-500' : 'bg-blue-500'
              }`}></div>
              <div>
                <h4 className="font-medium">Job #{8240 + job}</h4>
                <p className="text-sm text-gray-400">{
                  job === 1 ? 'Installation • 10:00 AM' : 
                  job === 2 ? 'Maintenance • 1:30 PM' : 
                  'Inspection • 4:00 PM'
                }</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className={`px-2 py-1 text-xs rounded-full ${
                job === 1 ? 'bg-green-500/20 text-green-400' : 
                job === 2 ? 'bg-yellow-500/20 text-yellow-400' : 
                'bg-blue-500/20 text-blue-400'
              }`}>
                {job === 1 ? 'Confirmed' : job === 2 ? 'Needs Materials' : 'Pending Crew'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ScheduleTab = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">Schedule</h2>
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-sm bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">Today</button>
        <button className="px-3 py-1 text-sm bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">Week</button>
        <button className="px-3 py-1 text-sm bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">Month</button>
      </div>
    </div>
    
    <div className="bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
      <div className="min-w-max">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <div key={i} className="p-2 text-center">
              <p className="text-sm text-gray-400">{day}</p>
              <p className={`text-sm font-medium ${i === 2 ? 'text-primary' : ''}`}>{15 + i}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1 h-64">
          {[0, 1, 2, 3, 4, 5, 6].map((day) => (
            <div key={day} className="border border-gray-700 rounded-md p-1 h-full">
              {day === 2 && (
                <>
                  <div className="bg-primary/20 text-primary p-1 rounded mb-1 text-xs">
                    10:00 AM - Install #8241
                  </div>
                  <div className="bg-secondary/20 text-secondary p-1 rounded mb-1 text-xs">
                    1:30 PM - Maint #8242
                  </div>
                </>
              )}
              {day === 3 && (
                <div className="bg-accent/20 text-accent p-1 rounded mb-1 text-xs">
                  9:00 AM - Service #8250
                </div>
              )}
              {day === 5 && (
                <div className="bg-primary/20 text-primary p-1 rounded mb-1 text-xs">
                  2:00 PM - Install #8261
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MessagesTab = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">Messages</h2>
      <button className="px-3 py-1 text-sm bg-primary rounded-md hover:bg-primary-dark transition-colors">
        New Message
      </button>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-64">
      <div className="bg-gray-800/50 rounded-lg overflow-hidden">
        <div className="p-3 bg-gray-800">
          <h3 className="font-medium">Conversations</h3>
        </div>
        <div className="p-2 space-y-1 h-full overflow-y-auto">
          {['John Smith', 'Sarah Johnson', 'Mike Williams'].map((name, i) => (
            <div key={i} className={`p-2 rounded-md flex items-center ${i === 0 ? 'bg-gray-700/50' : 'hover:bg-gray-700/30'} cursor-pointer`}>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-sm">{name.charAt(0)}{name.split(' ')[1].charAt(0)}</span>
              </div>
              <div>
                <h4 className="font-medium text-sm">{name}</h4>
                <p className="text-xs text-gray-400">{
                  i === 0 ? 'When will the crew arrive?' : 
                  i === 1 ? 'Thanks for the update' : 
                  'Materials received'
                }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800/50 rounded-lg overflow-hidden lg:col-span-2">
        <div className="p-3 bg-gray-800 flex items-center">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-sm">JS</span>
          </div>
          <h3 className="font-medium">John Smith</h3>
        </div>
        <div className="p-4 h-[calc(100%-64px)] flex flex-col">
          <div className="flex-1 space-y-3 overflow-y-auto">
            <div className="flex justify-end">
              <div className="bg-primary/30 p-2 rounded-lg max-w-[80%]">
                <p className="text-sm">Hi John, your installation is scheduled for tomorrow at 10 AM.</p>
                <span className="text-xs text-gray-400 block text-right">9:32 AM</span>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-700/50 p-2 rounded-lg max-w-[80%]">
                <p className="text-sm">When will the crew arrive? I need to make sure I'm home.</p>
                <span className="text-xs text-gray-400 block">9:45 AM</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary/30 p-2 rounded-lg max-w-[80%]">
                <p className="text-sm">The crew will arrive between 10 AM and 10:30 AM. You'll receive a notification when they're on their way.</p>
                <span className="text-xs text-gray-400 block text-right">9:47 AM</span>
              </div>
            </div>
          </div>
          <div className="mt-3 flex">
            <input 
              type="text" 
              className="flex-1 bg-gray-700/50 border border-gray-600 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
              placeholder="Type your message..."
            />
            <button className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-md transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TeamsTab = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">Teams & Crew Management</h2>
      <button className="px-3 py-1 text-sm bg-primary rounded-md hover:bg-primary-dark transition-colors">
        Add Member
      </button>
    </div>
    
    <div className="bg-gray-800/50 p-4 rounded-lg overflow-hidden">
      <h3 className="font-medium mb-4">Team Members</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'Alex Johnson', role: 'Lead Technician', status: 'Active' },
          { name: 'Maria Garcia', role: 'Installer', status: 'On Job' },
          { name: 'David Kim', role: 'Service Tech', status: 'Available' },
          { name: 'Sarah Williams', role: 'Manager', status: 'In Office' },
          { name: 'James Smith', role: 'Installer', status: 'On Break' },
          { name: 'Emma Davis', role: 'Apprentice', status: 'Training' }
        ].map((member, i) => (
          <div key={i} className="p-3 bg-gray-700/30 rounded-lg flex items-center">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
              <span>{member.name.charAt(0)}</span>
            </div>
            <div>
              <h4 className="font-medium">{member.name}</h4>
              <p className="text-sm text-gray-400">{member.role}</p>
              <div className="flex items-center mt-1">
                <div className={`w-2 h-2 rounded-full mr-1 ${
                  member.status === 'Active' || member.status === 'Available' ? 'bg-green-500' : 
                  member.status === 'On Job' ? 'bg-blue-500' : 
                  member.status === 'On Break' ? 'bg-yellow-500' : 
                  'bg-gray-500'
                }`}></div>
                <span className="text-xs">{member.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);