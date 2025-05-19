import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, Send, Sparkles } from 'lucide-react';
import { toast } from './ui/use-toast';
import DragonIcon from './DragonIcon';

interface Message {
  role: 'user' | 'system' | 'assistant';
  content: string;
  id: string;
  parentId?: string;
  timestamp: number;
}

const DragonChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your Dragon Assistant. Ask me anything about HyreDragon\'s AI-powered recruiting platform.', 
      id: 'initial-message',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeThread, setActiveThread] = useState<string>('initial-message');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const systemPrompt = `
    You are Dragon, the official AI assistant for HyreDragon, an advanced AI-powered recruitment platform. 
    You should respond with a friendly, professional, and helpful tone. Always be concise but informative.
    
    Here is the key information about HyreDragon you should know:

    ABOUT HYREDRAGON:
    HyreDragon is an AI-powered recruitment platform that streamlines the hiring process for organizations. 
    Our platform automates candidate screening, provides intelligent matching, and offers comprehensive analytics to help companies make better hiring decisions.

    KEY PLATFORM FEATURES:
    
    1. AI-POWERED CANDIDATE MATCHING
       - Proprietary AI algorithm matches candidates to jobs with 85%+ accuracy
       - Automated assessment of technical and soft skills
       - Customizable weightings for different job requirements
       - Built-in fairness algorithms to reduce bias in hiring
       - Multilingual candidate evaluation capabilities

    2. INTELLIGENT SCREENING SOLUTIONS
       - Automated resume parsing and data extraction
       - Pre-screening questionnaires with customizable scoring
       - Video interview analysis with sentiment detection
       - Automated reference checking
       - Skills testing platform integration

    3. ADVANCED INTERVIEW MANAGEMENT
       - AI-generated interview questions tailored to job requirements
       - Collaborative interviewer feedback system
       - Structured interview templates for consistency
       - Calendar integration with automated scheduling
       - Post-interview candidate scoring and evaluation tools

    4. COMPREHENSIVE ANALYTICS DASHBOARD
       - Real-time recruitment funnel metrics
       - Diversity and inclusion analytics
       - Source effectiveness tracking
       - Time-to-hire and cost-per-hire analytics
       - Customizable reports and data visualization

    5. INDUSTRY-SPECIFIC RECRUITMENT SOLUTIONS
       - Healthcare: credential verification, shift scheduling integration
       - Technology: technical assessment tools, coding challenge integration
       - Finance: compliance verification, background check automation
       - Education: certification tracking, specialized academic staffing
       - Retail: high-volume hiring tools, seasonal staffing optimization

    BENEFITS FOR RECRUITERS:
    - Reduces time-to-hire by 40%
    - Cuts screening time by 75%
    - Improves quality-of-hire metrics
    - Enhances candidate experience
    - Provides data-driven hiring insights

    BENEFITS FOR CANDIDATES:
    - Faster application process
    - Personalized job matching
    - Transparent feedback throughout
    - Fair assessment of qualifications
    - Better job fit leading to higher satisfaction

    PRICING INFORMATION:
    - Starter: ₹10,000 - 10 hours, basic features
    - Basic: ₹20,000 - 20 hours, all core features
    - Standard: ₹30,000 - 30 hours, all features with priority support
    - Professional: ₹40,000 - 40 hours, all features with dedicated support
    - Premium: ₹50,000 - 50 hours, all features with custom integration
    - Enterprise: Custom pricing - Unlimited hours, dedicated support, custom integration

    SPECIAL OFFER: First 50 customers get 3 free hours and priority onboarding.

    When asked about competitors, focus on HyreDragon's unique advantages without directly criticizing other platforms.
    
    If users ask about pricing specifics, benefits of plans, or implementation details, recommend scheduling a demo with a product specialist for personalized information.

    Respond in a helpful, concise manner. Aim for responses that are informative but not too lengthy.
    
    If someone asks about something completely unrelated to recruitment or our platform, politely redirect them by mentioning you're specialized in helping with our recruitment platform.
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
      parentId: activeThread,
      timestamp: Date.now()
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
        parentId: messageId,
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setActiveThread(assistantMessageId);
      
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
        content: "I'm having trouble connecting right now. Please try again later.",
        id: generateMessageId(),
        parentId: messageId,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getConversationThread = (threadId: string) => {
    if (!threadId) return [messages[0]]; // Return initial greeting if no thread
    
    const result: Message[] = [];
    let currentId: string | undefined = threadId;
    
    // Traverse up the thread to reconstruct the conversation
    while (currentId) {
      const message = messages.find(m => m.id === currentId);
      if (message) {
        result.unshift(message);
        currentId = message.parentId;
      } else {
        currentId = undefined;
      }
    }
    
    return result;
  };

  // Group messages by threads for better visualization
  const getThreadedMessages = () => {
    const threads: Record<string, Message[]> = {};
    
    // First pass: organize messages by their parentId
    messages.forEach(message => {
      const parentId = message.parentId || 'root';
      if (!threads[parentId]) {
        threads[parentId] = [];
      }
      threads[parentId].push(message);
    });
    
    // Find root messages (those without parents or with non-existent parents)
    const rootMessages = messages.filter(message => 
      !message.parentId || !messages.some(m => m.id === message.parentId)
    );
    
    return rootMessages.sort((a, b) => a.timestamp - b.timestamp);
  };

  const threadedMessages = getThreadedMessages();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Updated Dragon Assistant chat bubble button to match the first image */}
      {!isOpen && (
        <div className="dragon-assistant-button">
          <Button 
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 rounded-full bg-[#0A0A29] border border-[#E2FF55]/20 shadow-lg flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(226,255,85,0.2)] transition-all duration-300"
            aria-label="Open Dragon Assistant"
          >
            <Sparkles className="w-5 h-5 text-[#E2FF55]" />
            <span className="text-white font-medium">Chat with Dragon  </span>
          </Button>
        </div>
      )}
      
      {/* Premium chat window with subtle animations */}
      {isOpen && (
        <div className="bg-[#080820] border border-[#E2FF55]/10 rounded-2xl shadow-2xl shadow-black/20 flex flex-col w-96 sm:w-[500px] h-[650px] animate-fade-in overflow-hidden content-box">
          {/* Chat header - updated with Dragon theme */}
          <div className="p-4 border-b border-[#E2FF55]/10 flex justify-between items-center bg-gradient-to-r from-[#0F103E] to-[#080822] relative overflow-hidden">
            <div className="flex items-center relative z-10">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-[#1A1A3D] border border-[#E2FF55]/10 p-1">
                <Sparkles className="w-5 h-5 text-[#E2FF55]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Dragon</h3>
                <p className="text-[#E2FF55]/70 text-xs">Recruitment Assistant</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white relative z-10 hover:bg-white/5 transition-all duration-300 micro-button"
            >
              <X className="w-5 h-5" />
            </Button>
            
            {/* Early adopter promo notification */}
            <div className="absolute -top-1 left-0 right-0 px-3 py-0.5 bg-gradient-to-r from-[#E2FF55]/10 to-transparent opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <p className="text-xs text-center">
                <span className="promo-text text-xs">First 50 customers get 3 free hours</span>
              </p>
            </div>
          </div>
          
          {/* Chat messages with refined animations */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent bg-[#080820]"
            ref={chatContainerRef}
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.03" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
            }}
          >
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in ${message.parentId ? 'ml-6' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveThread(message.id)}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0 bg-[#1A1A3D] border border-[#E2FF55]/10 p-1">
                    <Sparkles className="w-4 h-4 text-[#E2FF55]" />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 cursor-pointer transition-all duration-300 hover-lift ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-r from-[#1A1A3D] to-[#232349] text-white border border-white/5' 
                      : 'bg-gradient-to-r from-[#0F103E] to-[#151535] text-white border border-[#E2FF55]/10'
                  } ${activeThread === message.id ? 'ring-1 ring-[#E2FF55]/20 transform scale-[1.02]' : ''}`}
                >
                  {message.content}
                  <div className="mt-1 text-right">
                    <span className="text-xs text-gray-400">
                      {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1 bg-[#1A1A3D] border border-[#E2FF55]/10 p-1">
                  <Sparkles className="w-4 h-4 text-[#E2FF55]" />
                </div>
                <div className="max-w-[80%] rounded-2xl p-3 bg-gradient-to-r from-[#0F103E] to-[#151535] text-white border border-[#E2FF55]/10">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-white/50 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50 animate-[pulse_0.8s_ease-in-out_infinite_0.2s]"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50 animate-[pulse_0.8s_ease-in-out_infinite_0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat input - refined design */}
          <div className="p-4 border-t border-[#E2FF55]/10 bg-gradient-to-r from-[#0F103E] to-[#080822]">
            <div className="flex items-center gap-2 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder="Ask Dragon about HyreDragon's features..."
                className="flex-1 bg-[#080820] border-[#E2FF55]/10 focus:border-[#E2FF55]/30 text-white focus:ring-[#E2FF55]/10 transition-all duration-300"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-[#1A1A3D] hover:bg-[#232349] text-white p-1 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden micro-button"
              >
                <Send className="w-4 h-4 relative z-10" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragonChatbot;