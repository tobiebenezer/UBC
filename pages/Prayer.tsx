import React, { useState } from 'react';
import { Send, Lock, Globe } from 'lucide-react';

const Prayer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isPrivate, setIsPrivate] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8] px-6">
        <div className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-lg border border-church-gold/20">
          <div className="w-20 h-20 bg-church-primary text-church-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-fade-in-up">
            <Send size={32} />
          </div>
          <h2 className="font-serif text-4xl text-church-primary mb-4">Message Received</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-church-cyan font-bold uppercase tracking-widest text-xs border-b border-church-cyan pb-1"
          >
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-[#fbfaf8] min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
           <span className="text-church-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Pastoral Care</span>
           <h1 className="font-serif text-5xl text-church-primary mb-6">How can we pray?</h1>
           <p className="text-gray-500 text-lg font-light">
             Our team prays for every request we receive. Whether you choose to share your name or remain anonymous, know that you are not alone.
           </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-50">
           
           <div className="flex gap-4 mb-8 bg-gray-50 p-2 rounded-full w-fit mx-auto">
              <button
                type="button"
                onClick={() => setIsPrivate(true)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  isPrivate ? 'bg-white text-church-primary shadow-md' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Lock size={14} /> Private
              </button>
              <button
                type="button"
                onClick={() => setIsPrivate(false)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  !isPrivate ? 'bg-white text-church-primary shadow-md' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Globe size={14} /> Prayer Wall
              </button>
           </div>

           <div className="space-y-6">
             <div>
               <label className="block text-church-primary font-bold text-xs uppercase tracking-widest mb-2 ml-4">Your Name (Optional)</label>
               <input 
                 type="text" 
                 className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-church-gold/30 rounded-2xl px-6 py-4 outline-none transition-all text-church-primary"
                 placeholder="Jane Doe"
               />
             </div>

             <div>
               <label className="block text-church-primary font-bold text-xs uppercase tracking-widest mb-2 ml-4">Prayer Request</label>
               <textarea 
                 rows={6}
                 required
                 className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-church-gold/30 rounded-2xl px-6 py-4 outline-none transition-all text-church-primary resize-none"
                 placeholder="Share your heart here..."
               />
             </div>

             <button type="submit" className="w-full py-5 bg-church-primary text-white font-bold tracking-widest uppercase rounded-full shadow-lg hover:bg-church-gold hover:text-church-primary transition-all duration-300 mt-4">
               Submit Request
             </button>
             
             <p className="text-center text-xs text-gray-400 mt-4">
               {isPrivate 
                 ? "This request will only be seen by our pastoral staff." 
                 : "This request will be shared with our prayer team."}
             </p>
           </div>
        </form>
      </div>
    </div>
  );
};

export default Prayer;