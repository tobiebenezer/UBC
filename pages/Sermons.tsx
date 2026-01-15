import React, { useState } from 'react';
import { Play, Search, ArrowRight, Layers, X } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { sermonsData, seriesData } from '../data';

const Sermons: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null);

  const featuredSermon = sermonsData[0];

  const filteredSermons = sermonsData.filter(sermon => {
    const matchesSearch = 
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    
    const seriesTitle = selectedSeriesId ? seriesData.find(s => s.id === selectedSeriesId)?.title : null;
    const matchesSeries = selectedSeriesId ? sermon.series === seriesTitle : true;

    return matchesSearch && matchesSeries;
  });

  return (
    <div className="bg-church-primary min-h-screen w-full text-white pt-24 pb-20">
      
      {/* Featured Header - Cinematic */}
      <div className="px-6 container mx-auto mb-24 relative z-10">
        <Link to={`/sermons/${featuredSermon.id}`} className="block relative w-full h-[60vh] md:h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
           <img 
            src={featuredSermon.image} 
            alt={featuredSermon.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-church-primary via-transparent to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
            <span className="inline-block px-4 py-1 bg-church-gold text-church-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
               Latest Message
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
              {featuredSermon.title}
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl line-clamp-2 font-light">
               {featuredSermon.description}
            </p>
            <div className="flex items-center gap-4 group/btn">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-church-primary group-hover/btn:bg-church-gold transition-colors">
                  <Play size={24} fill="currentColor" className="ml-1" />
               </div>
               <span className="font-bold uppercase tracking-widest text-xs">Watch Now</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Series Browser - Poster Style */}
      <div className="container mx-auto pl-6 mb-24 overflow-hidden">
         <div className="flex items-center justify-between pr-6 mb-8">
            <h3 className="font-serif text-2xl text-white">Browse Series</h3>
            <div className="flex gap-2">
               <button onClick={() => setSelectedSeriesId(null)} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors ${selectedSeriesId === null ? 'bg-white text-church-primary border-white' : 'border-white/20 hover:border-white'}`}>
                  All
               </button>
            </div>
         </div>
         
         <div className="flex gap-6 overflow-x-auto pb-12 pr-6 hide-scrollbar snap-x">
            {seriesData.map(series => (
               <button 
                  key={series.id}
                  onClick={() => setSelectedSeriesId(selectedSeriesId === series.id ? null : series.id)}
                  className={`relative flex-shrink-0 w-64 h-96 rounded-3xl overflow-hidden snap-start group transition-all duration-300 border border-white/10 hover:border-church-gold/50 ${selectedSeriesId === series.id ? 'ring-2 ring-church-gold ring-offset-4 ring-offset-church-primary' : ''}`}
               >
                  <img src={series.image} alt={series.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-church-primary via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-left">
                     <h4 className="font-serif text-3xl text-white mb-2 leading-none">{series.title}</h4>
                     <p className="text-white/60 text-xs line-clamp-2">{series.description}</p>
                  </div>
               </button>
            ))}
         </div>
      </div>

      {/* Search & Grid */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-white/10 pb-8">
           <div>
              <h3 className="font-serif text-4xl text-white mb-2">
                 {selectedSeriesId ? seriesData.find(s => s.id === selectedSeriesId)?.title : "All Sermons"}
              </h3>
              <p className="text-white/40 text-sm">{filteredSermons.length} messages available</p>
           </div>
           
           <div className="relative w-full md:w-80">
              <Search className="absolute top-1/2 -translate-y-1/2 left-4 text-white/40" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-10 py-3 text-sm text-white focus:bg-white/10 focus:border-church-gold outline-none transition-all placeholder-white/30"
              />
              {searchQuery && (
                 <button onClick={() => setSearchQuery('')} className="absolute top-1/2 -translate-y-1/2 right-4 text-white/40 hover:text-white">
                   <X size={14} />
                 </button>
              )}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <Link key={sermon.id} to={`/sermons/${sermon.id}`} className="group cursor-pointer">
                <div className="aspect-video rounded-3xl overflow-hidden relative mb-4 border border-white/10">
                   <img 
                    src={sermon.image} 
                    alt={sermon.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                     <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 duration-300">
                        <Play size={20} className="text-white ml-1" fill="currentColor" />
                     </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white">
                     {sermon.duration}
                  </div>
                </div>
                <div>
                   <h3 className="font-serif text-xl text-white mb-2 group-hover:text-church-gold transition-colors">{sermon.title}</h3>
                   <div className="flex justify-between items-center text-xs text-white/40 font-bold uppercase tracking-widest">
                      <span>{sermon.speaker}</span>
                      <span>{sermon.date}</span>
                   </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sermons;