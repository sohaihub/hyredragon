
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageCircle, X, Send, ArrowUpCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'system' | 'assistant';
  content: string;
}

const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m your AI assistant. Ask me anything about HyrDragon\'s features and services.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // System prompt that contains information about HyrDragon's features
  const systemPrompt = `
    You are an AI assistant for HyrDragon, an AI-powered recruitment platform. 
    Provide helpful, accurate, and concise responses about our product features:
    
    1. AI Candidate Matching: Our advanced AI matching algorithm finds perfect candidates with 85%+ accuracy, including automated skill assessment, customizable matching criteria, and bias reduction algorithms.
    
    2. Smart Screening Process: Automates initial candidate screening with automated resume parsing, pre-screening questionnaires, skills assessment integration, and video interview scheduling.
    
    3. Interview Management: Streamline interview processes with AI-generated questions, collaborative interview feedback, and structured interview templates.
    
    4. Analytics & Reporting: Gain recruitment insights with comprehensive metrics dashboards, customizable reporting, and recruitment funnel analytics.
    
    5. Industry Solutions: We offer specialized solutions for educational institutions and healthcare staffing, including medical credentials verification, compliance tracking, specialty matching, and shift scheduling.
    
    Be concise, helpful, and maintain a professional tone. Always encourage users to request a demo for more information.
  `;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
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
      
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. Please try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat bubble button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-[#E2FF55] hover:bg-[#E2FF55]/80 text-[#0A0A29] shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="bg-[#0A0A29] border border-gray-800 rounded-2xl shadow-xl flex flex-col w-80 sm:w-96 h-[450px] transition-all">
          {/* Chat header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#080822] rounded-t-2xl">
            <h3 className="text-white font-semibold">HyrDragon Assistant</h3>
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
          <div className="p-3 border-t border-gray-800 bg-[#080822] rounded-b-2xl">
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 bg-[#0F103E] border-gray-700 focus:border-[#E2FF55] text-white"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-[#E2FF55] hover:bg-[#E2FF55]/80 text-[#0A0A29]"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChatbot;
