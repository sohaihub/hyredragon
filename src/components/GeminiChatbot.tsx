
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, Send } from 'lucide-react';

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
    - Pay-per-hour model: Starting at ₹1,000/hour for assessments and ₹1,500/hour for video interviews
    - Package discounts: 5% for 20 hours, 10% for 30 hours, 15% for 50 hours
    - Minimum session: 0.5 hours with actual usage-based billing
    - Remaining time rolls over to future sessions
    - Custom pricing available for larger requirements

    When asked about competitors like iMocha, TestDome, Spark Hire, or HackerEarth, highlight that HyreDragon:
    - Is the only platform combining MCQ, coding, and video interviews in one tool
    - Has built-in proctoring and real-time AI analytics
    - Offers a flexible pay-per-use model without monthly commitments
    - Provides comprehensive recruiting solutions instead of just individual features
    
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
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat bubble button with Dragon logo */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-[#E2FF55] hover:bg-[#E2FF55]/80 text-[#0A0A29] shadow-lg flex items-center justify-center group"
          aria-label="Open Dragon Assistant"
        >
          <div className="relative">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/b6808d1d-a7e3-47ee-8875-c93cd221558a.png" 
                alt="Dragon Assistant" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="absolute -top-8 whitespace-nowrap bg-[#0A0A29] text-[#E2FF55] px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Dragon Assistant
            </span>
          </div>
        </Button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="bg-[#0A0A29] border border-gray-800 rounded-2xl shadow-xl flex flex-col w-96 sm:w-[400px] h-[550px] transition-all">
          {/* Chat header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#080822] rounded-t-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <img 
                  src="/lovable-uploads/b6808d1d-a7e3-47ee-8875-c93cd221558a.png" 
                  alt="Dragon Assistant" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold">Dragon Assistant</h3>
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
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            ref={chatContainerRef}
          >
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <img 
                      src="/lovable-uploads/b6808d1d-a7e3-47ee-8875-c93cd221558a.png" 
                      alt="Dragon Assistant" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === 'user' 
                      ? 'bg-[#E2FF55] text-[#0A0A29]' 
                      : 'bg-[#1A1A3D] text-white'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2 mt-1">
                  <img 
                    src="/lovable-uploads/b6808d1d-a7e3-47ee-8875-c93cd221558a.png" 
                    alt="Dragon Assistant" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="max-w-[80%] rounded-2xl p-3 bg-[#1A1A3D] text-white">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
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
