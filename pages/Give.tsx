import React, { useState } from 'react';
import { Heart, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

const Give: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const handlePreset = (val: string) => {
    setSelectedPreset(val);
    setAmount(val);
  };

  return (
    <div className="min-h-screen pt-24 pb-0 bg-church-primary flex flex-col lg:flex-row">
      
      {/* Left Side: Inspiration (Dark Mode) */}
      <div className="lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center relative overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-church-gold/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
         
         <div className="relative z-10 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/10 mb-8">
               <Heart size={14} className="text-church-gold" fill="currentColor" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Generosity</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
               Fueling the <br/> <span className="italic text-church-gold">Mission.</span>
            </h1>
            
            <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-md font-light">
               Everything we do is made possible by your generosity. When you give, you partner with us to bring hope, healing, and restoration to our city and beyond.
            </p>

            <div className="space-y-6 border-t border-white/10 pt-8">
               <div className="flex gap-4">
                  <div className="mt-1">
                     <CheckCircle2 className="text-church-gold" size={20} />
                  </div>
                  <div>
                     <h4 className="font-serif text-xl mb-1">Local Outreach</h4>
                     <p className="text-white/50 text-sm">Supporting food pantries and shelter programs in Jos.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1">
                     <CheckCircle2 className="text-church-gold" size={20} />
                  </div>
                  <div>
                     <h4 className="font-serif text-xl mb-1">Global Missions</h4>
                     <p className="text-white/50 text-sm">Planting churches and digging wells across the continent.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="mt-1">
                     <CheckCircle2 className="text-church-gold" size={20} />
                  </div>
                  <div>
                     <h4 className="font-serif text-xl mb-1">Next Generation</h4>
                     <p className="text-white/50 text-sm">Investing in our kids, youth, and academy students.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Right Side: Form (Light Mode) */}
      <div className="lg:w-1/2 bg-[#fbfaf8] p-10 lg:p-24 flex flex-col justify-center rounded-t-[3rem] lg:rounded-l-[3rem] lg:rounded-tr-none shadow-2xl relative z-20">
         <div className="max-w-md mx-auto w-full">
            <h3 className="font-serif text-3xl text-church-primary mb-8 text-center">Make a Donation</h3>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
               {/* Preset Amounts */}
               <div className="grid grid-cols-4 gap-3 mb-6">
                  {['50', '100', '250', '500'].map((val) => (
                     <button 
                        key={val}
                        onClick={() => handlePreset(val)}
                        className={`py-3 rounded-xl font-bold text-sm transition-all ${
                           selectedPreset === val 
                           ? 'bg-church-primary text-white shadow-lg' 
                           : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                        }`}
                     >
                        ${val}
                     </button>
                  ))}
               </div>

               {/* Custom Amount Input */}
               <div className="relative mb-8">
                  <span className="absolute top-1/2 -translate-y-1/2 left-6 text-2xl font-serif text-gray-400">$</span>
                  <input 
                     type="number" 
                     value={amount}
                     onChange={(e) => { setAmount(e.target.value); setSelectedPreset(null); }}
                     placeholder="0.00"
                     className="w-full bg-gray-50 border-none rounded-2xl py-6 pl-12 pr-6 text-3xl font-serif text-church-primary placeholder-gray-300 focus:ring-2 focus:ring-church-gold/20 outline-none transition-all"
                  />
               </div>

               {/* Frequency Toggle */}
               <div className="flex bg-gray-50 p-1.5 rounded-full mb-8 relative">
                  <div className="w-1/2 text-center">
                     <button className="w-full py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest text-church-primary shadow-sm">One-Time</button>
                  </div>
                  <div className="w-1/2 text-center">
                     <button className="w-full py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-600">Monthly</button>
                  </div>
               </div>

               <button className="w-full py-5 bg-church-gold text-church-primary font-bold tracking-widest uppercase rounded-full shadow-lg hover:bg-church-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  Continue <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>

               <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                  <Lock size={12} /> Secure 256-bit Encryption
               </div>
            </div>

            <p className="text-center text-gray-400 text-xs mt-8 leading-relaxed">
               United Baptist Church is a registered 501(c)(3) nonprofit organization. <br/> All donations are tax-deductible.
            </p>
         </div>
      </div>

    </div>
  );
};

export default Give;