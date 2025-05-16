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
      content: 'Hello! I\'m your Dragon Assistant. Ask me anything about our AI recruitment platform and features.', 
      id: 'initial-message',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeThread, setActiveThread] = useState<string>('initial-message');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const systemPrompt = `
    You are Dragon, the official AI assistant for our advanced AI-powered recruitment platform. 
    You should respond with a friendly, professional, and helpful tone. Always be concise but informative.
    
    Here are the detailed features of our platform that you should be well-versed in:

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

    SPECIAL OFFER: First 50 customers get 3 free hours and priority onboarding.

    When asked about competitors, focus on our unique advantages without directly criticizing other platforms.
    
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
      {/* Dragon Assistant chat button - updated to match image */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 py-3 px-5 rounded-full bg-[#1A1A3D] text-white transition-all duration-300 border border-[#3D3D5C] shadow-lg hover:shadow-[0_0_15px_rgba(123,120,255,0.3)] transform hover:scale-[1.02]"
        >
          <Sparkles className="w-5 h-5 text-[#E2FF55]" />
          <span className="font-medium text-sm whitespace-nowrap">Chat with Dragon Assistant</span>
        </button>
      )}
      
      {/* Premium chat window with subtle animations */}
      {isOpen && (
        <div className="bg-[#0A0A29] border border-[#3D3D5C]/30 rounded-xl shadow-xl flex flex-col w-96 sm:w-[400px] h-[550px] animate-fade-in overflow-hidden">
          {/* Chat header - updated with Dragon theme */}
          <div className="p-4 border-b border-[#3D3D5C]/20 flex justify-between items-center bg-gradient-to-r from-[#0F103E] to-[#0A0A29] relative overflow-hidden">
            <div className="flex items-center relative z-10">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#1A1A3D] border border-[#3D3D5C]/30 p-1">
                <Sparkles className="w-4 h-4 text-[#E2FF55]" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-medium text-md">Dragon Assistant</h3>
                <p className="text-white/50 text-xs">Recruitment Guide</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white relative z-10 hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </Button>
            
            {/* Early adopter promo notification */}
            <div className="absolute -top-1 left-0 right-0 px-3 py-0.5 bg-gradient-to-r from-[#3D3D5C]/20 to-transparent opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <p className="text-xs text-center">
                <span className="text-white/80 text-xs">First 50 customers get 3 free hours</span>
              </p>
            </div>
          </div>
          
          {/* Chat messages with refined animations */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent bg-[#0A0A29]"
            ref={chatContainerRef}
          >
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveThread(message.id)}
              >
                {message.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0 bg-[#1A1A3D] border border-[#3D3D5C]/30 p-1">
                    <Sparkles className="w-3 h-3 text-[#E2FF55]" />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-[#1A1A3D] text-white' 
                      : 'bg-[#0F103E] text-white'
                  } ${activeThread === message.id ? 'shadow-sm' : ''}`}
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
                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1 bg-[#1A1A3D] border border-[#3D3D5C]/30 p-1">
                  <Sparkles className="w-3 h-3 text-[#E2FF55]" />
                </div>
                <div className="max-w-[80%] rounded-lg p-3 bg-[#0F103E] text-white">
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
          <div className="p-3 border-t border-[#3D3D5C]/20 bg-[#0A0A29]">
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder="Ask about our features..."
                className="flex-1 bg-[#0F103E]/50 border-[#3D3D5C]/30 text-white focus-visible:ring-1 focus-visible:ring-[#7B78FF]/30 transition-all duration-300"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-[#1A1A3D] hover:bg-[#232349] text-white p-1 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

export default DragonChatbot;
