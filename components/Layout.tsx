
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { Menu, X, LogOut, LayoutDashboard, Heart, Search, ChevronDown, Clock, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { NavItem } from '../types';
import GeminiAssistant from './GeminiAssistant';
import SearchOverlay from './SearchOverlay';
import { supabase } from '../lib/supabaseClient';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { 
    label: 'Connect', 
    children: [
      { label: 'Ministries', path: '/ministries' },
      { label: 'Groups', path: '/groups' },
      { label: 'Institutions', path: '/institutions' },
      { label: 'Volunteer', path: '/serve' }
    ]
  },
  {
    label: 'Resources',
    children: [
      { label: 'Sermons', path: '/sermons' },
      { label: 'Stories', path: '/stories' },
      { label: 'Weekly Update', path: '/weekly' },
    ]
  },
  { label: 'Calendar', path: '/events' },
  { label: 'Give', path: '/give' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const hasDarkHero = () => {
    const p = location.pathname;
    // About page has a light background, so we exclude it here to ensure dark text
    if (p === '/' || p === '/sermons' || p === '/groups') return true;
    if (p.startsWith('/ministries/') || p.startsWith('/events/')) return true;
    return false;
  };

  const forceFilledHeader = () => {
    if (location.pathname.startsWith('/sermons/')) return true;
    if (location.pathname === '/give') return true;
    return false;
  };

  useEffect(() => {
    // Check initial session
    const checkSession = async () => {
      if (supabase) {
        const { data: { session } } = await supabase.auth.getSession();
        setIsLoggedIn(!!session);
      } else {
        // Fallback for demo without Supabase keys
        setIsLoggedIn(!!localStorage.getItem('mock_token'));
      }
    };
    checkSession();

    // Listen for auth changes
    let subscription: any = null;
    let handleMockAuth: (() => void) | null = null;

    if (supabase) {
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsLoggedIn(!!session);
      });
      subscription = data.subscription;
    } else {
      // Fallback listener for mock auth
      handleMockAuth = () => setIsLoggedIn(!!localStorage.getItem('mock_token'));
      window.addEventListener('auth-change', handleMockAuth);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (subscription) subscription.unsubscribe();
      if (handleMockAuth) window.removeEventListener('auth-change', handleMockAuth);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    } else {
      localStorage.removeItem('mock_token');
      window.dispatchEvent(new Event('auth-change'));
    }
    navigate({ to: '/' });
  };

  const isFilledState = isScrolled || forceFilledHeader();
  const isDarkText = !isMobileMenuOpen && !isFilledState && !hasDarkHero();

  return (
    <>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
        {/* Top Utility Bar */}
        <div className={`w-full bg-church-primary text-white transition-all duration-500 overflow-hidden flex justify-center pointer-events-auto ${isFilledState ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
          <div className="w-full max-w-[90rem] px-6 lg:px-12 flex justify-between items-center h-full text-[10px] font-bold uppercase tracking-[0.15em]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-white/90">
                <Clock size={12} className="text-church-gold" /> Sundays 9:00 AM & 11:00 AM
              </span>
              <span className="hidden md:flex items-center gap-2 text-white/90">
                <MapPin size={12} className="text-church-gold" /> 39/37 Tafawa Balewa Street, Jos
              </span>
            </div>
            <Link to="/sermons" className="hover:text-church-gold transition-colors flex items-center gap-2">
              Watch Live <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            </Link>
          </div>
        </div>

        {/* Main Header */}
        <header className={`w-full flex justify-center transition-all duration-500 pointer-events-auto ${isFilledState ? 'pt-4' : 'pt-6'}`}>
          <div className={`relative flex items-center justify-between transition-all duration-500 ${isFilledState ? 'w-[95%] max-w-7xl bg-church-primary/95 backdrop-blur-xl shadow-2xl rounded-full px-5 lg:px-8 py-3 border border-white/10' : 'w-full px-6 lg:px-12 py-4 bg-transparent'}`}>
            <Link to="/" className="flex items-center z-50 group flex-shrink-0">
               {/* Logo: U with Red Cross - Transparent Background */}
               <div className="w-12 h-12 lg:w-14 lg:h-14 mr-3 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 lg:w-14 lg:h-14">
                    {/* The U Shape - Color adapts to background */}
                    <path d="M25 20 V 60 C 25 80 75 80 75 60 V 20" stroke={isDarkText ? "#0B2545" : "#FFFFFF"} strokeWidth="12" fill="none" strokeLinecap="round" />
                    {/* The Red Cross - Moved Up */}
                    <path d="M50 25 V 65" stroke="#DC2626" strokeWidth="10" strokeLinecap="round" />
                    <path d="M30 40 H 70" stroke="#DC2626" strokeWidth="10" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="flex flex-col items-start">
                 <span className={`font-serif text-lg lg:text-2xl font-bold tracking-tight leading-none transition-colors duration-300 ${isDarkText ? 'text-church-primary' : 'text-white'}`}>United Baptist</span>
                 <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-church-gold">Church, Jos</span>
               </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.filter(i => i.path !== '/').map((item, idx) => (
                item.children ? (
                  <div key={idx} className="relative group px-1">
                    <button className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap ${isDarkText ? 'text-church-primary' : 'text-white/90'}`}>
                      {item.label} <ChevronDown size={10} className="group-hover:rotate-180 transition-transform opacity-70" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto min-w-[12rem]">
                      <div className="bg-white rounded-2xl shadow-2xl py-2 border border-gray-100">
                        {item.children.map((child, cIdx) => (
                          <Link key={cIdx} to={child.path!} className="block px-6 py-3 text-xs text-gray-600 hover:text-church-primary hover:bg-church-cream font-bold uppercase tracking-wider">{child.label}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.path} to={item.path!} className={`px-3 py-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${isDarkText ? 'text-church-primary/70 hover:text-church-primary' : 'text-white/80 hover:text-white'}`}>{item.label}</Link>
                )
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button onClick={() => setIsSearchOpen(true)} className={`w-10 h-10 flex items-center justify-center rounded-full ${isDarkText ? 'text-church-primary hover:bg-church-cream' : 'text-white hover:bg-white/10'}`}><Search size={18} /></button>
              {!isLoggedIn ? (
                <>
                  <Link to="/visit" className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border ${isDarkText ? 'border-church-primary text-church-primary hover:bg-church-primary hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-church-primary'}`}>Plan A Visit</Link>
                </>
              ) : (
                <div className="relative">
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className={`flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border ${isDarkText ? 'border-gray-200 bg-gray-50' : 'border-white/20 bg-white/10 text-white'}`}>
                    <div className="w-8 h-8 rounded-full bg-church-gold text-church-primary flex items-center justify-center font-bold font-serif">S</div>
                    <span className="text-xs font-bold uppercase">Sarah</span>
                  </button>
                  {isProfileOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl py-2 border border-gray-100 animate-fade-in-up">
                      <Link to="/dashboard" className="flex items-center gap-3 px-6 py-3 text-sm text-church-primary hover:bg-church-cream transition-colors"><LayoutDashboard size={16} className="text-church-gold" /> Dashboard</Link>
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-6 py-3 text-sm text-red-500 hover:bg-red-50 text-left"><LogOut size={16} /> Sign Out</button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button onClick={() => setIsSearchOpen(true)} className={`p-2 ${isDarkText ? 'text-church-primary' : 'text-white'}`}><Search size={24} /></button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`z-50 p-2 ${isDarkText ? 'text-church-primary' : 'text-white'}`}>{isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}</button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-church-primary/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-700 pointer-events-auto ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none translate-y-8'}`}>
        <div className="flex flex-col items-center space-y-6 w-full px-6 text-center">
          {navItems.map((item, idx) => (
             item.path !== '/' && (
               <Link key={idx} to={item.path || '#'} onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-4xl text-white hover:text-church-gold transition-colors">{item.label}</Link>
             )
          ))}
          <Link to="/visit" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-sm py-4 bg-church-gold text-church-primary rounded-full text-center font-bold uppercase tracking-widest mt-8">Plan A Visit</Link>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-church-primary text-white pt-32 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-church-gold via-church-cyan to-church-gold"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16">
          <div className="lg:w-1/3">
             <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-3 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-12 h-12">
                    <path d="M25 20 V 60 C 25 80 75 80 75 60 V 20" stroke="#FFFFFF" strokeWidth="12" fill="none" strokeLinecap="round" />
                    <path d="M50 25 V 65" stroke="#DC2626" strokeWidth="10" strokeLinecap="round" />
                    <path d="M30 40 H 70" stroke="#DC2626" strokeWidth="10" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                   <h2 className="font-serif text-3xl font-bold leading-none">United Baptist</h2>
                   <span className="text-church-gold text-xs font-bold tracking-[0.2em] uppercase">Church, Jos</span>
                </div>
             </div>
             <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-10">
               Sanctuary of Extra Ordinary Miracles.<br/>
               <span className="text-sm font-bold uppercase tracking-widest text-church-cyan mt-2 block">Since Jan. 2nd, 1966</span>
             </p>
             <div className="flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-church-primary transition-all"><Facebook size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-church-primary transition-all"><Instagram size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-church-primary transition-all"><Youtube size={16} /></a>
             </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <h4 className="text-church-cyan font-bold text-xs uppercase tracking-widest mb-8">Gathering</h4>
               <p className="text-white font-serif text-xl mb-1">Sundays</p>
               <p className="text-gray-400">9:00 AM & 11:00 AM</p>
            </div>
            <div>
               <h4 className="text-church-cyan font-bold text-xs uppercase tracking-widest mb-8">Location</h4>
               <p className="font-serif text-xl text-white">Main Sanctuary</p>
               <p className="text-gray-400">39/37 Tafawa Balewa Street<br />Jos, Nigeria</p>
            </div>
            <div>
               <h4 className="text-church-cyan font-bold text-xs uppercase tracking-widest mb-8">Support</h4>
               <Link to="/give" className="text-church-gold hover:text-white transition-colors flex items-center gap-2 font-bold tracking-widest text-[10px] uppercase">Online Giving <Heart size={14} /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} United Baptist Church, Jos. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-church-primary bg-church-cream selection:bg-church-gold selection:text-church-primary">
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      <GeminiAssistant />
      <Footer />
    </div>
  );
};

export default Layout;
