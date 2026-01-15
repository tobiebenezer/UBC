import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { ministriesData } from '../data';

const Ministries: React.FC = () => {
  return (
    <div className="bg-[#fbfaf8] min-h-screen w-full overflow-x-hidden">
      
      {/* Header */}
      <div className="pt-40 pb-20 px-6 container mx-auto text-center">
         <span className="text-church-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Connect & Grow</span>
         <h1 className="font-serif text-6xl md:text-8xl text-church-primary">Our Ministries</h1>
      </div>

      <div className="flex flex-col gap-0">
        {ministriesData.map((ministry, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="py-24 px-6 container mx-auto">
               <Link to={`/ministries/${ministry.id}`} className="group block">
                 <div className={`flex flex-col lg:flex-row gap-12 md:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                       <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                          <img 
                             src={ministry.image} 
                             alt={ministry.title} 
                             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-church-primary/10 group-hover:bg-transparent transition-colors"></div>
                       </div>
                       {/* Floating Number */}
                       <div className={`absolute -top-12 ${isEven ? '-left-12' : '-right-12'} text-[10rem] font-serif text-church-primary/5 font-bold leading-none select-none z-0`}>
                          0{index + 1}
                       </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 relative z-10">
                       <span className="text-church-cyan font-bold uppercase tracking-widest text-xs mb-4 block">
                         {ministry.tagline}
                       </span>
                       <h2 className="font-serif text-5xl md:text-6xl text-church-primary mb-6 group-hover:text-church-gold transition-colors duration-300">
                         {ministry.title}
                       </h2>
                       <p className="text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-md">
                         {ministry.description}
                       </p>
                       <div className="flex items-center gap-3 text-church-primary font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                          Explore Ministry <ArrowRight size={14} />
                       </div>
                    </div>

                 </div>
               </Link>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="py-32 px-6 text-center bg-white border-t border-gray-100">
         <h3 className="font-serif text-4xl text-church-primary mb-6">Not sure where to start?</h3>
         <Link to="/visit" className="inline-block px-10 py-4 bg-church-primary text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-church-gold hover:text-church-primary transition-colors">
            Plan a Visit
         </Link>
      </section>

    </div>
  );
};

export default Ministries;