
import React from 'react';
import { Facebook, Instagram, Youtube, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { socialData } from '../data';

const SocialFeed: React.FC = () => {
  return (
    <div className="w-full bg-church-cream py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
         <div>
            <span className="text-church-gold font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Connect Online</span>
            <h2 className="font-serif text-4xl text-church-primary">Social Wall</h2>
         </div>
         <div className="hidden md:flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-church-primary/20 flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-all">
               <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-church-primary/20 flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-all">
               <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-church-primary/20 flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-all">
               <Youtube size={18} />
            </a>
         </div>
      </div>

      {/* Horizontal Scroll Feed */}
      <div className="flex gap-6 overflow-x-auto pb-12 px-6 hide-scrollbar snap-x">
         {socialData.map((post) => (
            <div 
               key={post.id} 
               className="flex-shrink-0 w-80 bg-white rounded-[2rem] p-6 shadow-sm border border-church-primary/5 snap-center hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
               {/* Header */}
               <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                        post.platform === 'facebook' ? 'bg-[#1877F2]' : 
                        post.platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' : 'bg-red-600'
                     }`}>
                        {post.platform === 'facebook' && <Facebook size={14} />}
                        {post.platform === 'instagram' && <Instagram size={14} />}
                        {post.platform === 'youtube' && <Youtube size={14} />}
                     </div>
                     <span className="text-xs font-bold text-gray-500">{post.date}</span>
                  </div>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-church-primary">
                     <ExternalLink size={14} />
                  </a>
               </div>

               {/* Image (Optional) */}
               {post.image && (
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative">
                     <img src={post.image} alt="Social post" className="w-full h-full object-cover" />
                     {post.platform === 'youtube' && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                           <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                              <Youtube size={18} className="text-red-600 ml-1" />
                           </div>
                        </div>
                     )}
                  </div>
               )}

               {/* Content */}
               <p className="text-church-primary text-sm leading-relaxed mb-6 font-medium line-clamp-4 flex-grow">
                  {post.content}
               </p>

               {/* Footer */}
               <div className="pt-4 border-t border-gray-100 flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-wide">
                  <span className="flex items-center gap-1.5"><Heart size={14} className={post.likes ? "text-red-400" : ""} /> {post.likes}</span>
                  <span className="flex items-center gap-1.5"><MessageCircle size={14} /> Comment</span>
               </div>
            </div>
         ))}
         
         {/* CTA Card */}
         <div className="flex-shrink-0 w-64 bg-church-primary rounded-[2rem] p-8 flex flex-col justify-center items-center text-center text-white snap-center">
             <h3 className="font-serif text-2xl mb-4">Join the Conversation</h3>
             <p className="text-white/60 text-sm mb-6">Follow us for daily encouragement and updates.</p>
             <a href="#" className="px-6 py-3 bg-church-gold text-church-primary rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
               @UnitedBaptist
             </a>
         </div>
      </div>
    </div>
  );
};

export default SocialFeed;
