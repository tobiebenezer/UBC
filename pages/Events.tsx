
import React, { useState, useEffect } from 'react';
import { Clock, MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { eventsData } from '../data';
import { supabase } from '../lib/supabaseClient';
import { Event } from '../types';

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      if (supabase) {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('date', { ascending: true }); // Assuming date format allows sorting, or use a proper timestamp field

        if (data && !error) {
           setEvents(data as unknown as Event[]);
        } else {
           setEvents(eventsData);
        }
      } else {
        setEvents(eventsData);
      }
      setIsLoading(false);
    };
    fetchEvents();
  }, []);

  if (isLoading) {
    return (
       <div className="min-h-screen pt-40 pb-20 bg-[#fbfaf8] flex items-center justify-center">
          <Loader2 className="animate-spin text-church-primary" size={32} />
       </div>
    );
  }

  return (
    <div className="bg-[#fbfaf8] min-h-screen pt-40 pb-20 px-6">
      
      {/* Header */}
      <div className="container mx-auto mb-24 max-w-6xl flex flex-col md:flex-row justify-between items-end">
        <div>
           <span className="text-church-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Fellowship & Gathering</span>
           <h1 className="font-serif text-6xl md:text-7xl text-church-primary leading-none">Church<br/>Calendar</h1>
        </div>
        <p className="text-gray-400 max-w-xs mt-6 md:mt-0 leading-relaxed text-sm">
           Stay up to date with what's happening in the life of our community. We hope to see you soon.
        </p>
      </div>

      {/* Events List - Typography Focused */}
      <div className="container mx-auto max-w-6xl space-y-16">
        {events.map((event, index) => (
          <Link key={index} to={`/events/${event.id}`} className="group block">
             <div className="relative bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
                   
                   {/* Date Block (Hero Typography) */}
                   <div className="flex-shrink-0 w-full md:w-48 text-left md:text-center md:border-r border-gray-100 md:pr-12">
                      <span className="block font-serif text-8xl md:text-9xl text-church-primary leading-none group-hover:text-church-gold transition-colors duration-300">
                         {event.day}
                      </span>
                      <span className="block text-church-cyan font-bold uppercase tracking-[0.3em] text-sm mt-2 md:mt-4">
                         {event.month}
                      </span>
                   </div>

                   {/* Content */}
                   <div className="flex-grow pt-2">
                      <div className="flex items-center gap-3 mb-4">
                         <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                            event.category === 'Worship' ? 'border-church-gold text-church-gold bg-church-gold/5' :
                            event.category === 'Outreach' ? 'border-church-cyan text-church-cyan bg-church-cyan/5' :
                            'border-gray-300 text-gray-400'
                         }`}>
                            {event.category || 'Event'}
                         </span>
                      </div>
                      
                      <h3 className="font-serif text-4xl text-church-primary mb-6 group-hover:translate-x-2 transition-transform duration-300">
                         {event.title}
                      </h3>
                      
                      <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-2xl line-clamp-2">
                         {event.description}
                      </p>

                      <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
                         <div className="flex items-center gap-2">
                            <Clock size={16} className="text-church-gold" /> {event.time}
                         </div>
                         <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-church-gold" /> {event.location}
                         </div>
                      </div>
                   </div>

                   {/* Arrow Interaction */}
                   <div className="hidden md:flex self-center">
                      <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-church-primary group-hover:bg-church-primary group-hover:text-white group-hover:border-church-primary transition-all duration-300">
                         <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                   </div>

                </div>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
