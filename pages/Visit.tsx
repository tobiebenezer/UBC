import React from 'react';
import { Clock, MapPin, Baby, Heart, HelpCircle, ArrowRight } from 'lucide-react';

const Visit: React.FC = () => {
  return (
    <div className="bg-[#F4F2EE] min-h-screen pt-40 pb-20 w-full overflow-x-hidden">
      <div className="container mx-auto px-6 mb-24 text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-church-gold/20 mb-8 animate-fade-in-up">
           <Heart size={12} className="text-church-red" fill="currentColor" />
           <span className="text-church-primary font-bold text-[10px] tracking-[0.2em] uppercase">You are welcome here</span>
        </div>
        <h1 className="font-serif text-6xl md:text-8xl text-church-primary mb-8 leading-tight">Plan Your <span className="italic text-church-gold">Visit</span></h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">We know stepping into a new church can be intimidating. We’ve designed everything to make your first Sunday with us seamless.</p>
      </div>

      <section className="container mx-auto px-6 mb-32 max-w-5xl relative">
        <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-1 bg-church-gold/20 rounded-full"></div>
        <div className="space-y-24">
           {[
             { step: "1", title: "Arrive & Park", time: "8:45 AM", desc: "Turn your hazard lights on. Our parking team will direct you to a VIP spot reserved for first-time guests." },
             { step: "2", title: "Coffee & Kids", time: "9:00 AM", desc: "Grab a free latte. If you have children, our check-in team will help you register them for Grace Kids." },
             { step: "3", title: "Worship", time: "9:15 AM", desc: "Our service lasts about 75 minutes. We sing, we pray, and we open the Bible. Just come as you are." }
           ].map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                 <div className={`md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="font-serif text-3xl text-church-primary mb-4">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                 </div>
                 <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border-4 border-church-gold rounded-full flex items-center justify-center text-church-primary shadow-lg z-10 font-serif text-2xl font-bold">{item.step}</div>
                 <div className={`md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}><div className="text-church-gold font-bold text-sm uppercase tracking-widest">{item.time}</div></div>
              </div>
           ))}
        </div>
      </section>

      <section className="container mx-auto px-6 mb-24 max-w-7xl">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-500">
               <div className="w-14 h-14 bg-church-cream rounded-2xl flex items-center justify-center text-church-gold mb-8"><Baby size={28} /></div>
               <h3 className="font-serif text-3xl text-church-primary mb-4">For Families</h3>
               <p className="text-gray-500 leading-relaxed mb-8">We take the safety of your children seriously. All volunteers are background checked. We use a secure tag system for check-in.</p>
               <button className="mt-auto flex items-center gap-2 text-church-cyan font-bold uppercase tracking-widest text-xs border-b border-church-cyan pb-1">Pre-register Kids <ArrowRight size={14} /></button>
            </div>
            <div className="bg-church-primary p-12 rounded-[3rem] shadow-xl text-white flex flex-col items-start hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-church-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-church-gold mb-8"><MapPin size={28} /></div>
               <h3 className="font-serif text-3xl mb-4 relative z-10">Location</h3>
               <p className="text-white/70 leading-relaxed mb-8 relative z-10">39/37 Tafawa Balewa Street, Jos, Nigeria.<br/>Our campus is wheelchair accessible and we have a dedicated team to assist you.</p>
               <a href="#" className="mt-auto flex items-center gap-2 text-church-gold font-bold uppercase tracking-widest text-xs border-b border-church-gold pb-1 relative z-10">Get Directions <ArrowRight size={14} /></a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Visit;