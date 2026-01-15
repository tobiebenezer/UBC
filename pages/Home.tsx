
import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Play, Clock, MapPin, Calendar, Heart, Music, Users, Star } from 'lucide-react';
import { sermonsData } from '../data';
import SocialFeed from '../components/SocialFeed';

const Home: React.FC = () => {
  // Get the latest sermon for the featured section
  const latestSermon = sermonsData[0];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* Hero Section - Cinematic with Slow Zoom */}
      <section className="relative h-screen w-full bg-church-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
             src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
             alt="Sanctuary" 
             className="w-full h-full object-cover opacity-60 animate-slow-zoom origin-center"
          />
          {/* Enhanced Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-church-primary via-church-primary/40 to-black/30 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20">
           <div className="animate-fade-in-up">
             {/* Decorative Top Element */}
             <div className="w-px h-16 bg-gradient-to-b from-transparent to-church-gold mx-auto mb-6"></div>
             
             <span className="inline-block px-6 py-2 mb-8 border border-white/20 rounded-full text-white text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md bg-white/5 shadow-2xl">
               Sanctuary of Extra Ordinary Miracles
             </span>
             <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9] drop-shadow-lg">
               United Baptist <br/>
               <span className="text-church-gold italic font-light">Church, Jos</span>
             </h1>
             <p className="text-white/90 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed tracking-wide">
               A home for the broken, a place for the believer. <br/> Welcoming you into a community of grace.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <Link 
                 to="/visit" 
                 className="px-10 py-4 bg-church-gold text-church-primary rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-church-primary transition-all duration-300 shadow-[0_0_25px_rgba(197,160,89,0.4)]"
               >
                 Plan Your Visit
               </Link>
               <Link 
                 to={`/sermons/${latestSermon.id}`}
                 className="px-10 py-4 border border-white/30 text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-church-cyan hover:border-church-cyan hover:text-white transition-all duration-300 backdrop-blur-sm"
               >
                 Watch Online
               </Link>
             </div>
           </div>
           
           {/* Scroll Indicator */}
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
              <span className="text-[9px] uppercase tracking-widest text-white">Scroll</span>
              <div className="w-[1px] h-12 bg-white/50"></div>
           </div>
        </div>
      </section>

      {/* Intro Text - Elegant & Spaced */}
      <section className="py-32 px-6 bg-church-cream relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-church-gold rounded-full flex items-center justify-center text-church-primary shadow-xl z-10">
           <Star fill="currentColor" size={24} />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center">
           <p className="text-church-cyan font-bold text-xs tracking-[0.25em] uppercase mb-8">Our Mission</p>
           <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-church-primary leading-tight mb-12">
             We exist to know <span className="italic text-church-gold">Christ</span> and to make Him known through authentic community and sacrificial love.
           </h2>
           <div className="w-24 h-1 bg-church-primary/10 mx-auto mb-10"></div>
           <Link to="/about" className="group inline-flex items-center text-church-primary text-sm font-bold tracking-widest uppercase hover:text-church-gold transition-colors">
             Read Our Story <div className="w-8 h-px bg-church-primary ml-4 group-hover:w-12 group-hover:bg-church-gold transition-all"></div>
           </Link>
        </div>
      </section>

      {/* Service Info - Editorial Layout (Overlapping Cards) */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-church-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
             
             {/* Left: Image Card */}
             <div className="lg:col-span-7 relative z-10">
                <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1974&auto=format&fit=crop" 
                    alt="Worship"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-church-primary/40 to-transparent"></div>
                  
                  {/* Floating badge on image */}
                  <div className="absolute bottom-10 left-10 bg-white/20 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white max-w-xs">
                     <p className="font-serif italic text-xl mb-2">"Come as you are, leave changed."</p>
                  </div>
                </div>
             </div>

             {/* Right: Info Card (Overlapping) */}
             <div className="lg:col-span-5 relative z-20 lg:-ml-24 mt-8 lg:mt-0">
                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-100">
                    <span className="text-church-gold font-bold uppercase tracking-widest text-xs mb-4 block">Weekly Gathering</span>
                    <h3 className="font-serif text-4xl md:text-5xl mb-8 text-church-primary">Join us this <span className="italic text-church-cyan">Sunday.</span></h3>
                    
                    <div className="space-y-8 divide-y divide-gray-100">
                      <div className="pt-2">
                        <div className="flex items-center gap-3 mb-2">
                           <Clock className="text-church-cyan" size={18} />
                           <h4 className="font-bold text-lg text-church-primary">Service Times</h4>
                        </div>
                        <p className="text-gray-500 pl-8">9:00 AM — First Service</p>
                        <p className="text-gray-500 pl-8">11:00 AM — Second Service</p>
                      </div>

                      <div className="pt-6">
                        <div className="flex items-center gap-3 mb-2">
                           <MapPin className="text-church-cyan" size={18} />
                           <h4 className="font-bold text-lg text-church-primary">Location</h4>
                        </div>
                        <p className="text-gray-500 pl-8">123 Faith Avenue, Jos</p>
                        <a href="#" className="text-church-cyan text-[10px] font-bold uppercase tracking-widest pl-8 mt-1 inline-block border-b border-church-cyan pb-0.5">Get Directions</a>
                      </div>

                      <div className="pt-6">
                         <div className="flex items-center gap-3 mb-2">
                           <Users className="text-church-cyan" size={18} />
                           <h4 className="font-bold text-lg text-church-primary">Kids & Youth</h4>
                        </div>
                        <p className="text-gray-500 pl-8 text-sm">
                          Check-in begins 15 minutes prior to each service in the Family Wing.
                        </p>
                      </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Sermon - Dark Mode Section */}
      <section className="py-24 px-6 bg-church-primary text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
             <div>
                <span className="text-church-cyan font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Latest Message</span>
                <h2 className="font-serif text-4xl md:text-5xl">Digital Ministry</h2>
             </div>
             <Link to="/sermons" className="hidden md:flex items-center text-church-gold font-bold uppercase tracking-widest text-xs hover:text-white transition-colors mt-6 md:mt-0">
               View Sermon Library <ArrowRight size={14} className="ml-2" />
             </Link>
          </div>

          <Link to={`/sermons/${latestSermon.id}`} className="block relative rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer bg-black">
             <div className="absolute inset-0 opacity-60">
                <img 
                   src={latestSermon.image} 
                   alt={latestSermon.title}
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-church-primary via-church-primary/80 to-transparent"></div>
             
             <div className="relative z-10 p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                   <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-px bg-church-gold"></span>
                      <span className="text-church-gold text-xs font-bold uppercase tracking-widest">{latestSermon.series} Series</span>
                   </div>
                   <h3 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
                     {latestSermon.title}
                   </h3>
                   <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-md line-clamp-3">
                     {latestSermon.description}
                   </p>
                   <div className="flex gap-4">
                     <span className="px-8 py-3 bg-white text-church-primary rounded-full text-xs font-bold tracking-widest uppercase hover:bg-church-gold hover:text-church-primary transition-colors flex items-center gap-2">
                       <Play size={14} fill="currentColor" /> Watch Now
                     </span>
                   </div>
                </div>
                
                {/* Play Button Visual */}
                <div className="flex justify-center lg:justify-end">
                   <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                      <Play size={32} className="text-white ml-1" fill="currentColor" />
                   </div>
                </div>
             </div>
          </Link>
        </div>
      </section>

      {/* Ministries Tiles - Masonry Feel */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <span className="text-church-gold font-bold uppercase tracking-widest text-xs mb-4 block">Connect</span>
             <h2 className="font-serif text-5xl text-church-primary mb-6">Life <span className="italic text-church-cyan">Together</span></h2>
             <p className="text-gray-500 text-lg">There is a place for you here. Discover a community where you can belong, grow, and serve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[400px]">
            {/* Large Item */}
            <Link to="/ministries/youth-collective" className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group cursor-pointer block shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 alt="Youth"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-church-primary/90 via-transparent to-transparent"></div>
               <div className="absolute bottom-10 left-10 text-white">
                 <h3 className="font-serif text-4xl mb-2 group-hover:translate-x-2 transition-transform">Youth Collective</h3>
                 <p className="text-white/80 max-w-md">Empowering the next generation to own their faith.</p>
               </div>
            </Link>

            {/* Small Item */}
            <Link to="/ministries/worship-arts" className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer bg-church-primary block shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                 alt="Worship"
               />
               <div className="absolute bottom-10 left-10 text-white">
                 <h3 className="font-serif text-3xl mb-2 group-hover:translate-x-2 transition-transform">Worship & Arts</h3>
                 <p className="text-white/80 text-sm">Creativity in service of the Creator.</p>
               </div>
            </Link>
            
            {/* Medium Item */}
             <Link to="/ministries/grace-kids" className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer bg-church-gold block shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1502086223501-413b164c05d5?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply opacity-40"
                 alt="Kids"
               />
               <div className="absolute bottom-10 left-10 text-church-primary">
                 <h3 className="font-serif text-3xl mb-2 group-hover:translate-x-2 transition-transform">Grace Kids</h3>
                 <p className="text-church-primary/80 font-medium text-sm">Foundations of faith for ages 0-10.</p>
               </div>
            </Link>

             <div className="md:col-span-2 bg-church-cream border border-church-primary/5 rounded-[2.5rem] p-12 flex flex-col justify-center items-start text-left relative overflow-hidden group shadow-lg">
               <div className="absolute right-0 top-0 w-64 h-64 bg-church-cyan/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
               <h3 className="font-serif text-4xl text-church-primary mb-4 z-10">Community Groups</h3>
               <p className="text-gray-600 mb-10 max-w-lg z-10 leading-relaxed">
                 Life is better together. Join one of our 40+ small groups meeting across the city throughout the week.
               </p>
               <Link to="/groups" className="px-8 py-3 bg-church-primary text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-church-cyan hover:text-white transition-all z-10 shadow-lg">
                 Find a Group
               </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/ministries" className="inline-block border-b border-church-cyan pb-1 text-church-cyan font-bold uppercase tracking-widest text-xs hover:text-church-primary transition-colors">
              View All Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* Social Feed Component */}
      <SocialFeed />

      {/* Quote Section - Clean & Typographic */}
      <section className="py-32 px-6 bg-[#f0f0f0] text-center border-t border-white">
         <div className="container mx-auto max-w-4xl">
           <Heart className="w-10 h-10 text-church-red mx-auto mb-8 animate-pulse" />
           <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-church-primary">
             "For where two or three are gathered in my name, there am I among them."
           </h2>
           <p className="font-sans text-church-gold font-bold tracking-widest uppercase text-xs">Matthew 18:20</p>
         </div>
      </section>

    </div>
  );
};

export default Home;
