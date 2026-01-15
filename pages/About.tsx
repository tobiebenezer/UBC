import React from 'react';
import { leadersData } from '../data';
import { Target, Heart, Book, Users, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#fbfaf8] w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 text-center">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-40 mix-blend-multiply pointer-events-none"></div>
         <span className="text-church-gold font-bold text-xs tracking-[0.3em] uppercase mb-6 block animate-fade-in-up">Since 1952</span>
         <h1 className="font-serif text-6xl md:text-8xl text-church-primary mb-10 leading-none animate-fade-in-up">
           Our Story
         </h1>
         <div className="w-px h-24 bg-church-gold mx-auto mb-10"></div>
         <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto font-serif italic">
           "A long obedience in the same direction."
         </p>
      </div>

      {/* Editorial Split Section: History */}
      <section className="py-24 px-6 container mx-auto">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1974&auto=format&fit=crop" 
                    alt="Old Church Building" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
               </div>
               {/* Decorative Element */}
               <div className="absolute -bottom-10 -right-10 w-full h-full border border-church-gold/30 rounded-[3rem] -z-0 hidden md:block"></div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-10">
               <h2 className="font-serif text-5xl text-church-primary mb-8">From a Living Room to a Landmark</h2>
               <div className="space-y-6 text-lg text-gray-500 font-light leading-relaxed">
                  <p>
                    Founded in a small living room in 1952, United Baptist began not with a building, but with a burden: a burden to see the city of Jos renewed by the gospel of grace.
                  </p>
                  <p>
                    For the first decade, we were nomads, meeting in school gymnasiums and rented halls. But in 1965, we broke ground on Faith Avenue. The bricks were laid by the hands of our own members—a testament to the belief that the church is not the building, but the people.
                  </p>
                  <p>
                    While our methods have evolved—from hymnals to projectors, from suits to denim—our mission remains timeless: to know Christ and to make Him known through authentic community and sacrificial love.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Dark Mode: Core Values */}
      <section className="bg-church-primary py-32 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto relative z-10">
           <div className="mb-20">
             <span className="text-church-cyan font-bold uppercase tracking-widest text-xs mb-4 block">Our DNA</span>
             <h2 className="font-serif text-5xl md:text-6xl">What We Believe</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Scripture", icon: Book, text: "The inspired word of God, our guide for faith and practice." },
                { title: "Grace", icon: Heart, text: "Salvation is a free gift, received through faith in Jesus Christ." },
                { title: "Community", icon: Users, text: "Spiritual growth happens best in authentic relationships." },
                { title: "Restoration", icon: Target, text: "Committed to bringing peace and justice to our city." }
              ].map((val, idx) => (
                <div key={idx} className="group cursor-default">
                   <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:bg-church-gold group-hover:border-church-gold group-hover:text-church-primary transition-all duration-500">
                      <val.icon size={28} />
                   </div>
                   <h3 className="font-serif text-3xl mb-4 group-hover:text-church-gold transition-colors">{val.title}</h3>
                   <p className="text-white/60 leading-relaxed font-light">{val.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Pastoral Team - Gallery Style */}
      <section className="py-32 px-6 container mx-auto">
         <div className="text-center mb-24">
            <h2 className="font-serif text-5xl md:text-6xl text-church-primary mb-6">Pastoral Team</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Shepherds equipped to lead, teach, and care for the flock.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leadersData.map((leader, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-8 relative shadow-lg">
                  {/* B&W to Color Transition */}
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                     <p className="text-white text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                       {leader.bio}
                     </p>
                  </div>
                </div>
                <div className="text-center group-hover:-translate-y-2 transition-transform duration-500">
                   <h3 className="font-serif text-2xl text-church-primary mb-1">{leader.name}</h3>
                   <p className="text-church-gold font-bold uppercase tracking-widest text-[10px]">{leader.role}</p>
                </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default About;