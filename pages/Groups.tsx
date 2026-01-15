import React, { useState } from 'react';
import { groupsData } from '../data';
import { Search, MapPin, Clock, Users, ArrowRight, X, Filter } from 'lucide-react';

const Groups: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeDay, setActiveDay] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Mixed', 'Men', 'Women', 'Young Adults', 'Couples'];
  const days = ['All', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const filteredGroups = groupsData.filter(group => {
    const matchesCategory = activeCategory === 'All' || group.category === activeCategory;
    const matchesDay = activeDay === 'All' || group.day === activeDay;
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          group.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDay && matchesSearch;
  });

  return (
    <div className="bg-[#fbfaf8] min-h-screen w-full">
      
      {/* Hero Header */}
      <div className="relative pt-40 pb-32 px-6 bg-church-primary text-center text-white overflow-hidden">
         <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-church-primary via-church-primary/80 to-transparent"></div>
         
         <div className="relative z-10 container mx-auto max-w-4xl">
            <span className="text-church-gold font-bold text-xs tracking-[0.2em] uppercase mb-6 block animate-fade-in-up">Community</span>
            <h1 className="font-serif text-6xl md:text-7xl mb-8 animate-fade-in-up">Find Your People</h1>
            <p className="text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up">
              We were never meant to walk this journey alone. Connect with a small group to build lasting relationships and grow in your faith.
            </p>
         </div>
      </div>

      {/* Sticky Filter Bar - Glassmorphism */}
      <div className="sticky top-[80px] z-30 px-4 md:px-6 -mt-10 mb-16">
        <div className="container mx-auto max-w-7xl">
           <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-full p-2 md:p-3 flex flex-col lg:flex-row items-center justify-between gap-4">
              
              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full lg:w-auto px-2">
                 {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                        activeCategory === cat 
                        ? 'bg-church-primary text-white shadow-lg transform scale-105' 
                        : 'bg-transparent text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                 ))}
              </div>

              {/* Filters Right Side */}
              <div className="flex items-center gap-3 w-full lg:w-auto px-2">
                 <div className="relative group">
                    <select 
                       value={activeDay}
                       onChange={(e) => setActiveDay(e.target.value)}
                       className="appearance-none pl-6 pr-10 py-3 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest text-church-primary outline-none cursor-pointer transition-all"
                    >
                       {days.map(day => <option key={day} value={day}>{day === 'All' ? 'Any Day' : day}</option>)}
                    </select>
                    <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                 </div>

                 <div className="relative flex-grow lg:w-64">
                    <Search className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-gray-50 focus:bg-white border border-transparent focus:border-church-gold rounded-full pl-10 pr-4 py-3 text-sm outline-none transition-all"
                    />
                 </div>
              </div>

           </div>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="container mx-auto px-6 max-w-7xl pb-24">
         {filteredGroups.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGroups.map(group => (
                 <div key={group.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                    <div className="h-64 relative overflow-hidden">
                       <img 
                         src={group.image} 
                         alt={group.name} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                       <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                             {group.category}
                          </span>
                       </div>
                       <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="font-serif text-2xl mb-1">{group.name}</h3>
                          <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                             <Users size={12} /> Led by {group.leader}
                          </div>
                       </div>
                    </div>
                    
                    <div className="p-8 flex-grow flex flex-col">
                       <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-light">
                          {group.description}
                       </p>
                       
                       <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
                          <div className="flex items-center gap-2">
                             <Clock size={14} className="text-church-gold" /> {group.day}s, {group.time}
                          </div>
                          <div className="flex items-center gap-2">
                             <MapPin size={14} className="text-church-gold" /> {group.location}
                          </div>
                       </div>

                       <button className="w-full py-4 border border-church-primary text-church-primary font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-church-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-church-gold group-hover:border-church-gold group-hover:text-church-primary">
                          Request to Join
                       </button>
                    </div>
                 </div>
              ))}
           </div>
         ) : (
           <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Search className="text-gray-300" size={32} />
              </div>
              <h3 className="font-serif text-2xl text-church-primary mb-2">No Groups Found</h3>
              <p className="text-gray-400 mb-8">We couldn't find any groups matching your criteria.</p>
              <button 
                onClick={() => {setActiveCategory('All'); setActiveDay('All'); setSearchQuery('');}} 
                className="px-8 py-3 bg-church-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-church-gold hover:text-church-primary transition-colors"
              >
                Clear Filters
              </button>
           </div>
         )}
      </div>
    </div>
  );
};

export default Groups;