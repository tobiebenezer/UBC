import React, { useState } from 'react';
import { articlesData } from '../data';
import { Link } from '@tanstack/react-router';
import { Clock, User, ArrowRight } from 'lucide-react';

const Articles: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Devotional', 'Theology', 'News', 'Culture'];
  const featuredArticle = articlesData[0];
  
  const filteredArticles = articlesData.filter(article => {
    // Skip the featured article in the grid if we are on 'All' tab, or show it if it matches category
    // For simplicity, let's show filtered results.
    if (activeCategory === 'All') return article.id !== featuredArticle.id;
    return article.category === activeCategory;
  });

  return (
    <div className="pt-32 pb-20 bg-[#fbfaf8] min-h-screen">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center max-w-4xl">
        <span className="text-church-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Journal</span>
        <h1 className="font-serif text-5xl md:text-7xl text-church-primary mb-8">Stories of Grace</h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
           Reflections, updates, and deep dives into theology. Exploring what it means to follow Jesus in our time and place.
        </p>
      </div>

      {/* Featured Article (Only show on All) */}
      {activeCategory === 'All' && (
        <div className="container mx-auto px-6 mb-24 max-w-6xl">
           <Link to={`/stories/${featuredArticle.id}`} className="group block relative rounded-[3rem] overflow-hidden h-[500px] shadow-2xl">
              <img 
                 src={featuredArticle.image} 
                 alt={featuredArticle.title} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full md:w-2/3">
                 <span className="px-3 py-1 bg-church-gold text-church-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
                    {featuredArticle.category}
                 </span>
                 <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight group-hover:text-church-gold transition-colors">
                    {featuredArticle.title}
                 </h2>
                 <p className="text-white/80 text-lg mb-8 line-clamp-2">
                    {featuredArticle.subtitle}
                 </p>
                 <div className="flex items-center gap-6 text-white/60 text-sm font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><User size={14}/> {featuredArticle.author}</span>
                    <span className="flex items-center gap-2"><Clock size={14}/> {featuredArticle.readTime}</span>
                 </div>
              </div>
           </Link>
        </div>
      )}

      {/* Filter */}
      <div className="container mx-auto px-6 mb-12 border-b border-gray-200">
         <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-4 justify-start md:justify-center">
            {categories.map(cat => (
               <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap pb-4 border-b-2 ${
                    activeCategory === cat ? 'text-church-primary border-church-primary' : 'text-gray-400 border-transparent hover:text-church-gold'
                  }`}
               >
                  {cat}
               </button>
            ))}
         </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 max-w-6xl">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map(article => (
               <Link key={article.id} to={`/stories/${article.id}`} className="group flex flex-col h-full">
                  <div className="h-64 rounded-[2rem] overflow-hidden mb-6 relative">
                     <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-widest text-church-primary">
                           {article.category}
                        </span>
                     </div>
                  </div>
                  <div className="flex-grow flex flex-col">
                     <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                        <span className="text-church-gold">{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime} Read</span>
                     </div>
                     <h3 className="font-serif text-2xl text-church-primary mb-3 leading-tight group-hover:text-church-gold transition-colors">
                        {article.title}
                     </h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {article.subtitle}
                     </p>
                     <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <img src={article.authorImage} alt={article.author} className="w-8 h-8 rounded-full object-cover" />
                           <span className="text-xs font-bold text-gray-600">{article.author}</span>
                        </div>
                        <ArrowRight size={16} className="text-gray-300 group-hover:text-church-primary transition-colors" />
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </div>

    </div>
  );
};

export default Articles;