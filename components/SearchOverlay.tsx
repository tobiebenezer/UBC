
import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Calendar, Play, Users, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { sermonsData, eventsData, ministriesData, articlesData } from '../data';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredSermons = query ? sermonsData.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.series.toLowerCase().includes(query.toLowerCase())) : [];
  const filteredEvents = query ? eventsData.filter(e => e.title.toLowerCase().includes(query.toLowerCase())) : [];
  const filteredMinistries = query ? ministriesData.filter(m => m.title.toLowerCase().includes(query.toLowerCase())) : [];
  const filteredArticles = query ? articlesData.filter(a => a.title.toLowerCase().includes(query.toLowerCase())) : [];

  const hasResults = filteredSermons.length > 0 || filteredEvents.length > 0 || filteredMinistries.length > 0 || filteredArticles.length > 0;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-church-primary/95 backdrop-blur-xl animate-fade-in-up duration-300">
      
      {/* Search Header */}
      <div className="container mx-auto px-6 pt-8 pb-4">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-church-primary transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Search className="absolute top-1/2 -translate-y-1/2 left-0 text-church-gold w-8 h-8 md:w-10 md:h-10" />
          <input 
            ref={inputRef}
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sermons, events, ministries..." 
            className="w-full bg-transparent border-b-2 border-white/20 py-4 md:py-6 pl-12 md:pl-16 text-3xl md:text-5xl font-serif text-white placeholder-white/30 focus:border-church-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Results Area */}
      <div className="flex-grow overflow-y-auto px-6 pb-20">
        <div className="container mx-auto max-w-4xl pt-8">
          
          {!query && (
            <div className="text-center text-white/40 mt-20">
              <p className="text-sm font-bold uppercase tracking-widest mb-4">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Sunday Service', 'Youth', 'Giving', 'Christmas', 'Prayer'].map(term => (
                  <button key={term} onClick={() => setQuery(term)} className="px-4 py-2 rounded-full border border-white/10 hover:border-church-gold hover:text-church-gold transition-colors text-sm">
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
             <div className="text-center text-white/50 mt-20">
                <p>No results found for "{query}".</p>
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            
            {/* Sermons */}
            {filteredSermons.length > 0 && (
              <div>
                 <h3 className="text-church-gold font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                    <Play size={14} /> Sermons
                 </h3>
                 <div className="space-y-4">
                    {filteredSermons.slice(0, 3).map(s => (
                       <Link key={s.id} to={`/sermons/${s.id}`} onClick={onClose} className="flex gap-4 group p-3 rounded-2xl hover:bg-white/5 transition-colors">
                          <img src={s.image} alt="" className="w-16 h-16 rounded-lg object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                          <div>
                             <h4 className="text-white font-serif text-lg group-hover:text-church-gold transition-colors">{s.title}</h4>
                             <p className="text-white/50 text-xs">{s.speaker} • {s.date}</p>
                          </div>
                       </Link>
                    ))}
                 </div>
              </div>
            )}

            {/* Events */}
            {filteredEvents.length > 0 && (
              <div>
                 <h3 className="text-church-gold font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                    <Calendar size={14} /> Events
                 </h3>
                 <div className="space-y-4">
                    {filteredEvents.slice(0, 3).map(e => (
                       <Link key={e.id} to={`/events/${e.id}`} onClick={onClose} className="flex gap-4 group p-3 rounded-2xl hover:bg-white/5 transition-colors">
                          <div className="w-16 h-16 rounded-lg bg-white/10 flex flex-col items-center justify-center text-white">
                             <span className="font-bold text-lg leading-none">{e.day}</span>
                             <span className="text-[10px] uppercase tracking-wider">{e.month}</span>
                          </div>
                          <div>
                             <h4 className="text-white font-serif text-lg group-hover:text-church-gold transition-colors">{e.title}</h4>
                             <p className="text-white/50 text-xs">{e.time}</p>
                          </div>
                       </Link>
                    ))}
                 </div>
              </div>
            )}

            {/* Ministries */}
            {filteredMinistries.length > 0 && (
              <div>
                 <h3 className="text-church-gold font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                    <Users size={14} /> Ministries
                 </h3>
                 <div className="space-y-4">
                    {filteredMinistries.map(m => (
                       <Link key={m.id} to={`/ministries/${m.id}`} onClick={onClose} className="group flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors">
                          <span className="text-white font-serif text-lg group-hover:text-church-gold transition-colors">{m.title}</span>
                          <ArrowRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
                       </Link>
                    ))}
                 </div>
              </div>
            )}

            {/* Articles */}
            {filteredArticles.length > 0 && (
              <div>
                 <h3 className="text-church-gold font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                    <FileText size={14} /> Articles
                 </h3>
                 <div className="space-y-4">
                    {filteredArticles.map(a => (
                       <Link key={a.id} to={`/stories/${a.id}`} onClick={onClose} className="group flex flex-col p-3 rounded-2xl hover:bg-white/5 transition-colors">
                          <span className="text-white font-serif text-lg group-hover:text-church-gold transition-colors mb-1">{a.title}</span>
                          <span className="text-white/40 text-xs">{a.author}</span>
                       </Link>
                    ))}
                 </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
