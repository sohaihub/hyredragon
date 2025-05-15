
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, Send } from 'lucide-react';
import DragonIcon from './DragonIcon';
import { toast } from './ui/use-toast';

interface Message {
  role: 'user' | 'system' | 'assistant';
  content: string;
}

const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m Dragon, your AI assistant. Ask me anything about HyrDragon\'s features and services.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Enhanced system prompt with more detailed information about HyreDragon
  const systemPrompt = `
    You are Dragon, the official AI assistant for HyrDragon, an advanced AI-powered recruitment platform. 
    You should respond with a friendly, professional, and helpful tone. Always be concise but informative.
    
    Here are the detailed features of HyrDragon that you should be well-versed in:

    1. AI-POWERED CANDIDATE MATCHING
       - Uses proprietary matching algorithm with 85%+ accuracy finding ideal candidates
       - Automated assessment of hard and soft skills
       - Customizable weightings for different job requirements
       - Fairness algorithms to reduce bias in hiring
       - Multilingual candidate evaluation

    2. SMART SCREENING CAPABILITIES
       - Automated resume parsing and data extraction
       - Pre-screening questionnaires with custom scoring
       - Video screening integration with sentiment analysis
       - Automated reference checking
       - Skills testing platform integration

    3. INTERVIEW MANAGEMENT SYSTEM
       - AI-generated interview questions based on job requirements
       - Collaborative interviewer feedback system
       - Structured interview templates for consistency
       - Calendar integration and automated scheduling
       - Post-interview candidate evaluation tools

    4. ANALYTICS & REPORTING DASHBOARD
       - Real-time recruitment funnel metrics
       - Diversity and inclusion analytics
       - Source effectiveness reporting
       - Time-to-hire and cost-per-hire tracking
       - Customizable reports and data visualization

    5. INDUSTRY-SPECIFIC SOLUTIONS
       - Healthcare: credential verification, shift scheduling integration
       - Technology: technical assessment tools, coding challenge integration
       - Finance: compliance verification, background check automation
       - Education: certification tracking, specialized academic staffing
       - Retail: high-volume hiring tools, seasonal staffing optimization

    PRICING INFORMATION:
    - Starter: ₹10,000 - 10 hours, basic features
    - Basic: ₹20,000 - 20 hours, all core features
    - Standard: ₹30,000 - 30 hours, all features with priority support
    - Professional: ₹40,000 - 40 hours, all features with dedicated support
    - Premium: ₹50,000 - 50 hours, all features with custom integration
    - Enterprise: Custom pricing - Unlimited hours, dedicated support, custom integration

    When asked about competitors, focus on HyrDragon's unique advantages without directly criticizing other platforms.
    
    If users ask about pricing specifics, benefits of plans, or implementation details, recommend scheduling a demo with a product specialist for personalized information.

    Respond in a helpful, concise manner. Aim for responses that are informative but not too lengthy.
    
    If someone asks about something completely unrelated to recruitment or HyrDragon, politely redirect them by mentioning you're specialized in helping with HyrDragon's recruitment platform.
  `;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Format messages for the API
      const prompt = `${systemPrompt}\n\nUser: ${input}\nAssistant:`;
      
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': 'AIzaSyBpRPVj7CxgDmZ9nuwiewIveo6HaWPbfdM'
        },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          }
        })
      });

      const data = await response.json();
      
      // Handle possible response formats
      let botResponse = '';
      if (data.candidates && data.candidates[0]?.content?.parts) {
        botResponse = data.candidates[0].content.parts[0].text || "Sorry, I couldn't generate a response.";
      } else {
        console.error("Unexpected API response format:", data);
        botResponse = "Sorry, I encountered an error. Please try again.";
      }
      
      const assistantMessage: Message = { role: 'assistant', content: botResponse };
      setMessages(prev => [...prev, assistantMessage]);
      
      // Show a toast notification
      toast({
        title: "Response received",
        description: "Dragon Assistant has responded to your query.",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. Please try again later."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-8 z-50">
      {/* Chat bubble button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 rounded-full bg-[#E2FF55] hover:bg-[#E2FF55]/80 text-[#0A0A29] shadow-lg flex items-center justify-center group relative animate-pulse-light"
          aria-label="Open Dragon Assistant"
        >
          <div className="relative w-14 h-14 flex items-center justify-center">
            <DragonIcon className="w-14 h-14" />
            <span className="absolute -top-12 whitespace-nowrap bg-[#0A0A29] text-[#E2FF55] px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Dragon Assistant
            </span>
          </div>
        </Button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="bg-[#0A0A29] border border-gray-800 rounded-2xl shadow-xl flex flex-col w-96 sm:w-[450px] h-[600px] transition-all animate-scale-in">
          {/* Chat header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gradient-to-r from-[#0F103E] to-[#080822] rounded-t-2xl">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#E2FF55]/20 flex items-center justify-center mr-3 p-1">
                <DragonIcon className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Dragon Assistant</h3>
                <p className="text-gray-400 text-xs">HyrDragon AI</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Chat messages */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent bg-[#0A0A29] bg-opacity-95"
            ref={chatContainerRef}
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
            }}
          >
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-full bg-[#E2FF55]/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0 p-1">
                    <DragonIcon className="w-8 h-8" />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === 'user' 
                      ? 'bg-[#E2FF55] text-[#0A0A29]' 
                      : 'bg-gradient-to-r from-[#1A1A3D] to-[#1A1A40] text-white border border-[#7B78FF]/20'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-10 h-10 rounded-full bg-[#E2FF55]/20 flex items-center justify-center mr-2 mt-1 p-1">
                  <DragonIcon className="w-8 h-8" />
                </div>
                <div className="max-w-[80%] rounded-2xl p-3 bg-gradient-to-r from-[#1A1A3D] to-[#1A1A40] text-white border border-[#7B78FF]/20">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#E2FF55] animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-[#E2FF55] animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-[#E2FF55] animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat input */}
          <div className="p-4 border-t border-gray-800 bg-[#080822] rounded-b-2xl">
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask Dragon a question..."
                className="flex-1 bg-[#0F103E] border-gray-700 focus:border-[#E2FF55] text-white"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-[#E2FF55] hover:bg-[#E2FF55]/80 text-[#0A0A29] p-1 w-10 h-10 flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChatbot;
