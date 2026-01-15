
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles, ChevronDown } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { sermonsData, eventsData, ministriesData, institutionsData, weeklyUpdate } from '../data';

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
    { role: 'model', text: 'Peace be with you. I am the UBC virtual assistant. How can I help you connect with our Sanctuary of Extra Ordinary Miracles today?' }
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
    if (!userMessage.trim() || !process.env.API_KEY || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are the pastoral assistant for "United Baptist Church, Jos" (UBC Jos).
        Motto/Tagline: "Sanctuary of Extra Ordinary Miracles".
        Founding Date: Established January 2nd, 1966.
        Location: 39/37 Tafawa Balewa Street, Jos, Nigeria.
        
        Your tone: Warm, dignified, poetic, and empathetic. Speak with the grace of a sanctuary.
        
        Key Information:
        - Sunday Services: 9:00 AM & 11:00 AM.
        - Senior Pastor: Rev. Dr. Elizabeth Sterling.
        
        Real-time Church Data:
        Latest sermon: ${sermonsData[0].title}.
        Upcoming event: ${eventsData[0].title} on ${eventsData[0].date}.
        Ministries: ${ministriesData.map(m => m.title).join(', ')}.
        
        Keep responses concise but spiritual. Guide people to /give for donations or /visit to plan a visit.
      `;

      // Start the model interaction
      const response = await ai.models.generateContent({
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

      const fullResponse = response.text || 'I apologize, I am having trouble connecting right now.';
      setMessages(prev => [...prev, { role: 'model', text: fullResponse }]);

    } catch (error) {
      console.error("Gemini Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Forgive me, but I am currently offline. Please reach out to us at our main office.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } bg-church-primary text-white border border-church-gold/30 shadow-church-primary/30`}
        aria-label="Open Assistant"
      >
        <Sparkles className="w-6 h-6 text-church-gold" />
      </button>

      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 max-w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-church-gold/20 transition-all duration-500 origin-bottom-right transform flex flex-col ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-12 pointer-events-none'
        }`}
      >
        <div className="bg-church-primary p-5 flex justify-between items-center relative flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-church-gold/20 flex items-center justify-center border border-church-gold/30">
               <Sparkles size={18} className="text-church-gold" />
            </div>
            <div>
              <h3 className="text-white font-serif font-bold text-lg">UBC Assistant</h3>
              <p className="text-white/60 text-[10px] uppercase tracking-widest">Always Here</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/50 hover:text-white transition-colors"
          >
            <ChevronDown size={20} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 bg-[#fbfaf8] space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' ? 'bg-church-primary text-white rounded-br-sm' : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm'
                }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-bl-sm border border-gray-100 flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-church-gold rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-church-gold rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-church-gold rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-gray-100">
          {messages.length < 4 && !isLoading && (
            <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => handleSend(s)} className="px-3 py-1.5 bg-church-cream text-church-primary text-[10px] font-bold uppercase tracking-wider rounded-full hover:bg-church-gold hover:text-white transition-colors border border-church-primary/5 whitespace-nowrap">
                  {s}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How can we help?"
              className="flex-grow bg-transparent border-none outline-none text-sm text-church-primary"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="ml-2 w-8 h-8 rounded-full bg-church-primary text-white flex items-center justify-center hover:bg-church-gold transition-colors"
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
