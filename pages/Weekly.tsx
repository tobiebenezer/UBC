import React from 'react';
import { weeklyUpdate, eventsData } from '../data';
import { Play, Download, Calendar as CalendarIcon, ArrowRight, Bell } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const Weekly: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#fbfaf8] min-h-screen">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center max-w-4xl">
         <span className="text-church-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">This Week</span>
         <h1 className="font-serif text-5xl md:text-7xl text-church-primary mb-6">Weekly Update</h1>
         <p className="text-xl text-gray-400 font-light">{weeklyUpdate.date}</p>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Video & Main Info */}
            <div className="lg:col-span-2">
               
               {/* Video Player Card */}
               <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-gray-100 mb-12">
                  <div className="aspect-video w-full bg-black rounded-[2rem] overflow-hidden relative group cursor-pointer">
                     <video 
                        src={weeklyUpdate.videoUrl}
                        poster={weeklyUpdate.thumbnail}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        controls
                     />
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                           <Play size={32} className="text-white ml-1" fill="currentColor" />
                        </div>
                     </div>
                  </div>
                  <div className="p-6">
                     <h2 className="font-serif text-3xl text-church-primary mb-2">{weeklyUpdate.title}</h2>
                     <p className="text-gray-500 leading-relaxed">{weeklyUpdate.description}</p>
                  </div>
               </div>

               {/* Highlights Bulletin */}
               <div className="bg-church-cream rounded-[2.5rem] p-10 md:p-14 border border-church-primary/5">
                  <h3 className="font-serif text-2xl text-church-primary mb-10 flex items-center gap-3">
                     <Bell className="text-church-gold" size={24} /> News & Updates
                  </h3>
                  <div className="space-y-10">
                     {weeklyUpdate.highlights.map((item, idx) => (
                        <div key={idx} className="flex gap-6 group">
                           <div className="w-12 h-12 rounded-2xl bg-white border border-church-primary/10 flex items-center justify-center text-church-primary font-serif font-bold text-lg shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                              {idx + 1}
                           </div>
                           <div>
                              <h4 className="font-bold text-church-primary text-lg mb-2">{item.title}</h4>
                              <p className="text-gray-500 leading-relaxed">{item.content}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-12 pt-12 border-t border-church-primary/10">
                     <button className="flex items-center gap-3 text-church-primary font-bold uppercase tracking-widest text-xs hover:text-church-gold transition-colors">
                        <Download size={16} /> Download Sunday Bulletin (PDF)
                     </button>
                  </div>
               </div>

            </div>

            {/* Right Column: Mini Calendar & Quick Links */}
            <div className="space-y-8">
               
               {/* Week at a Glance */}
               <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                     <h3 className="font-serif text-xl text-church-primary">Week at a Glance</h3>
                     <Link to="/events" className="text-xs font-bold text-church-gold uppercase tracking-widest hover:text-church-primary">Full Calendar</Link>
                  </div>

                  <div className="space-y-6 relative">
                     <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-100"></div>
                     
                     {/* Regular Sunday Service */}
                     <div className="relative z-10 flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-church-primary border-4 border-white flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 uppercase">
                           Sun
                        </div>
                        <div>
                           <h4 className="font-bold text-church-primary text-sm mb-1">Sunday Worship</h4>
                           <p className="text-xs text-gray-400">9:00 AM & 11:00 AM</p>
                        </div>
                     </div>

                     {/* Midweek */}
                     <div className="relative z-10 flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-church-cream border-4 border-white flex items-center justify-center text-[10px] font-bold text-church-primary flex-shrink-0 uppercase">
                           Wed
                        </div>
                        <div>
                           <h4 className="font-bold text-church-primary text-sm mb-1">Midweek Prayer</h4>
                           <p className="text-xs text-gray-400">6:30 PM - Sanctuary</p>
                        </div>
                     </div>

                     {/* Events from Data */}
                     {eventsData.slice(0, 3).map((event, idx) => (
                        <div key={idx} className="relative z-10 flex gap-4">
                           <div className="w-10 h-10 rounded-full bg-church-gold border-4 border-white flex items-center justify-center text-[10px] font-bold text-church-primary flex-shrink-0 uppercase">
                              {event.day}
                           </div>
                           <div>
                              <h4 className="font-bold text-church-primary text-sm mb-1 line-clamp-1">{event.title}</h4>
                              <p className="text-xs text-gray-400">{event.time}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <Link to="/events" className="mt-8 block w-full py-4 bg-gray-50 text-church-primary font-bold uppercase tracking-widest text-[10px] text-center rounded-xl hover:bg-church-primary hover:text-white transition-colors">
                     View All Events
                  </Link>
               </div>

               {/* Featured Ministry Promo */}
               <div className="bg-church-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-church-gold/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                  <h3 className="font-serif text-2xl mb-4 relative z-10">Get Connected</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed relative z-10">
                     New to United Baptist? The best way to meet people is to join a small group.
                  </p>
                  <Link to="/groups" className="inline-flex items-center gap-2 text-church-gold font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all relative z-10">
                     Find a Group <ArrowRight size={14} />
                  </Link>
               </div>

            </div>
         </div>
      </div>

    </div>
  );
};

export default Weekly;