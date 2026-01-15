import React, { useState } from 'react';
import { ArrowRight, User, Lock, Loader2 } from 'lucide-react';
import { Link, useNavigate } from '@tanstack/react-router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('user_token', 'mock_token_123');
      // Dispatch event so Layout updates immediately
      window.dispatchEvent(new Event('auth-change'));
      setIsLoading(false);
      navigate({ to: '/dashboard' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fbfaf8] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-church-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-church-cyan/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="bg-white w-full max-w-md p-10 md:p-14 rounded-[3rem] shadow-2xl relative z-10 border border-gray-100">
         <div className="text-center mb-10">
            <Link to="/" className="inline-block mb-6">
               <div className="w-12 h-12 bg-church-primary text-white flex items-center justify-center rounded-xl mx-auto shadow-lg hover:scale-110 transition-transform">
                  <User size={24} />
               </div>
            </Link>
            <h1 className="font-serif text-3xl text-church-primary mb-2">Member Portal</h1>
            <p className="text-gray-400 text-sm">Welcome back to the community.</p>
         </div>

         <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
               <User className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-300" size={18} />
               <input 
                  type="email" 
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full bg-gray-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm focus:ring-2 focus:ring-church-gold/20 outline-none transition-all"
               />
            </div>
            
            <div className="relative">
               <Lock className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-300" size={18} />
               <input 
                  type="password"
                  required 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full bg-gray-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm focus:ring-2 focus:ring-church-gold/20 outline-none transition-all"
               />
            </div>

            <div className="flex justify-end">
               <a href="#" className="text-xs text-gray-400 hover:text-church-primary">Forgot Password?</a>
            </div>

            <button 
               type="submit"
               disabled={isLoading}
               className="w-full py-4 bg-church-primary text-white font-bold tracking-widest uppercase rounded-full text-xs hover:bg-church-gold hover:text-church-primary transition-colors shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70"
            >
               {isLoading ? (
                  <Loader2 size={16} className="animate-spin" />
               ) : (
                  <>
                     Sign In <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
               )}
            </button>
         </form>

         <div className="mt-10 text-center">
            <p className="text-xs text-gray-400">
               Not a member yet? <Link to="/visit" className="text-church-gold font-bold hover:text-church-primary transition-colors">Plan a Visit</Link>
            </p>
         </div>
      </div>
    </div>
  );
};

export default Login;