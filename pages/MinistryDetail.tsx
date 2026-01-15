import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { Calendar, Clock, MapPin, Mail, User, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ministriesData } from '../data';

const MinistryDetail: React.FC = () => {
  const { ministryId } = useParams({ from: '/ministries/$ministryId' });
  const ministry = ministriesData.find(m => m.id === ministryId) || ministriesData[0];

  return (
    <div className="bg-[#fbfaf8] min-h-screen w-full">
      
      {/* Immersive Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
         <img 
            src={ministry.image} 
            alt={ministry.title} 
            className="w-full h-full object-cover animate-slow-zoom"
         />
         <div className="absolute inset-0 bg-church-primary/60 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#fbfaf8] via-transparent to-transparent"></div>
         
         <div className="absolute top-0 left-0 w-full p-6 z-20">
            <div className="container mx-auto">
               <Link to="/ministries" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
                  <ArrowLeft size={14} /> Back to Ministries
               </Link>
            </div>
         </div>

         <div className="absolute bottom-0 left-0 w-full p-6 z-20 pb-24 md:pb-32">
            <div className="container mx-auto max-w-6xl">
               <span className="inline-block px-4 py-1.5 bg-church-gold text-church-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-6 rounded-sm shadow-lg">
                  {ministry.tagline}
               </span>
               <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none drop-shadow-xl">
                  {ministry.title}
               </h1>
            </div>
         </div>
      </div>

      {/* Content Overlap */}
      <div className="relative z-30 px-6 -mt-20 mb-20">
         <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
               
               {/* Main Content */}
               <div className="lg:w-2/3">
                  <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 mb-12">
                     <h2 className="font-serif text-3xl text-church-primary mb-8">Our Vision</h2>
                     <p className="text-gray-500 text-lg leading-relaxed font-light mb-12 first-letter:text-5xl first-letter:font-serif first-letter:text-church-gold first-letter:mr-3 first-letter:float-left">
                       {ministry.description} 
                       <span className="block mt-4">We are committed to creating a space where people can encounter God, build authentic community, and grow in their gifts. Whether you are new to the faith or have been walking with Jesus for years, there is a place for you here.</span>
                     </p>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-church-cream rounded-3xl border border-church-primary/5">
                           <div className="flex items-center gap-3 mb-2">
                              <Clock className="text-church-gold" size={20} />
                              <h4 className="font-bold text-church-primary uppercase tracking-wider text-xs">When</h4>
                           </div>
                           <p className="text-gray-600 font-serif text-xl">{ministry.schedule}</p>
                        </div>
                        <div className="p-6 bg-church-cream rounded-3xl border border-church-primary/5">
                           <div className="flex items-center gap-3 mb-2">
                              <MapPin className="text-church-gold" size={20} />
                              <h4 className="font-bold text-church-primary uppercase tracking-wider text-xs">Where</h4>
                           </div>
                           <p className="text-gray-600 font-serif text-xl">{ministry.location}</p>
                        </div>
                     </div>
                  </div>

                  {/* Visual Gallery Placeholder */}
                  <div className="grid grid-cols-2 gap-4 h-64 md:h-80 rounded-[2.5rem] overflow-hidden shadow-lg group cursor-pointer relative">
                      <div className="bg-gray-200 w-full h-full relative">
                         <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-gray-300 w-full h-full relative">
                         <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="text-white font-serif text-3xl italic">View Gallery</span>
                      </div>
                  </div>
               </div>

               {/* Sidebar: Leader & Actions */}
               <div className="lg:w-1/3 space-y-8">
                  
                  {/* Leader Card */}
                  <div className="bg-church-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-church-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                     
                     <div className="relative z-10 text-center">
                        <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-church-gold mb-6">
                           <img src={ministry.leader.image} alt={ministry.leader.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h3 className="font-serif text-2xl mb-1">{ministry.leader.name}</h3>
                        <p className="text-church-gold text-[10px] font-bold uppercase tracking-widest mb-6">{ministry.leader.role}</p>
                        <p className="text-white/70 text-sm leading-relaxed mb-8">
                           {ministry.leader.bio}
                        </p>
                        <button className="w-full py-3 bg-white/10 hover:bg-white hover:text-church-primary text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
                           Email Leader
                        </button>
                     </div>
                  </div>

                  {/* Join Card */}
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-center">
                     <h3 className="font-serif text-2xl text-church-primary mb-4">Get Involved</h3>
                     <p className="text-gray-500 text-sm mb-8">Ready to serve or participate? We'd love to have you.</p>
                     
                     <ul className="text-left space-y-4 mb-8">
                        {['Meet new people', 'Grow in faith', 'Make a difference'].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                              <CheckCircle2 size={16} className="text-church-gold" /> {item}
                           </li>
                        ))}
                     </ul>

                     <button className="w-full py-4 bg-church-gold text-church-primary font-bold tracking-widest uppercase rounded-full text-xs hover:bg-church-primary hover:text-white transition-all shadow-lg flex items-center justify-center gap-2">
                        Join This Team <ArrowRight size={14} />
                     </button>
                  </div>

               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MinistryDetail;