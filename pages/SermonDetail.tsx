
import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { 
  Play, Download, Share2, BookOpen, MessageCircle, FileText, 
  Calendar, User, Check
} from 'lucide-react';
import { sermonsData } from '../data';

const SermonDetail: React.FC = () => {
  const { sermonId } = useParams({ from: '/sermons/$sermonId' });
  
  // Find sermon by ID or fallback to the first one if not found
  const sermon = sermonsData.find(s => s.id === sermonId) || sermonsData[0];
  
  // Get other sermons for "Up Next" section (excluding current)
  const upNext = sermonsData.filter(s => s.id !== sermon.id).slice(0, 3);

  const [activeTab, setActiveTab] = useState<'notes' | 'scripture' | 'discussion' | 'transcript'>('notes');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle Download Simulation
  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
        setIsDownloading(false);
        setDownloadComplete(true);
        setTimeout(() => setDownloadComplete(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-[#fbfaf8] min-h-screen pt-24 pb-20">
      
      {/* Cinema Player Section - YouTube Integration */}
      <div className="w-full bg-black shadow-2xl">
        <div className="container mx-auto px-0 md:px-6 py-6 md:py-12">
           <div className="aspect-video w-full bg-black rounded-none md:rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 group">
             
             {!isPlaying ? (
               // Cover Image State
               <>
                 <img 
                   src={sermon.image} 
                   alt={sermon.title}
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 
                 {/* Play Button */}
                 <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="w-24 h-24 bg-church-primary/90 text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-church-gold hover:text-church-primary transition-all duration-300 shadow-2xl group/btn backdrop-blur-sm"
                    >
                        <Play size={40} className="ml-2 fill-current" />
                    </button>
                 </div>

                 <div className="absolute bottom-8 left-8 text-white z-20">
                    <span className="text-church-gold font-bold uppercase tracking-widest text-xs mb-2 block">{sermon.series} Series</span>
                    <h1 className="font-serif text-3xl md:text-5xl leading-none">{sermon.title}</h1>
                 </div>
               </>
             ) : (
               // YouTube Iframe State
               <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${sermon.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={sermon.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
               ></iframe>
             )}

           </div>
        </div>
      </div>

      {/* Main Content Info */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Details */}
          <div className="lg:w-2/3">
             <div className="flex items-center gap-4 mb-6 text-sm text-gray-400 font-bold uppercase tracking-widest">
               <span className="flex items-center gap-2"><Calendar size={14} className="text-church-gold"/> {sermon.date}</span>
               <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
               <span className="flex items-center gap-2"><User size={14} className="text-church-gold"/> {sermon.speaker}</span>
             </div>
             
             <h1 className="font-serif text-4xl md:text-5xl text-church-primary mb-4 leading-tight">
               {sermon.title}
             </h1>

             {/* Action Buttons */}
             <div className="flex flex-wrap gap-4 mb-12 pb-12 border-b border-gray-200">
                <button 
                  onClick={handleDownload}
                  disabled={isDownloading || downloadComplete}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${downloadComplete ? 'bg-green-100 text-green-700' : 'bg-church-primary text-white hover:bg-church-gold hover:text-church-primary'}`}
                >
                  {isDownloading ? (
                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : downloadComplete ? (
                     <Check size={16} /> 
                  ) : (
                     <Download size={16} />
                  )}
                  {isDownloading ? 'Downloading...' : downloadComplete ? 'Saved' : 'Audio Only'}
                </button>
                <button 
                  onClick={() => setActiveTab('transcript')}
                  className={`flex items-center gap-2 px-6 py-3 border rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'transcript' ? 'border-church-gold text-church-gold' : 'border-gray-200 text-church-primary hover:border-church-gold hover:text-church-gold'}`}
                >
                  <FileText size={16} /> Transcripts
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 text-church-primary rounded-full text-xs font-bold uppercase tracking-widest hover:border-church-gold hover:text-church-gold transition-colors">
                  <Share2 size={16} /> Share
                </button>
             </div>

             {/* Tabs */}
             <div className="mb-8 flex gap-8 border-b border-gray-200 overflow-x-auto hide-scrollbar">
                <button 
                  onClick={() => setActiveTab('notes')}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'notes' ? 'text-church-primary border-b-2 border-church-gold' : 'text-gray-400 hover:text-church-primary'}`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('transcript')}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'transcript' ? 'text-church-primary border-b-2 border-church-gold' : 'text-gray-400 hover:text-church-primary'}`}
                >
                  Transcript
                </button>
                <button 
                  onClick={() => setActiveTab('scripture')}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'scripture' ? 'text-church-primary border-b-2 border-church-gold' : 'text-gray-400 hover:text-church-primary'}`}
                >
                  Scripture
                </button>
                <button 
                  onClick={() => setActiveTab('discussion')}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'discussion' ? 'text-church-primary border-b-2 border-church-gold' : 'text-gray-400 hover:text-church-primary'}`}
                >
                  Discussion
                </button>
             </div>

             <div className="animate-fade-in-up">
                {activeTab === 'notes' && (
                  <div className="prose prose-lg text-gray-500 max-w-none font-light leading-relaxed">
                    <p>{sermon.description}</p>
                    <p className="mt-4">
                      Join us as we uncover the beauty of slowing down in a fast-paced world. This sermon challenges the modern idol of "busyness" and invites us into the sacred rhythm of grace.
                    </p>
                  </div>
                )}

                {activeTab === 'transcript' && (
                   <div className="prose prose-lg text-gray-500 max-w-none font-light leading-relaxed whitespace-pre-wrap">
                      {sermon.transcript ? (
                        sermon.transcript
                      ) : (
                        <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                           <FileText className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                           <p className="text-gray-400 text-sm">Transcript is currently unavailable for this message.</p>
                        </div>
                      )}
                   </div>
                )}

                {activeTab === 'scripture' && sermon.scripture && (
                   <div className="space-y-8">
                      {sermon.scripture.map((verse, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                           <BookOpen className="text-church-gold mb-4" size={24} />
                           <p className="font-serif text-xl text-church-primary mb-4 italic leading-relaxed">"{verse.text}"</p>
                           <p className="text-xs font-bold uppercase tracking-widest text-gray-400">— {verse.ref}</p>
                        </div>
                      ))}
                   </div>
                )}

                {activeTab === 'discussion' && sermon.discussion && (
                   <div className="bg-church-cream rounded-3xl p-8 md:p-10 border border-church-primary/5">
                      <h3 className="font-serif text-2xl text-church-primary mb-6 flex items-center gap-3">
                        <MessageCircle size={24} className="text-church-gold" /> Small Group Questions
                      </h3>
                      <ul className="space-y-6">
                        {sermon.discussion.map((q, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <span className="w-6 h-6 rounded-full bg-church-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-1">{i + 1}</span>
                            <p className="text-gray-600 leading-relaxed">{q}</p>
                          </li>
                        ))}
                      </ul>
                   </div>
                )}
             </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:w-1/3">
             <div className="sticky top-32">
               <h3 className="font-serif text-2xl text-church-primary mb-8">Up Next</h3>
               <div className="space-y-6">
                  {upNext.map((item) => (
                    <Link key={item.id} to={`/sermons/${item.id}`} className="group flex gap-4 items-start">
                       <div className="w-32 h-20 rounded-xl overflow-hidden relative flex-shrink-0">
                          <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Thumbnail"/>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                       </div>
                       <div>
                          <h4 className="font-bold text-church-primary group-hover:text-church-gold transition-colors line-clamp-2 leading-tight mb-1">
                            {item.title}
                          </h4>
                          <span className="text-xs text-gray-400">{item.duration}</span>
                       </div>
                    </Link>
                  ))}
               </div>
               
               <div className="mt-12 bg-church-primary p-8 rounded-3xl text-white text-center">
                  <h4 className="font-serif text-2xl mb-4">New Here?</h4>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    We'd love to connect with you and help you find your place in our community.
                  </p>
                  <Link to="/visit" className="inline-block px-8 py-3 bg-church-gold text-church-primary font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                    Get Connected
                  </Link>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonDetail;
