import React from 'react';
import { groupsData, eventsData } from '../data';
import { Calendar, Users, Heart, ArrowRight, Play, BookOpen, Clock, MapPin, CreditCard } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const Dashboard: React.FC = () => {
  const user = {
    name: "Sarah",
    groups: [groupsData[2], groupsData[3]], // Moms & Couples
    events: [eventsData[0]], // Night of Worship
    givingProgress: 75, // Percent
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="pt-32 pb-20 bg-[#fbfaf8] min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <span className="text-church-gold font-bold uppercase tracking-widest text-xs mb-2 block">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
             <h1 className="font-serif text-4xl md:text-5xl text-church-primary">{getGreeting()}, {user.name}.</h1>
           </div>
           <div className="flex gap-4 mt-6 md:mt-0">
              <Link to="/give" className="px-6 py-3 bg-white border border-gray-100 rounded-full text-xs font-bold uppercase tracking-widest text-church-primary hover:border-church-gold transition-colors flex items-center gap-2 shadow-sm">
                 <Heart size={14} className="text-church-gold" /> Give
              </Link>
              <Link to="/prayer" className="px-6 py-3 bg-church-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-church-gold hover:text-church-primary transition-colors shadow-lg">
                 Request Prayer
              </Link>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Left Column: Main Content */}
           <div className="lg:col-span-2 space-y-8">
              
              {/* Verse of the Day Card */}
              <div className="bg-church-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-church-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Verse of the Day</span>
                    <h2 className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-6 text-white/90">
                      "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
                    </h2>
                    <p className="text-church-gold font-bold uppercase tracking-widest text-xs">Joshua 1:9</p>
                 </div>
              </div>

              {/* My Community Section */}
              <div>
                 <div className="flex justify-between items-end mb-6">
                    <h3 className="font-serif text-2xl text-church-primary flex items-center gap-3">
                       <Users className="text-church-gold" size={24} /> My Groups
                    </h3>
                    <Link to="/groups" className="text-xs text-gray-400 hover:text-church-primary font-bold uppercase tracking-widest">Find More</Link>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {user.groups.map(group => (
                       <div key={group.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all group cursor-pointer">
                          <div className="flex items-center gap-4 mb-4">
                             <img src={group.image} alt={group.name} className="w-14 h-14 rounded-2xl object-cover" />
                             <div>
                                <h4 className="font-bold text-church-primary leading-tight">{group.name}</h4>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-church-cyan">{group.category}</span>
                             </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded-xl">
                             <Clock size={14} className="text-church-gold" /> {group.day}s at {group.time}
                          </div>
                          <button className="w-full py-2 border border-gray-100 rounded-xl text-xs font-bold text-church-primary uppercase tracking-wide hover:bg-church-primary hover:text-white transition-colors">
                             View Discussion
                          </button>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Recent Sermon Progress (Mock) */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                 <h3 className="font-serif text-2xl text-church-primary mb-6 flex items-center gap-3">
                    <Play className="text-church-gold" size={24} /> Continue Watching
                 </h3>
                 <div className="flex gap-6 items-center">
                    <div className="w-32 h-20 bg-gray-200 rounded-xl overflow-hidden relative flex-shrink-0">
                       <img src="https://images.unsplash.com/photo-1543616991-75a2c125bb9b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sermon" />
                       <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                             <Play size={12} className="ml-0.5 text-church-primary" fill="currentColor" />
                          </div>
                       </div>
                    </div>
                    <div className="flex-grow">
                       <h4 className="font-bold text-lg text-church-primary">The Ruthless Elimination of Hurry</h4>
                       <p className="text-xs text-gray-400 mb-2">Stopped at 14:20</p>
                       <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div className="w-[40%] h-full bg-church-gold"></div>
                       </div>
                    </div>
                    <button className="hidden md:block text-xs font-bold uppercase tracking-widest text-church-cyan hover:text-church-primary">Resume</button>
                 </div>
              </div>

           </div>

           {/* Right Column: Sidebar */}
           <div className="space-y-8">
              
              {/* Upcoming Schedule */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-serif text-xl text-church-primary">My Schedule</h3>
                    <Link to="/events" className="text-church-gold hover:text-church-primary"><ArrowRight size={20} /></Link>
                 </div>
                 
                 <div className="space-y-6 relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-100"></div>
                    
                    {/* Event Item */}
                    {user.events.map((event, idx) => (
                       <div key={idx} className="relative z-10 flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-church-cream border-4 border-white flex items-center justify-center text-xs font-bold text-church-primary flex-shrink-0">
                             {event.day}
                          </div>
                          <div>
                             <h4 className="font-bold text-church-primary text-sm mb-1">{event.title}</h4>
                             <p className="text-xs text-gray-400 mb-1">{event.time}</p>
                             <p className="text-xs text-gray-400 flex items-center gap-1"><MapPin size={10} /> {event.location}</p>
                          </div>
                       </div>
                    ))}

                    {/* Regular Service */}
                    <div className="relative z-10 flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-church-primary border-4 border-white flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                             Sun
                          </div>
                          <div>
                             <h4 className="font-bold text-church-primary text-sm mb-1">Sunday Service</h4>
                             <p className="text-xs text-gray-400 mb-1">9:00 AM - 10:15 AM</p>
                             <p className="text-xs text-gray-400 flex items-center gap-1"><MapPin size={10} /> Main Sanctuary</p>
                          </div>
                       </div>
                 </div>
              </div>

              {/* Giving Overview */}
              <div className="bg-church-cream p-8 rounded-[2.5rem] border border-church-primary/5">
                 <h3 className="font-serif text-xl text-church-primary mb-6 flex items-center gap-2">
                    <CreditCard size={18} className="text-church-gold" /> Giving Impact
                 </h3>
                 <div className="mb-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                       <span>2024 Goal</span>
                       <span>75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-church-gold to-orange-300 w-[75%] rounded-full"></div>
                    </div>
                 </div>
                 <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Thank you for your faithfulness. Your contributions are building the Family Wing expansion.
                 </p>
                 <Link to="/give" className="block w-full py-3 bg-white text-church-primary font-bold text-xs uppercase tracking-widest text-center rounded-xl hover:shadow-md transition-all">
                    View History
                 </Link>
              </div>

              {/* Devotional Download */}
              <div className="bg-[#1f2937] p-8 rounded-[2.5rem] text-white relative overflow-hidden group cursor-pointer">
                 <div className="absolute inset-0 bg-church-gold/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                 <BookOpen className="mb-4 text-church-cyan" />
                 <h3 className="font-serif text-xl mb-2">Weekly Guide</h3>
                 <p className="text-white/60 text-sm mb-4">Download this week's study materials.</p>
                 <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-church-gold">
                    Download PDF <ArrowRight size={12} />
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;