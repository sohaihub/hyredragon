
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from 'lucide-react';

const PricingFAQs: React.FC = () => {
  const faqs = [
    {
      question: "How does our AI matching technology work?",
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
      answer: "Yes, we offer a 14-day free trial on our Pro plan so you can experience the full power of our platform before committing. No credit card is required to start your trial."
    },
    {
      question: "What kind of support is included with each plan?",
      answer: "Basic plans include email support with a 48-hour response time. Pro plans add priority email and chat support with a 24-hour response time. Enterprise plans feature dedicated account managers, phone support, and guaranteed response times backed by an SLA."
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden content-box">
      {/* Enhanced animated background */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#E2FF55]/5 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-[#E2FF55]/3 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto relative z-10 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center relative inline-block w-full">
          Frequently Asked <span className="text-white hover:text-[#E2FF55] transition-colors duration-500">Questions</span>
          <div className="absolute -bottom-2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white/10 rounded-lg bg-[#0A0A29]/60 overflow-hidden transform transition-all duration-500 hover-lift content-box"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-white text-lg font-medium group">
                <span className="group-hover:translate-x-1 transition-transform duration-300">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300 animate-fade-in">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <div className="promo-box inline-block mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#1A1A3D] to-[#080820] border border-[#E2FF55]/10">
            <p className="text-lg">
              <span className="promo-text font-semibold">First 50 customers get 3 free hours</span>
            </p>
          </div>
          
          <div className="mt-6">
            <Button 
              className="bg-gradient-to-r from-[#1A1A3D] to-[#232349] text-white px-6 py-6 rounded-full flex items-center gap-2 border border-[#E2FF55]/10 hover:border-[#E2FF55]/20 transition-all duration-500 transform hover:translate-y-[-2px] shadow-lg hover:shadow-[#E2FF55]/5 overflow-hidden relative group micro-button"
              onClick={() => {
                // This would trigger the chatbot to open
                const chatbotButton = document.querySelector('.fixed.bottom-8.right-8 button');
                if (chatbotButton) {
                  (chatbotButton as HTMLButtonElement).click();
                }
              }}
            >
              <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-[#232349]">
                <Sparkles className="w-5 h-5 text-[#E2FF55]" />
              </div>
              <span className="font-medium relative z-10 text-lg">Chat with Dragon Assistant</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQs;
