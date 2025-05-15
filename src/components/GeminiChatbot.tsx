import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, Send, Flame } from 'lucide-react';
import { toast } from './ui/use-toast';

interface Message {
  role: 'user' | 'system' | 'assistant';
  content: string;
  id?: string;
  parentId?: string;
}

const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your AI assistant. Ask me anything about HyreDragon\'s features and services.', 
      id: 'initial-message' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeThread, setActiveThread] = useState<string | null>('initial-message');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const systemPrompt = `
    You are the official AI assistant for HyreDragon, an advanced AI-powered recruitment platform. 
    You should respond with a friendly, professional, and helpful tone. Always be concise but informative.
    
    Here are the detailed features of HyreDragon that you should be well-versed in:

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

    6. AI DRIVEN FEEDBACK
       - Real-time feedback on candidate responses
       - Sentiment analysis of interviews
       - Customized feedback templates
       - Automated performance insights
       - Bias detection and mitigation recommendations

    PRICING INFORMATION:
    - Starter: ₹10,000 - 10 hours, basic features
    - Basic: ₹20,000 - 20 hours, all core features
    - Standard: ₹30,000 - 30 hours, all features with priority support
    - Professional: ₹40,000 - 40 hours, all features with dedicated support
    - Premium: ₹50,000 - 50 hours, all features with custom integration
    - Enterprise: Custom pricing - Unlimited hours, dedicated support, custom integration

    SPECIAL OFFER: First 50 customers get a 25% discount and priority onboarding.

    When asked about competitors, focus on HyreDragon's unique advantages without directly criticizing other platforms.
    
    If users ask about pricing specifics, benefits of plans, or implementation details, recommend scheduling a demo with a product specialist for personalized information.

    Respond in a helpful, concise manner. Aim for responses that are informative but not too lengthy.
    
    If someone asks about something completely unrelated to recruitment or HyreDragon, politely redirect them by mentioning you're specialized in helping with HyreDragon's recruitment platform.
  `;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const generateMessageId = () => {
    return `msg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const messageId = generateMessageId();
    const userMessage: Message = { 
      role: 'user', 
      content: input,
      id: messageId,
      parentId: activeThread
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setActiveThread(messageId);
    
    try {
      // Get the conversation history for context
      const conversationHistory = getConversationThread(activeThread);
      
      // Format messages for the API
      const conversationContext = conversationHistory.map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n');
      const prompt = `${systemPrompt}\n\nConversation history:\n${conversationContext}\n\nUser: ${input}\nAssistant:`;
      
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
      
      const assistantMessageId = generateMessageId();
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: botResponse,
        id: assistantMessageId,
        parentId: messageId
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setActiveThread(assistantMessageId);
      
      // Show a toast notification
      toast({
        title: "Response received",
        description: "AI Assistant has responded to your query.",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. Please try again later.",
        id: generateMessageId(),
        parentId: messageId
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getConversationThread = (threadId: string | null) => {
    if (!threadId) return [messages[0]]; // Return initial greeting if no thread
    
    const result: Message[] = [];
    let currentId = threadId;
    
    // Traverse up the thread to reconstruct the conversation
    while (currentId) {
      const message = messages.find(m => m.id === currentId);
      if (message) {
        result.unshift(message);
        currentId = message.parentId;
      } else {
        currentId = null;
      }
    }
    
    return result;
  };

  // Dragon-themed flame icon
  const DragonFlameIcon = () => (
    <div className="relative">
      <Flame className="w-6 h-6 text-[#E2FF55] animate-pulse" />
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF9F5A]" />
    </div>
  );

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat bubble button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E2FF55] to-[#FF9F5A] hover:from-[#E2FF55]/90 hover:to-[#FF9F5A]/90 shadow-lg hover:shadow-xl flex items-center justify-center relative transition-all duration-300"
          aria-label="Open AI Assistant"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <DragonFlameIcon />
          </div>
        </Button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="bg-[#0A0A29] border border-gray-800 rounded-2xl shadow-xl flex flex-col w-96 sm:w-[500px] h-[650px] transition-all animate-scale-in">
          {/* Chat header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gradient-to-r from-[#0F103E] to-[#080822] rounded-t-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gradient-to-br from-[#E2FF55]/20 to-[#FF9F5A]/20 p-1">
                <DragonFlameIcon />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">HyreDragon AI</h3>
                <p className="text-gray-400 text-xs">Intelligent Assistant</p>
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
                onClick={() => setActiveThread(message.id || null)}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0 bg-gradient-to-br from-[#E2FF55]/20 to-[#FF9F5A]/20">
                    <Flame className="w-5 h-5 text-[#FF9F5A]" />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 cursor-pointer ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-r from-[#E2FF55] to-[#E2FF55]/90 text-[#0A0A29]' 
                      : 'bg-gradient-to-r from-[#1A1A3D] to-[#1A1A40] text-white border border-[#7B78FF]/20'
                  } ${activeThread === message.id ? 'ring-2 ring-[#E2FF55]/50' : ''}`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1 bg-gradient-to-br from-[#E2FF55]/20 to-[#FF9F5A]/20">
                  <Flame className="w-5 h-5 text-[#FF9F5A] animate-pulse" />
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
                placeholder="Ask AI a question..."
                className="flex-1 bg-[#0F103E] border-gray-700 focus:border-[#E2FF55] text-white"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-gradient-to-r from-[#E2FF55] to-[#FF9F5A] hover:opacity-90 text-[#0A0A29] p-1 w-10 h-10 flex items-center justify-center"
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
