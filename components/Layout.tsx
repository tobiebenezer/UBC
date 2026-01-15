
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { Menu, X, Facebook, Instagram, Youtube, Phone, User, LogOut, LayoutDashboard, Settings, ChevronDown, Clock, MapPin, Heart } from 'lucide-react';
import { NavItem } from '../types';
import GeminiAssistant from './GeminiAssistant';

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
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to determine if the current page starts with a Dark Hero section
  // (Requires White Text initially)
  const hasDarkHero = () => {
    const p = location.pathname;
    
    // Pages with confirmed Dark Hero sections
    if (p === '/' || p === '/sermons' || p === '/groups' || p === '/about') return true;
    
    // Dynamic Routes that have Image Headers
    if (p.startsWith('/ministries/')) return true;
    if (p.startsWith('/events/')) return true; // Event Detail has dark blurred bg
    if (p.startsWith('/sermons/')) return false; // Sermon Detail is Light (video player is distinct)
    
    return false;
  };

  // Helper to determine if we should force the "Scrolled/Filled" look
  // (Useful for pages like 'Give' with complex split backgrounds)
  const forceFilledHeader = () => {
    // Sermon Detail needs filled header because of the video player margin
    if (location.pathname.startsWith('/sermons/')) return true;
    if (location.pathname === '/give') return true;
    return false;
  };

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('user_token');
      setIsLoggedIn(!!user);
    };
    
    checkAuth();
    window.addEventListener('auth-change', checkAuth);
    
    const handleScroll = () => {
      try {
        setIsScrolled(window.scrollY > 50);
      } catch (e) {
        setIsScrolled(true); 
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('auth-change', checkAuth);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user_token');
    window.dispatchEvent(new Event('auth-change'));
    navigate({ to: '/' });
  };

  // Determine Text Color State
  const isFilledState = isScrolled || forceFilledHeader();
  
  // Logic: 
  // 1. If mobile menu open -> White
  // 2. If filled state (scrolled) -> Dark (on white blur) 
  //    UNLESS we want to keep it dark mode... but standard convention is white bg/dark text on scroll
  // 3. If transparent (top) and has Dark Hero -> White
  // 4. If transparent (top) and Light Hero -> Dark

  let isDarkText = false;

  if (isMobileMenuOpen) {
    isDarkText = false; // Always white in mobile menu
  } else if (isFilledState) {
    // When scrolled, we usually have a white/blur bar, so text should be dark
    isDarkText = false; // Wait, sticking to White Text on Navy Pill for Classy Look?
    // Let's check the implementation below...
    // The filled state bg is: bg-church-primary/95 (Navy). So text must be WHITE.
    isDarkText = false; 
  } else if (hasDarkHero()) {
    isDarkText = false; // White text on dark image
  } else {
    isDarkText = true; // Dark text on light background pages (e.g. Ministries list, Visit)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      
      {/* Top Utility Bar - Fades out on scroll */}
      <div 
        className={`w-full bg-church-primary text-white transition-all duration-500 overflow-hidden flex justify-center pointer-events-auto ${
          isFilledState ? 'h-0 opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="w-full max-w-[90rem] px-6 lg:px-12 flex justify-between items-center h-full text-[10px] font-bold uppercase tracking-[0.15em]">
           <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-white/90">
                <Clock size={12} className="text-church-gold" /> Sundays 9:00 AM & 11:00 AM
              </span>
              <span className="hidden md:flex items-center gap-2 text-white/90">
                <MapPin size={12} className="text-church-gold" /> 123 Faith Avenue, Jos
              </span>
           </div>
           <div className="flex items-center gap-6">
              <Link to="/sermons" className="hover:text-church-gold transition-colors flex items-center gap-2">
                 Watch Live <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
              </Link>
           </div>
        </div>
      </div>

      {/* Main Header Container */}
      <header 
        className={`w-full flex justify-center transition-all duration-500 pointer-events-auto ${
          isFilledState ? 'pt-4' : 'pt-6'
        }`}
      >
        <div 
          className={`
            relative flex items-center justify-between transition-all duration-500
            ${isFilledState 
              ? 'w-[95%] max-w-7xl bg-church-primary/95 backdrop-blur-xl shadow-2xl shadow-church-primary/30 rounded-full px-5 lg:px-8 py-3 border border-white/10' 
              : 'w-full px-6 lg:px-12 py-4 bg-transparent'
            }
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center z-50 group flex-shrink-0 mr-4 lg:mr-0">
             {/* Image Logo - Adapts brightness */}
             <img 
               src="/logo.png" 
               alt="United Baptist Church Logo" 
               className={`w-10 h-10 lg:w-12 lg:h-12 mr-3 object-contain transition-all duration-300 ${!isDarkText ? 'brightness-0 invert' : ''}`}
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }}
             />
             
             {/* Fallback CSS Logo - Adapts border color */}
             <div className="hidden relative w-8 h-10 mr-3 flex-shrink-0">
                <div className={`absolute inset-0 border-l-[6px] border-r-[6px] border-b-[6px] rounded-b-2xl h-full w-full transition-colors duration-300 ${isDarkText ? 'border-church-primary' : 'border-white'}`}></div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[4px] h-5 bg-church-red"></div>
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-[4px] bg-church-red"></div>
             </div>
             
             <div className="flex flex-col items-start">
               <span className={`font-serif text-lg lg:text-2xl font-bold tracking-tight leading-none transition-colors duration-300 ${isDarkText ? 'text-church-primary' : 'text-white'}`}>
                 United Baptist
               </span>
               <div className="flex items-center gap-2 mt-0.5">
                 <span className={`text-[0.6rem] font-bold uppercase tracking-[0.2em] text-church-gold`}>
                   Church, Jos
                 </span>
               </div>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.filter(item => item.path !== '/').map((item, idx) => {
              // Dropdown Menu Item
              if (item.children) {
                return (
                  <div key={idx} className="relative group px-1">
                     <button className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap ${
                       isDarkText 
                         ? 'text-church-primary hover:text-church-gold' 
                         : 'text-white/90 hover:text-white'
                     }`}>
                       {item.label} <ChevronDown size={10} className="group-hover:rotate-180 transition-transform duration-300 opacity-70" />
                     </button>
                     
                     {/* Dropdown Content */}
                     <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 pointer-events-none group-hover:pointer-events-auto min-w-[12rem]">
                        <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden py-2 border border-white/50 ring-1 ring-black/5">
                           <div className="absolute top-0 left-0 w-full h-1 bg-church-gold"></div>
                           {item.children.map((child, cIdx) => (
                              <Link 
                                key={cIdx} 
                                to={child.path!} 
                                className="block px-6 py-3 text-xs text-gray-600 hover:text-church-primary hover:bg-church-gold/10 transition-colors font-bold uppercase tracking-wider text-left"
                              >
                                {child.label}
                              </Link>
                           ))}
                        </div>
                     </div>
                  </div>
                );
              }
              
              // Standard Link Item
              return (
                <Link 
                  key={item.path} 
                  to={item.path!} 
                  className={`
                    px-3 py-2 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap relative group
                    ${location.pathname === item.path 
                      ? (isDarkText ? 'text-church-primary' : 'text-white') 
                      : (isDarkText ? 'text-church-primary/70 hover:text-church-primary' : 'text-white/80 hover:text-white')
                    }
                  `}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-church-gold transition-all duration-300 group-hover:w-1/2 ${location.pathname === item.path ? 'w-1/2' : ''}`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Action Button / User Profile */}
          <div className="hidden lg:flex items-center gap-3 z-50 flex-shrink-0 ml-4 lg:ml-0">
             {!isLoggedIn ? (
               <>
                 <Link
                  to="/visit"
                  className={`
                    px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all whitespace-nowrap border
                    ${isDarkText 
                      ? 'border-church-primary text-church-primary hover:bg-church-primary hover:text-white' 
                      : 'border-white/30 text-white hover:bg-white hover:text-church-primary'}
                  `}
                >
                  Plan A Visit
                </Link>
                 <Link
                  to="/login"
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full transition-all border
                    ${isDarkText 
                      ? 'bg-transparent border-church-primary/20 text-church-primary hover:bg-church-gold hover:text-church-primary' 
                      : 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-church-primary backdrop-blur-sm'}
                  `}
                  title="Member Login"
                >
                  <User size={16} />
                </Link>
               </>
             ) : (
               <div className="relative">
                 <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className={`flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border transition-all ${
                      isDarkText 
                      ? 'border-gray-200 bg-gray-50 hover:border-church-gold text-church-primary' 
                      : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                    }`}
                 >
                    <div className="w-8 h-8 rounded-full bg-church-gold text-church-primary flex items-center justify-center font-bold font-serif">
                       S
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase">Sarah</span>
                 </button>

                 {/* Dropdown */}
                 {isProfileOpen && (
                   <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 animate-fade-in-up">
                      <Link to="/dashboard" className="flex items-center gap-3 px-6 py-3 text-sm text-church-primary hover:bg-church-cream transition-colors">
                        <LayoutDashboard size={16} className="text-church-gold" /> Dashboard
                      </Link>
                      <Link to="/give" className="flex items-center gap-3 px-6 py-3 text-sm text-church-primary hover:bg-church-cream transition-colors">
                         <Heart size={16} className="text-church-gold" /> My Giving
                      </Link>
                      <div className="h-px bg-gray-100 my-1"></div>
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-6 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors text-left">
                        <LogOut size={16} /> Sign Out
                      </button>
                   </div>
                 )}
               </div>
             )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden z-50 p-2 transition-colors ${isDarkText ? 'text-church-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen 
              ? <X size={24} className="text-white" /> 
              : <Menu size={24} />
            } 
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - Premium Dark Glassmorphism */}
      <div
        className={`fixed inset-0 bg-church-primary/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-700 pointer-events-auto ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none translate-y-8'
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-church-gold via-church-cyan to-church-gold"></div>
        <div className="flex flex-col items-center space-y-6 max-h-[75vh] overflow-y-auto w-full px-6">
          {navItems.map((item, idx) => {
            if (item.path === '/') return null; 
            
            if (item.children) {
              return (
                <div key={idx} className="flex flex-col items-center w-full">
                   <div className="w-12 h-px bg-white/10 mb-6 mt-4"></div>
                   <span className="font-serif text-xl text-church-gold italic mb-4">{item.label}</span>
                   <div className="flex flex-col gap-5 items-center">
                     {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          to={child.path!}
                          className="font-serif text-3xl text-white hover:text-church-cyan transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                     ))}
                   </div>
                   <div className="w-12 h-px bg-white/10 mt-8 mb-4"></div>
                </div>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path!}
                className="font-serif text-4xl text-white hover:text-church-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

          {isLoggedIn && (
             <Link
              to="/dashboard"
              className="font-serif text-4xl text-church-gold hover:text-white transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Dashboard
            </Link>
          )}
        </div>

        {!isLoggedIn ? (
          <div className="flex flex-col gap-4 w-full px-12 max-w-sm">
            <Link
              to="/visit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 bg-church-gold text-church-primary rounded-full text-sm font-bold tracking-widest uppercase shadow-xl text-center hover:bg-white transition-colors"
            >
              Plan A Visit
            </Link>
            <Link
               to="/login"
               onClick={() => setIsMobileMenuOpen(false)}
               className="w-full py-4 border border-white/20 text-white rounded-full text-sm font-bold tracking-widest uppercase text-center hover:bg-white/10 transition-colors"
            >
              Member Login
            </Link>
          </div>
        ) : (
          <button
             onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
             className="px-10 py-4 border border-white/20 text-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-church-primary text-white pt-32 pb-12 w-full relative overflow-hidden">
      {/* Top Border Decor with Brand Colors */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-church-gold via-church-cyan to-church-gold"></div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16">
          
          <div className="lg:w-1/3">
             <div className="flex items-center mb-6">
                 {/* Image Logo - Always White for Footer (Dark Background) */}
                <img 
                   src="/logo.png" 
                   alt="United Baptist Church Logo" 
                   className="w-10 h-10 lg:w-12 lg:h-12 mr-3 object-contain brightness-0 invert"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 
                 {/* Fallback CSS Logo - Always White Border for Footer */}
                 <div className="hidden relative w-8 h-10 mr-3 flex-shrink-0">
                    <div className="absolute inset-0 border-l-[6px] border-r-[6px] border-b-[6px] border-white rounded-b-2xl h-full w-full"></div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[4px] h-5 bg-church-red"></div>
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-[4px] bg-church-red"></div>
                 </div>

                <div>
                   <h2 className="font-serif text-3xl font-bold leading-none">United Baptist</h2>
                   <span className="text-church-gold text-xs font-bold tracking-[0.2em] uppercase">Church, Jos</span>
                </div>
             </div>

             <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-10">
               Sanctuary of Extra Ordinary Miracles. Cultivating a community of grace, truth, and profound spiritual depth.
             </p>
             <div className="flex space-x-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-church-gold hover:border-church-gold hover:text-church-primary transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <h4 className="text-church-cyan font-bold text-xs uppercase tracking-widest mb-8">Gathering</h4>
               <ul className="space-y-6">
                 <li>
                   <span className="block text-white font-serif text-xl mb-1">Sundays</span>
                   <span className="text-gray-400">9:00 AM & 11:00 AM</span>
                 </li>
                 <li>
                   <span className="block text-white font-serif text-xl mb-1">Wednesdays</span>
                   <span className="text-gray-400">5:00 PM Prayer</span>
                 </li>
               </ul>
            </div>

            <div>
               <h4 className="text-church-cyan font-bold text-xs uppercase tracking-widest mb-8">Location</h4>
               <address className="not-italic text-gray-300 space-y-4 leading-relaxed">
                 <p className="font-serif text-xl text-white">Main Sanctuary</p>
                 <p>123 Faith Avenue<br />Jos, Nigeria</p>
                 <p className="flex items-center gap-2 mt-4 text-white">
                   <Phone size={16} className="text-church-gold" /> (555) 123-4567
                 </p>
               </address>
            </div>

            <div>
               <h4 className="text-church-cyan font-bold text-xs uppercase tracking-widest mb-8">Explore</h4>
               <ul className="space-y-4">
                 {navItems.flatMap(item => item.children ? item.children : item).filter(item => item.path !== '/').slice(0, 6).map(item => (
                   <li key={item.path}>
                     <Link to={item.path!} className="text-gray-300 hover:text-church-gold hover:translate-x-2 transition-all inline-flex items-center gap-2">
                       {item.label}
                     </Link>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} United Baptist Church.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-church-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-church-gold transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-church-primary bg-church-cream selection:bg-church-gold selection:text-church-primary">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <GeminiAssistant />
      <Footer />
    </div>
  );
};

export default Layout;
