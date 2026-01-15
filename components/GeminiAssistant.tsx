import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, ChevronDown, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { sermonsData, eventsData, ministriesData, institutionsData, articlesData, weeklyUpdate } from '../data';

const SUGGESTIONS = [
  "What time is service?",
  "I need prayer",
  "Tell me about the youth ministry",
  "Who is the senior pastor?",
  "How can I give?"
];

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Peace be with you. I am the United Baptist virtual assistant. How can I help you connect with our church today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSend = async (textInput?: string) => {
    const userMessage = textInput || input;
    if (!userMessage.trim() || !process.env.API_KEY) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct dynamic context from data files
      const upcomingEventsContext = eventsData.map(e => 
        `- ${e.title} on ${e.date} at ${e.time} (${e.location})`
      ).join('\n');

      const latestSermonContext = `The latest sermon is "${sermonsData[0].title}" from the series "${sermonsData[0].series}", preached by ${sermonsData[0].speaker}.`;

      const ministriesContext = ministriesData.map(m => 
        `- ${m.title}: ${m.tagline}. Meets: ${m.schedule}.`
      ).join('\n');

      const institutionsContext = institutionsData.map(i => 
        `- ${i.name} (${i.type}): ${i.description} Contact: ${i.contact}`
      ).join('\n');
      
      const articlesContext = articlesData.map(a =>
         `- Article: "${a.title}" by ${a.author} (${a.category}). Summary: ${a.subtitle}`
      ).join('\n');
      
      const weeklyContext = `
        Current Weekly Announcement (${weeklyUpdate.date}):
        Title: ${weeklyUpdate.title}
        Highlights:
        ${weeklyUpdate.highlights.map(h => `- ${h.title}: ${h.content}`).join('\n')}
      `;

      const systemInstruction = `
        You are the pastoral assistant for "United Baptist Church", an elegant and welcoming church in Jos, Nigeria.
        Your tone should be warm, dignified, and empathetic. Use gentle language.
        
        Key Information:
        - Sunday Services: 9:00 AM (Traditional Hymns), 11:00 AM (Contemporary Worship).
        - Location: 123 Faith Avenue, Jos, Nigeria.
        - Senior Pastor: Rev. Dr. Elizabeth Sterling.
        - Mission: To foster a community of grace, truth, and profound spiritual depth.
        
        Real-time Church Data:
        ${latestSermonContext}
        
        Weekly Announcements:
        ${weeklyContext}
        
        Upcoming Events:
        ${upcomingEventsContext}
        
        Ministries:
        ${ministriesContext}
        
        Affiliated Institutions:
        ${institutionsContext}
        
        Recent Articles/Devotionals:
        ${articlesContext}
        
        If asked about prayer, offer a short, comforting prayer.
        If asked about donations, guide them to the /give page gently.
        If asked about schools or seminaries, refer to the institutions listed above.
        If asked about reading material or devotionals, recommend one of the recent articles.
        If asked about a specific event or ministry, use the details provided above.
        If asked about this week's news or announcements, refer to the weekly highlights.
        Keep responses concise but poetic. Do not use markdown formatting like bold or italics excessively.
      `;

      // Create a placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const result = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }] 
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: { systemInstruction }
      });

      let fullResponse = '';
      for await (const chunk of result) {
        const text = chunk.text;
        if (text) {
          fullResponse += text;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullResponse };
            return newMessages;
          });
        }
      }

    } catch (error) {
      console.error("Gemini Error", error);
      setMessages(prev => {
         // Remove the empty placeholder if it exists and is empty
         const newMessages = [...prev];
         if (newMessages[newMessages.length - 1].text === '') {
            newMessages.pop();
         }
         return [...newMessages, { role: 'model', text: 'I apologize, but I am currently unable to connect. Please try again later.' }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } bg-church-primary text-white border border-church-gold/30 shadow-church-primary/30`}
        aria-label="Open Assistant"
      >
        <Sparkles className="w-6 h-6 text-church-gold" />
      </button>

      {/* Chat Interface */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 max-w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-church-gold/20 transition-all duration-500 origin-bottom-right transform flex flex-col ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-12 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-church-primary p-5 flex justify-between items-center relative overflow-hidden flex-shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-church-gold/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-church-gold/20 flex items-center justify-center border border-church-gold/30">
               <Sparkles size={18} className="text-church-gold" />
            </div>
            <div>
              <h3 className="text-white font-serif font-bold tracking-wide text-lg">Pastoral Assistant</h3>
              <div className="flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                 <p className="text-white/60 text-[10px] uppercase tracking-widest">Online</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/50 hover:text-white transition-colors relative z-10 p-1 hover:bg-white/10 rounded-full"
          >
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-4 bg-[#fbfaf8] space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-church-primary text-white rounded-br-sm'
                    : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isLoading && messages[messages.length - 1]?.role !== 'model' && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-church-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-church-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-church-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Chips (Only show if few messages) */}
        {messages.length < 3 && !isLoading && (
           <div className="px-4 pb-2 bg-[#fbfaf8] overflow-x-auto hide-scrollbar flex gap-2 flex-shrink-0">
              {SUGGESTIONS.map((suggestion, idx) => (
                 <button 
                   key={idx}
                   onClick={() => handleSend(suggestion)}
                   className="px-3 py-1.5 bg-white border border-church-gold/30 text-church-primary text-xs rounded-full whitespace-nowrap hover:bg-church-gold hover:text-white transition-colors shadow-sm"
                 >
                   {suggestion}
                 </button>
              ))}
           </div>
        )}

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100 flex-shrink-0">
          <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-church-gold/50 focus-within:ring-2 focus-within:ring-church-gold/10 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              disabled={isLoading}
              className="flex-grow bg-transparent border-none outline-none text-sm text-church-primary placeholder-gray-400 disabled:opacity-50"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="ml-2 w-8 h-8 rounded-full bg-church-primary text-white flex items-center justify-center hover:bg-church-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiAssistant;