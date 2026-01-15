import React, { useState } from 'react';
import { Music, Coffee, Heart, Camera, ArrowRight, Check, Users, Monitor, Sparkles } from 'lucide-react';

const teams = [
  {
    id: 'worship',
    icon: Music,
    name: "Worship & Tech",
    desc: "Musicians, vocalists, and sound engineers who set the atmosphere for encounter."
  },
  {
    id: 'hospitality',
    icon: Coffee,
    name: "Guest Experience",
    desc: "From the parking lot to the seat, creating a welcoming home for every guest."
  },
  {
    id: 'kids',
    icon: Sparkles,
    name: "Grace Kids",
    desc: "Shaping the faith of the next generation through teaching, care, and fun."
  },
  {
    id: 'media',
    icon: Camera,
    name: "Creative Media",
    desc: "Photographers, designers, and social storytellers capturing the life of the church."
  }
];

const Volunteer: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 bg-[#fbfaf8] min-h-screen">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-24 text-center max-w-4xl">
        <span className="text-church-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">The Dream Team</span>
        <h1 className="font-serif text-5xl md:text-7xl text-church-primary mb-8 leading-tight">
          Serve the <span className="italic text-church-cyan">City</span>
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
           We believe that serving is not just about what you do, it's about who you become. Find your place, use your gifts, and make a difference.
        </p>
      </div>

      {/* Team Selection Cards */}
      <section className="container mx-auto px-6 mb-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {teams.map((team) => (
             <button 
               key={team.id}
               onClick={() => setSelectedTeam(team.id)}
               className={`text-left p-10 rounded-[3rem] transition-all duration-500 relative overflow-hidden group h-full flex flex-col ${
                 selectedTeam === team.id 
                 ? 'bg-church-primary text-white shadow-2xl scale-105 z-10' 
                 : 'bg-white text-church-primary border border-gray-100 hover:border-church-gold/30 hover:shadow-xl'
               }`}
             >
                {/* Background Decor for Selected */}
                {selectedTeam === team.id && (
                   <div className="absolute top-0 right-0 w-32 h-32 bg-church-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                )}

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-2xl transition-colors ${
                  selectedTeam === team.id ? 'bg-white/10 text-church-gold' : 'bg-church-cream text-church-primary'
                }`}>
                  <team.icon size={28} />
                </div>
                
                <h3 className="font-serif text-2xl mb-4 leading-none">{team.name}</h3>
                <p className={`text-sm leading-relaxed mb-8 flex-grow ${selectedTeam === team.id ? 'text-white/70' : 'text-gray-500'}`}>
                  {team.desc}
                </p>
                
                <div className={`mt-auto flex items-center text-xs font-bold uppercase tracking-widest ${
                   selectedTeam === team.id ? 'text-church-gold' : 'text-gray-300 group-hover:text-church-primary'
                }`}>
                   {selectedTeam === team.id ? 'Selected' : 'Select Role'} <ArrowRight size={14} className="ml-2" />
                </div>
             </button>
           ))}
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="container mx-auto px-6 max-w-3xl">
         <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-10 animate-fade-in-up">
                 <div className="text-center">
                    <h3 className="font-serif text-3xl text-church-primary mb-2">Join the Team</h3>
                    <p className="text-gray-400">
                      {selectedTeam 
                        ? `Applying for: ${teams.find(t => t.id === selectedTeam)?.name}` 
                        : "Select a team above to get started."}
                    </p>
                 </div>

                 <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">First Name</label>
                         <input required type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-church-gold/20 outline-none transition-all" />
                       </div>
                       <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Last Name</label>
                         <input required type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-church-gold/20 outline-none transition-all" />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                       <input required type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-church-gold/20 outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                       <input required type="tel" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-church-gold/20 outline-none transition-all" />
                    </div>
                 </div>

                 <button 
                   type="submit" 
                   disabled={!selectedTeam}
                   className="w-full py-5 bg-church-primary text-white font-bold tracking-widest uppercase rounded-full shadow-lg hover:bg-church-gold hover:text-church-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                 >
                   Submit Application
                 </button>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in-up">
                 <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                   <Check size={40} />
                 </div>
                 <h3 className="font-serif text-4xl text-church-primary mb-4">We're Excited!</h3>
                 <p className="text-gray-500 leading-relaxed mb-10 max-w-md mx-auto">
                   Thank you for stepping up. A team leader will reach out to you within 24 hours to schedule a coffee chat and get you plugged in.
                 </p>
                 <button onClick={() => setSubmitted(false)} className="px-8 py-3 rounded-full border border-gray-200 text-church-primary font-bold uppercase tracking-widest text-xs hover:border-church-gold hover:text-church-gold transition-colors">
                   Submit Another
                 </button>
              </div>
            )}
         </div>
      </section>

    </div>
  );
};

export default Volunteer;