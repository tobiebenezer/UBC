import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { articlesData } from '../data';
import { Clock, User, Share2, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { storyId } = useParams({ from: '/stories/$storyId' });
  const article = articlesData.find(a => a.id === storyId) || articlesData[0];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      
      {/* Progress Bar (Simulated) */}
      <div className="fixed top-0 left-0 h-1 bg-church-gold w-full z-50 origin-left scale-x-[0.3]"></div>

      <article>
         {/* Navigation */}
         <div className="container mx-auto px-6 max-w-3xl mb-12">
            <Link to="/stories" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-church-primary transition-colors">
               <ArrowLeft size={16} /> Back to Journal
            </Link>
         </div>

         {/* Header */}
         <header className="container mx-auto px-6 max-w-4xl text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
               <span className="px-4 py-1.5 border border-church-gold text-church-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {article.category}
               </span>
               <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{article.date}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-church-primary mb-8 leading-tight">
               {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light italic max-w-2xl mx-auto leading-relaxed">
               {article.subtitle}
            </p>
         </header>

         {/* Hero Image */}
         <div className="container mx-auto px-0 md:px-6 mb-16 max-w-5xl">
            <div className="w-full h-[50vh] md:h-[70vh] md:rounded-[3rem] overflow-hidden relative shadow-xl">
               <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
         </div>

         {/* Metadata & Author */}
         <div className="container mx-auto px-6 max-w-3xl mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center py-8 border-y border-gray-100 gap-6">
               <div className="flex items-center gap-4">
                  <img src={article.authorImage} alt={article.author} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                     <span className="block font-serif text-lg text-church-primary leading-none mb-1">{article.author}</span>
                     <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{article.authorRole}</span>
                  </div>
               </div>
               <div className="flex items-center gap-8 text-gray-400 text-sm font-medium">
                  <span className="flex items-center gap-2"><Clock size={16} className="text-church-gold"/> {article.readTime} Read</span>
                  <div className="flex items-center gap-4">
                     <button className="hover:text-church-primary transition-colors"><Facebook size={18} /></button>
                     <button className="hover:text-church-primary transition-colors"><Twitter size={18} /></button>
                     <button className="hover:text-church-primary transition-colors"><Linkedin size={18} /></button>
                  </div>
               </div>
            </div>
         </div>

         {/* Content Body */}
         <div className="container mx-auto px-6 max-w-3xl">
            <div 
               className="prose prose-lg md:prose-xl max-w-none text-gray-600 font-light leading-loose prose-headings:font-serif prose-headings:text-church-primary prose-a:text-church-gold prose-blockquote:border-l-church-gold prose-blockquote:bg-church-cream prose-blockquote:py-2 prose-blockquote:pr-4 prose-img:rounded-3xl"
               dangerouslySetInnerHTML={{ __html: article.content }}
            />
         </div>

         {/* Footer / Read Next */}
         <div className="bg-[#fbfaf8] py-20 mt-20">
            <div className="container mx-auto px-6 max-w-4xl text-center">
               <img src="/logo.png" alt="Logo" className="w-12 h-12 mx-auto mb-6 opacity-20 grayscale" />
               <h3 className="font-serif text-3xl text-church-primary mb-8">Continue Reading</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {articlesData.filter(a => a.id !== article.id).slice(0, 2).map(next => (
                     <Link key={next.id} to={`/stories/${next.id}`} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group">
                        <span className="text-church-gold text-[10px] font-bold uppercase tracking-widest mb-3 block">{next.category}</span>
                        <h4 className="font-serif text-xl text-church-primary group-hover:text-church-gold transition-colors mb-2">{next.title}</h4>
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Read Article &rarr;</span>
                     </Link>
                  ))}
               </div>
            </div>
         </div>

      </article>
    </div>
  );
};

export default ArticleDetail;