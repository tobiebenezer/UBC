
import React, { useRef, useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, Heart, MessageCircle, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Plus, X, Image as ImageIcon, Link as LinkIcon, Loader2 } from 'lucide-react';
import { socialData } from '../data';
import { supabase } from '../lib/supabaseClient';
import { SocialPost } from '../types';

const SocialFeed: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostPlatform, setNewPostPlatform] = useState<'instagram' | 'facebook' | 'youtube'>('instagram');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState('');
  const [newPostLink, setNewPostLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch Data & Check Auth
  useEffect(() => {
    const fetchData = async () => {
      // 1. Check Auth
      if (supabase) {
        const { data: { session } } = await supabase.auth.getSession();
        setIsLoggedIn(!!session);
      } else {
        setIsLoggedIn(!!localStorage.getItem('mock_token'));
      }

      // 2. Fetch Posts
      if (supabase) {
        const { data, error } = await supabase
          .from('social_posts')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (data && data.length > 0 && !error) {
           // Map DB columns to our Types format if needed, assuming direct mapping for now
           setPosts(data as unknown as SocialPost[]);
        } else {
           setPosts(socialData); // Fallback to mock data if empty or error
        }
      } else {
        setPosts(socialData);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newPost = {
        platform: newPostPlatform,
        content: newPostContent,
        image: newPostImage,
        link: newPostLink,
        date: 'Just now',
        likes: '0'
    };

    try {
        if (supabase) {
            const { error } = await supabase.from('social_posts').insert([newPost]);
            if (error) throw error;
            // Refresh posts (optimistic update for demo)
            setPosts([newPost as SocialPost, ...posts]);
        } else {
            // Mock insert
            setPosts([ { ...newPost, id: Date.now().toString() } as SocialPost, ...posts ]);
        }
        setIsModalOpen(false);
        setNewPostContent('');
        setNewPostImage('');
        setNewPostLink('');
    } catch (error) {
        console.error("Error creating post:", error);
        alert("Failed to create post");
    } finally {
        setIsSubmitting(false);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Approx card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Duplicate data to ensure we have a "wall" feel if few posts
  const displayPosts = posts.length < 4 ? [...posts, ...posts, ...posts] : [...posts, ...posts];

  return (
    <div className="w-full bg-[#f8f7f5] py-24 overflow-hidden relative group/section">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end relative z-10">
         <div className="max-w-xl">
            <span className="text-church-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Community Life</span>
            <div className="flex items-center gap-4">
                <h2 className="font-serif text-5xl text-church-primary mb-6">The Social Wall</h2>
                {isLoggedIn && (
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="mb-6 w-10 h-10 rounded-full bg-church-gold text-church-primary flex items-center justify-center hover:bg-church-primary hover:text-white transition-colors shadow-lg"
                        title="Add Post"
                    >
                        <Plus size={20} />
                    </button>
                )}
            </div>
            <p className="text-gray-500 font-light leading-relaxed">
              Snapshots of grace, community, and life together. Follow us to stay encouraged throughout your week.
            </p>
         </div>
         <div className="hidden md:flex items-center gap-4 mt-8 md:mt-0">
            <span className="text-xs font-bold uppercase tracking-widest text-church-primary">Follow Us:</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-church-primary/10 bg-white flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
               <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-church-primary/10 bg-white flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
               <Instagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-church-primary/10 bg-white flex items-center justify-center text-church-primary hover:bg-church-primary hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
               <Youtube size={18} />
            </a>
         </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-6 z-20 -translate-y-1/2 hidden md:block opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 pt-32">
         <button onClick={() => scroll('left')} className="w-14 h-14 bg-white/80 backdrop-blur-md text-church-primary rounded-full flex items-center justify-center shadow-xl border border-white hover:bg-church-primary hover:text-white transition-all hover:scale-110">
            <ChevronLeft size={24} />
         </button>
      </div>
      <div className="absolute top-1/2 right-6 z-20 -translate-y-1/2 hidden md:block opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 pt-32">
         <button onClick={() => scroll('right')} className="w-14 h-14 bg-white/80 backdrop-blur-md text-church-primary rounded-full flex items-center justify-center shadow-xl border border-white hover:bg-church-primary hover:text-white transition-all hover:scale-110">
            <ChevronRight size={24} />
         </button>
      </div>

      {/* Horizontal Scroll Feed */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-16 px-6 hide-scrollbar snap-x relative z-10 scroll-smooth"
      >
         {isLoading ? (
             <div className="w-full flex justify-center py-20"><Loader2 className="animate-spin text-church-gold" /></div>
         ) : displayPosts.map((post, index) => (
            <a 
               key={`${post.id}-${index}`} 
               href={post.link}
               target="_blank"
               rel="noopener noreferrer"
               className="flex-shrink-0 w-[350px] bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-white/50 snap-center transition-all duration-300 hover:-translate-y-2 group flex flex-col cursor-pointer"
            >
               {/* Header */}
               <div className="flex items-center justify-between p-6 pb-4">
                  <div className="flex items-center gap-3">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md ${
                        post.platform === 'facebook' ? 'bg-[#1877F2]' : 
                        post.platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' : 'bg-[#FF0000]'
                     }`}>
                        {post.platform === 'facebook' && <Facebook size={16} />}
                        {post.platform === 'instagram' && <Instagram size={16} />}
                        {post.platform === 'youtube' && <Youtube size={16} />}
                     </div>
                     <div>
                        <span className="block text-xs font-bold text-church-primary uppercase tracking-wider">United Baptist</span>
                        <span className="text-[10px] font-bold text-gray-400">{post.date}</span>
                     </div>
                  </div>
                  {/* Visual Button - Not an anchor tag since parent is anchor */}
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-church-gold group-hover:text-white transition-colors">
                     <ExternalLink size={14} />
                  </div>
               </div>

               {/* Image Area */}
               {post.image ? (
                  <div className="w-full h-64 relative overflow-hidden bg-gray-100">
                     <img src={post.image} alt="Social post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     {post.platform === 'youtube' && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                           <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Youtube size={24} className="text-red-600 ml-1" fill="currentColor" />
                           </div>
                        </div>
                     )}
                  </div>
               ) : (
                  <div className="w-full h-8 bg-church-cream/50 border-t border-b border-gray-100"></div>
               )}

               {/* Content */}
               <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium line-clamp-4 flex-grow">
                     {post.content}
                  </p>

                  {/* Footer Stats */}
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-gray-400 text-xs font-bold uppercase tracking-wide">
                     <div className="flex gap-4">
                        <span className="flex items-center gap-1.5 group-hover:text-red-500 transition-colors"><Heart size={14} className={post.likes ? "fill-current" : ""} /> {post.likes}</span>
                        <span className="flex items-center gap-1.5 hover:text-church-primary transition-colors"><MessageCircle size={14} /></span>
                     </div>
                     <span className="text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-church-gold">View Post</span>
                  </div>
               </div>
            </a>
         ))}
         
         {/* End Card CTA */}
         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-80 bg-church-primary rounded-[2rem] p-10 flex flex-col justify-center items-center text-center text-white snap-center shadow-2xl relative overflow-hidden group cursor-pointer">
             <div className="absolute top-0 right-0 w-48 h-48 bg-church-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-church-gold/30 transition-colors duration-700"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform">
                  <Heart size={28} className="text-church-gold" />
                </div>
                <h3 className="font-serif text-3xl mb-4">Join the Conversation</h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                  Be part of our digital family. Tag us @UnitedBaptist to be featured.
                </p>
                <div className="inline-flex items-center gap-2 px-8 py-3 bg-church-gold text-church-primary rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-white transition-colors shadow-lg">
                  Follow Us <ArrowRight size={14} />
                </div>
             </div>
         </a>
      </div>

      {/* Add Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
                <div className="bg-church-primary p-6 text-white flex justify-between items-center">
                    <h3 className="font-serif text-xl">New Social Post</h3>
                    <button onClick={() => setIsModalOpen(false)} className="hover:text-church-gold"><X size={20} /></button>
                </div>
                <form onSubmit={handleCreatePost} className="p-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Platform</label>
                        <div className="flex gap-4">
                            {['instagram', 'facebook', 'youtube'].map((p) => (
                                <button
                                    key={p}
                                    type="button"
                                    onClick={() => setNewPostPlatform(p as any)}
                                    className={`flex-1 py-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                                        newPostPlatform === p 
                                        ? 'bg-church-primary text-white border-church-primary shadow-md' 
                                        : 'bg-white text-gray-400 border-gray-200 hover:border-church-gold'
                                    }`}
                                >
                                    {p === 'instagram' && <Instagram size={16} />}
                                    {p === 'facebook' && <Facebook size={16} />}
                                    {p === 'youtube' && <Youtube size={16} />}
                                    <span className="capitalize text-xs font-bold">{p}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Content</label>
                        <textarea 
                            required
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            rows={3}
                            placeholder="Share something encouraging..."
                            className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-church-gold/20 outline-none resize-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Image URL</label>
                        <div className="relative">
                            <ImageIcon className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" size={16} />
                            <input 
                                type="url"
                                value={newPostImage}
                                onChange={(e) => setNewPostImage(e.target.value)}
                                placeholder="https://..."
                                className="w-full bg-gray-50 border-none rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-church-gold/20 outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Link URL</label>
                        <div className="relative">
                            <LinkIcon className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" size={16} />
                            <input 
                                type="url"
                                value={newPostLink}
                                onChange={(e) => setNewPostLink(e.target.value)}
                                placeholder="https://..."
                                className="w-full bg-gray-50 border-none rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-church-gold/20 outline-none"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 bg-church-gold text-church-primary font-bold tracking-widest uppercase rounded-xl shadow-lg hover:bg-church-primary hover:text-white transition-all disabled:opacity-70 flex justify-center"
                    >
                        {isSubmitting ? <Loader2 className="animate-spin" /> : 'Publish Post'}
                    </button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default SocialFeed;
