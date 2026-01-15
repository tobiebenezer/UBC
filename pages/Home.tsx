
import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Play, Clock, MapPin, Star, Heart } from 'lucide-react';
import { sermonsData } from '../data';
import SocialFeed from '../components/SocialFeed';

const Home: React.FC = () => {
  const latestSermon = sermonsData[0];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Cinematic Hero */}
      <section className="relative h-screen w-full bg-church-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-60 animate-slow-zoom" 
            alt="Sanctuary"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-church-primary via-church-primary/40 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20">
           <div className="animate-fade-in-up">
             <div className="w-px h-16 bg-gradient-to-b from-transparent to-church-gold mx-auto mb-6"></div>
             
             {/* Official Tagline Badge */}
             <span className="inline-block px-6 py-2 mb-8 border border-white/20 rounded-full text-white text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md">
               Sanctuary of Extra Ordinary Miracles
             </span>
             
             <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-4 leading-[0.9]">
               United Baptist <br/>
               <span className="text-church-gold italic font-light">Church, Jos</span>
             </h1>
             
             <p className="text-white/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 italic">
               "Since Jan. 2nd, 1966"
             </p>
             
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link to="/visit" className="px-10 py-4 bg-church-gold text-church-primary rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white transition-all shadow-xl">Plan Your Visit</Link>
               <Link to={`/sermons/${latestSermon.id}`} className="px-10 py-4 border border-white/30 text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-church-primary transition-all backdrop-blur-sm flex items-center gap-2">
                 Watch Online <Play size={12} fill="currentColor" />
               </Link>
             </div>
           </div>
        </div>
      </section>

      {/* Editorial Mission Statement */}
      <section className="py-32 px-6 bg-church-cream relative text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-church-gold rounded-full flex items-center justify-center text-church-primary shadow-xl ring-8 ring-church-cream">
          <Star fill="currentColor" size={24} />
        </div>
        <div className="container mx-auto max-w-4xl">
           <p className="text-church-cyan font-bold text-xs tracking-[0.25em] uppercase mb-8">Our Mission</p>
           <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-church-primary leading-tight mb-12">We exist to know <span className="italic text-church-gold">Christ</span> and to make Him known through authentic community and miraculous faith.</h2>
           <Link to="/about" className="group inline-flex items-center text-church-primary text-sm font-bold tracking-widest uppercase hover:text-church-gold transition-colors">
             Read Our Story <div className="w-8 h-px bg-church-primary ml-4 group-hover:w-12 group-hover:bg-church-gold transition-all"></div>
           </Link>
        </div>
      </section>

      {/* Grid of Life Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
             <div className="lg:col-span-7 h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="History" />
                <div className="absolute bottom-10 left-10 bg-white/20 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white max-w-xs">
                   <p className="font-serif italic text-xl mb-2">"Come as you are, leave changed."</p>
                </div>
             </div>
             <div className="lg:col-span-5 relative lg:-ml-24 mt-8 lg:mt-0">
                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-100">
                    <span className="text-church-gold font-bold uppercase tracking-widest text-xs mb-4 block">Weekly Gathering</span>
                    <h3 className="font-serif text-4xl md:text-5xl mb-8 text-church-primary">Join us this <span className="italic text-church-cyan">Sunday.</span></h3>
                    <div className="space-y-8 divide-y divide-gray-100">
                      <div className="pt-2">
                        <div className="flex items-center gap-3 mb-2"><Clock className="text-church-cyan" size={18} /><h4 className="font-bold text-lg text-church-primary">Service Times</h4></div>
                        <p className="text-gray-500 pl-8">9:00 AM & 11:00 AM</p>
                      </div>
                      <div className="pt-6">
                        <div className="flex items-center gap-3 mb-2"><MapPin className="text-church-cyan" size={18} /><h4 className="font-bold text-lg text-church-primary">Location</h4></div>
                        <p className="text-gray-500 pl-8">39/37 Tafawa Balewa Street, Jos</p>
                      </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Message Promo */}
      <section className="py-24 px-6 bg-church-primary text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
             <div><span className="text-church-cyan font-bold text-xs uppercase tracking-widest mb-4 block">Latest Message</span><h2 className="font-serif text-4xl md:text-5xl">Digital Ministry</h2></div>
             <Link to="/sermons" className="hidden md:flex items-center text-church-gold font-bold uppercase tracking-widest text-xs">Full Library <ArrowRight size={14} className="ml-2" /></Link>
          </div>
          <Link to={`/sermons/${latestSermon.id}`} className="block relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden group">
             <img src={latestSermon.image} className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" alt="Message" />
             <div className="absolute inset-0 bg-gradient-to-r from-church-primary via-church-primary/80 to-transparent"></div>
             <div className="relative z-10 p-10 md:p-20 flex flex-col justify-center h-full">
                <span className="text-church-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">{latestSermon.series} Series</span>
                <h3 className="font-serif text-4xl md:text-6xl mb-8 leading-tight max-w-2xl">{latestSermon.title}</h3>
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-church-primary transition-all">
                   <Play size={32} fill="currentColor" className="ml-1" />
                </div>
             </div>
          </Link>
        </div>
      </section>

      <SocialFeed />

      <section className="py-32 px-6 bg-[#f0f0f0] text-center border-t border-white">
         <div className="container mx-auto max-w-4xl">
           <Heart className="w-10 h-10 text-church-red mx-auto mb-8 animate-pulse" />
           <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-church-primary">"For where two or three are gathered in my name, there am I among them."</h2>
           <p className="text-church-gold font-bold tracking-widest uppercase text-xs">Matthew 18:20</p>
         </div>
      </section>
    </div>
  );
};

export default Home;
