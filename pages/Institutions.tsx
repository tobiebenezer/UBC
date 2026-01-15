import React from 'react';
import { institutionsData } from '../data';
import { ExternalLink, Calendar, MapPin, Mail, ArrowUpRight, User } from 'lucide-react';

const Institutions: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#fbfaf8] min-h-screen">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-20 text-center max-w-4xl">
        <span className="text-church-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Our Impact</span>
        <h1 className="font-serif text-5xl md:text-7xl text-church-primary mb-10">Affiliated Institutions</h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
           Beyond our sanctuary walls, United Baptist extends its mission through education, theological training, and compassionate care. These independent organizations share our DNA and work tirelessly to serve the broader community.
        </p>
      </div>

      {/* Institutions List */}
      <div className="container mx-auto px-6 max-w-6xl">
         <div className="space-y-24">
            {institutionsData.map((inst, index) => (
               <div key={inst.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2">
                     <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group">
                        <img 
                          src={inst.image} 
                          alt={inst.name} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-church-primary/20 group-hover:bg-transparent transition-colors"></div>
                        
                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border-l-4 border-church-gold">
                           <span className="block text-church-primary font-serif text-xl">{inst.founded}</span>
                           <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Established</span>
                        </div>
                     </div>
                  </div>

                  {/* Text Section */}
                  <div className="w-full lg:w-1/2">
                     <span className="inline-block px-4 py-1 bg-church-cream rounded-full text-church-cyan font-bold text-xs uppercase tracking-widest mb-6">
                        {inst.type}
                     </span>
                     <h2 className="font-serif text-4xl md:text-5xl text-church-primary mb-4 leading-tight">
                        {inst.name}
                     </h2>
                     <p className="text-church-gold font-bold text-sm tracking-[0.2em] uppercase mb-6">
                        {inst.tagline}
                     </p>
                     <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                        {inst.description}
                     </p>
                     
                     <div className="space-y-4 mb-8 border-t border-gray-100 pt-8">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-church-cream flex items-center justify-center text-church-primary flex-shrink-0">
                              <User size={18} />
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wide">Leadership</span>
                              <span className="text-church-primary font-medium">{inst.head}</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-church-cream flex items-center justify-center text-church-primary flex-shrink-0">
                              <Mail size={18} />
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wide">Contact</span>
                              <a href={`mailto:${inst.contact}`} className="text-church-primary font-medium hover:text-church-gold transition-colors">{inst.contact}</a>
                           </div>
                        </div>
                     </div>

                     <button className="inline-flex items-center gap-2 px-8 py-3 bg-church-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-church-gold hover:text-church-primary transition-all shadow-lg">
                        Visit Website <ArrowUpRight size={14} />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* CTA */}
      <section className="container mx-auto px-6 mt-32 max-w-4xl text-center">
         <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-church-gold via-church-cyan to-church-gold"></div>
            <h2 className="font-serif text-3xl md:text-4xl text-church-primary mb-6">Partner With Us</h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
               These institutions rely on the generous support of our community to maintain their standard of excellence and service. Consider making a designated gift today.
            </p>
            <button className="px-10 py-4 bg-church-cream text-church-primary font-bold tracking-widest uppercase rounded-full text-xs hover:bg-church-primary hover:text-white transition-colors border border-church-primary/10">
               Support an Institution
            </button>
         </div>
      </section>

    </div>
  );
};

export default Institutions;