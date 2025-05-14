
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageCircle, X, Send } from 'lucide-react';

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

  // System prompt that contains information about HyrDragon's features
  const systemPrompt = `
    You are Dragon, an AI assistant for HyrDragon, an AI-powered recruitment platform. 
    You specialize in helping users understand HyreDragon's features. You must answer clearly, accurately, and professionally. Be friendly but concise. If a user asks something unrelated or very specific, kindly recommend they schedule a demo.
Here are HyreDragon’s main features:
1. :mag: AI Candidate Matching:
   - 85%+ accuracy in finding top candidates.
   - Automated skill assessment & customizable matching.
   - Reduces bias using fairness algorithms.
2. :page_facing_up: Smart Screening:
   - Automated resume parsing.
   - Pre-screening questionnaires & skill tests.
   - Video interview scheduling integration.
3. :date: Interview Management:
   - AI-generated interview questions.
   - Collaborative feedback & structured templates.
4. :bar_chart: Analytics & Reporting:
   - Metrics dashboards with funnel analytics.
   - Exportable and customizable reports.
5. :hospital: Industry Solutions:
   - Healthcare: credential verification, shift scheduling.
   - Education: compliance tracking, specialized staffing.
Always mention the option to “request a demo” for in-depth queries.
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
            <h3 className="text-white font-semibold">Dragon Assistant</h3>
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
