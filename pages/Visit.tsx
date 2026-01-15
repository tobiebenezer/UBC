import React from 'react';
import { Clock, MapPin, Coffee, Music, Baby, HelpCircle, ArrowRight, Heart } from 'lucide-react';

const Visit: React.FC = () => {
  return (
    <div className="bg-[#F4F2EE] min-h-screen pt-40 pb-20 w-full overflow-x-hidden">
      
      {/* Hero */}
      <div className="container mx-auto px-6 mb-24 text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-church-gold/20 mb-8 animate-fade-in-up">
           <Heart size={12} className="text-church-red" fill="currentColor" />
           <span className="text-church-primary font-bold text-[10px] tracking-[0.2em] uppercase">You are welcome here</span>
        </div>
        <h1 className="font-serif text-6xl md:text-8xl text-church-primary mb-8 leading-tight animate-fade-in-up">
          Plan Your <span className="italic text-church-gold">Visit</span>
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed animate-fade-in-up max-w-2xl mx-auto">
           We know stepping into a new church can be intimidating. We’ve designed everything to make your first Sunday with us seamless and full of grace.
        </p>
      </div>

      {/* Visual Timeline - Organic */}
      <section className="container mx-auto px-6 mb-32 max-w-5xl relative">
        {/* Connecting Line (Gold Path) - Corrected for Mobile */}
        <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-1 bg-church-gold/20 rounded-full"></div>
        
        <div className="space-y-24">
           {/* Step 1 */}
           <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-16 md:pl-0">
                 <h3 className="font-serif text-3xl text-church-primary mb-4">Arrive & Park</h3>
                 <p className="text-gray-500 leading-relaxed">
                    Turn your hazard lights on as you enter the lot. Our parking team will direct you to a VIP spot reserved just for first-time guests, right near the entrance.
                 </p>
              </div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border-4 border-church-gold rounded-full flex items-center justify-center text-church-primary shadow-lg z-10 order-1 md:order-2">
                 <span className="font-serif text-2xl font-bold">1</span>
              </div>
              <div className="md:w-1/2 pl-16 md:pl-0 order-3">
                 <div className="text-church-gold font-bold text-sm uppercase tracking-widest">8:45 AM</div>
              </div>
           </div>

           {/* Step 2 */}
           <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="md:w-1/2 order-3 md:order-1 pl-16 md:pl-0 md:text-right">
                 <div className="text-church-gold font-bold text-sm uppercase tracking-widest">9:00 AM</div>
              </div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border-4 border-church-gold rounded-full flex items-center justify-center text-church-primary shadow-lg z-10 order-1 md:order-2">
                 <span className="font-serif text-2xl font-bold">2</span>
              </div>
              <div className="md:w-1/2 order-2 md:order-3 pl-16 md:pl-0">
                 <h3 className="font-serif text-3xl text-church-primary mb-4">Coffee & Kids</h3>
                 <p className="text-gray-500 leading-relaxed">
                    Grab a free latte in the atrium. If you have children, our check-in team will help you register them for Grace Kids—a secure, fun environment for ages 0-10.
                 </p>
              </div>
           </div>

           {/* Step 3 */}
           <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-16 md:pl-0">
                 <h3 className="font-serif text-3xl text-church-primary mb-4">Worship</h3>
                 <p className="text-gray-500 leading-relaxed">
                    Our service lasts about 75 minutes. We sing, we pray, and we open the Bible. No pressure to give, no pressure to perform. Just come as you are.
                 </p>
              </div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border-4 border-church-gold rounded-full flex items-center justify-center text-church-primary shadow-lg z-10 order-1 md:order-2">
                 <span className="font-serif text-2xl font-bold">3</span>
              </div>
              <div className="md:w-1/2 pl-16 md:pl-0 order-3">
                 <div className="text-church-gold font-bold text-sm uppercase tracking-widest">9:15 AM</div>
              </div>
           </div>
        </div>
      </section>

      {/* Info Cards - Soft & Welcoming */}
      <section className="container mx-auto px-6 mb-24 max-w-7xl">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-500">
               <div className="w-14 h-14 bg-church-cream rounded-2xl flex items-center justify-center text-church-gold mb-8">
                  <Baby size={28} />
               </div>
               <h3 className="font-serif text-3xl text-church-primary mb-4">For Families</h3>
               <p className="text-gray-500 leading-relaxed mb-8">
                  We take the safety of your children seriously. All volunteers are background checked. We use a secure tag system for check-in and check-out.
               </p>
               <button className="mt-auto flex items-center gap-2 text-church-cyan font-bold uppercase tracking-widest text-xs border-b border-church-cyan pb-1">
                  Pre-register Kids <ArrowRight size={14} />
               </button>
            </div>

            <div className="bg-church-primary p-12 rounded-[3rem] shadow-xl text-white flex flex-col items-start hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-church-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-church-gold mb-8 backdrop-blur-sm">
                  <MapPin size={28} />
               </div>
               <h3 className="font-serif text-3xl mb-4 relative z-10">Location</h3>
               <p className="text-white/70 leading-relaxed mb-8 relative z-10">
                  39/37 Tafawa Balewa Street, Jos, Nigeria.<br/>
                  Our campus is wheelchair accessible and we have a dedicated team to assist with any special needs.
               </p>
               <a href="#" className="mt-auto flex items-center gap-2 text-church-gold font-bold uppercase tracking-widest text-xs border-b border-church-gold pb-1 relative z-10">
                  Get Directions <ArrowRight size={14} />
               </a>
            </div>
         </div>
      </section>

      {/* FAQ - Clean & Simple */}
      <section className="container mx-auto px-6 max-w-3xl">
         <h2 className="font-serif text-4xl text-church-primary mb-12 text-center">Common Questions</h2>
         <div className="space-y-6">
           {[
             { q: "What should I wear?", a: "There is no dress code. You'll see suits, jeans, traditional attire, and everything in between." },
             { q: "Do I have to give money?", a: "Absolutely not. Giving is for our members. As a guest, your presence is the only gift we ask for." },
             { q: "Is there coffee?", a: "Yes! We serve locally roasted coffee and tea in the atrium before every service." }
           ].map((faq, idx) => (
             <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <h4 className="font-serif text-xl text-church-primary mb-3 flex items-center gap-3">
                 <HelpCircle size={20} className="text-church-cyan" />
                 {faq.q}
               </h4>
               <p className="text-gray-500 pl-8 leading-relaxed font-light">{faq.a}</p>
             </div>
           ))}
         </div>
      </section>

    </div>
  );
};

export default Visit;