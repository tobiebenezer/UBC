import React, { useState } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { Calendar, Clock, MapPin, Share2, Check, ArrowLeft, X } from 'lucide-react';
import { eventsData } from '../data';

const EventDetail: React.FC = () => {
  const { eventId } = useParams({ from: '/events/$eventId' });
  const event = eventsData.find(e => e.id === eventId) || eventsData[0];
  const [rsvpSent, setRsvpSent] = useState(false);

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-church-primary">
      
      {/* Blurred Background */}
      <div className="absolute inset-0 z-0">
         <img src={event.image} alt="" className="w-full h-full object-cover opacity-30 blur-3xl scale-110" />
         <div className="absolute inset-0 bg-church-primary/40 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <Link to="/events" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
           <ArrowLeft size={16} /> Back to Calendar
        </Link>

        {/* The "Invitation" Card */}
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
           
           {/* Visual Side */}
           <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full group">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 text-white">
                 <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${
                    event.category === 'Worship' ? 'bg-church-gold text-church-primary' : 'bg-white text-church-primary'
                 }`}>
                    {event.category || 'Event'}
                 </span>
                 <h2 className="font-serif text-4xl md:text-5xl leading-none">{event.title}</h2>
              </div>
           </div>

           {/* Content Side */}
           <div className="lg:w-1/2 p-10 md:p-16 flex flex-col relative bg-[#fbfaf8]">
              {/* Decorative Perforation Line */}
              <div className="absolute left-0 top-10 bottom-10 w-px border-l-2 border-dashed border-gray-300 hidden lg:block"></div>
              <div className="absolute -left-3 top-0 bottom-0 flex-col justify-between py-10 hidden lg:flex">
                 <div className="w-6 h-6 rounded-full bg-church-primary"></div>
                 <div className="w-6 h-6 rounded-full bg-church-primary"></div>
              </div>

              <div className="mb-10 space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-church-cream rounded-xl text-church-gold">
                        <Calendar size={24} />
                     </div>
                     <div>
                        <h4 className="font-bold text-church-primary text-sm uppercase tracking-wide mb-1">Date</h4>
                        <p className="text-gray-600 font-serif text-xl">{event.date}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-church-cream rounded-xl text-church-gold">
                        <Clock size={24} />
                     </div>
                     <div>
                        <h4 className="font-bold text-church-primary text-sm uppercase tracking-wide mb-1">Time</h4>
                        <p className="text-gray-600 font-serif text-xl">{event.time}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-church-cream rounded-xl text-church-gold">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h4 className="font-bold text-church-primary text-sm uppercase tracking-wide mb-1">Location</h4>
                        <p className="text-gray-600 font-serif text-xl">{event.location}</p>
                     </div>
                  </div>
              </div>

              <div className="mb-10 flex-grow">
                 <h3 className="font-serif text-2xl text-church-primary mb-4">About the Event</h3>
                 <p className="text-gray-500 leading-relaxed font-light">
                    {event.description} We invite you to bring friends and family. This gathering is designed to be a time of connection and renewal.
                 </p>
              </div>

              {/* RSVP Action */}
              {!rsvpSent ? (
                 <div className="mt-auto">
                    <button 
                       onClick={() => setRsvpSent(true)}
                       className="w-full py-5 bg-church-primary text-white font-bold tracking-widest uppercase rounded-2xl shadow-xl hover:bg-church-gold hover:text-church-primary transition-all duration-300 group"
                    >
                       Reserve Your Spot
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">Free registration • Limited seating available</p>
                 </div>
              ) : (
                 <div className="mt-auto bg-green-50 border border-green-100 p-6 rounded-2xl text-center animate-fade-in-up">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                       <Check size={24} />
                    </div>
                    <h3 className="font-serif text-xl text-church-primary mb-1">Confirmed!</h3>
                    <p className="text-sm text-gray-500 mb-4">We've sent the details to your email.</p>
                    <button onClick={() => setRsvpSent(false)} className="text-[10px] font-bold uppercase tracking-widest text-church-primary underline">Register Another Person</button>
                 </div>
              )}

           </div>

        </div>
      </div>
    </div>
  );
};

export default EventDetail;