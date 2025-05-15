
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Flame } from 'lucide-react';
import DragonIcon from './DragonIcon';

const PricingFAQs: React.FC = () => {
  const faqs = [
    {
      question: "How does HyreDragon's AI matching technology work?",
      answer: "Our AI technology analyzes candidate profiles against your job requirements using advanced machine learning algorithms. It considers skills, experience, cultural fit, and other factors to provide high-quality matches, significantly reducing time-to-hire and improving candidate quality."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can easily upgrade or downgrade your subscription at any time. When upgrading, you'll get immediate access to additional features. When downgrading, changes will take effect at the start of your next billing cycle."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Absolutely! Our Enterprise plan is fully customizable to meet the specific needs of large organizations. This includes custom workflows, dedicated support, advanced analytics, and seamless integration with your existing HR systems."
    },
    {
      question: "Is there a trial period available?",
      answer: "Yes, we offer a 14-day free trial on our Pro plan so you can experience the full power of HyreDragon before committing. No credit card is required to start your trial."
    },
    {
      question: "What kind of support is included with each plan?",
      answer: "Basic plans include email support with a 48-hour response time. Pro plans add priority email and chat support with a 24-hour response time. Enterprise plans feature dedicated account managers, phone support, and guaranteed response times backed by an SLA."
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#E2FF55]/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-[#E2FF55]/5 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto relative z-10 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center relative inline-block w-full">
          Frequently Asked <span className="text-[#E2FF55] animate-[glow_3s_ease-in-out_infinite]">Questions</span>
          <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#E2FF55] to-transparent opacity-60 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-[#7B78FF]/30 rounded-lg bg-[#0A0A29]/60 overflow-hidden transform transition-all duration-300 hover:shadow-md hover:shadow-[#7B78FF]/20 hover:border-[#7B78FF]/50 animate-[fadeIn_0.5s_ease-out]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#E2FF55] text-lg font-medium group">
                <span className="group-hover:translate-x-1 transition-transform duration-300">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300 animate-[fadeIn_0.3s_ease-out]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-white text-lg mb-4">Still have questions?</p>
          
          <Button 
            className="bg-gradient-to-r from-[#E2FF55] to-[#FF9F5A] text-[#080820] px-6 py-6 rounded-full flex items-center gap-2 border-2 border-transparent hover:border-[#E2FF55]/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#E2FF55]/30 overflow-hidden relative group"
            onClick={() => {
              // This would trigger the chatbot to open
              const chatbotButton = document.querySelector('.fixed.bottom-8.right-8 button');
              if (chatbotButton) {
                (chatbotButton as HTMLButtonElement).click();
              }
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-out]"></span>
            <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center">
              <DragonIcon className="w-6 h-6" />
            </div>
            <span className="font-medium relative z-10">Chat with HyreDragon Assistant</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQs;
