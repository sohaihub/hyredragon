
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';

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
    <section className="py-14 md:py-16 px-4 relative overflow-hidden content-box">
      {/* Subtle animated background */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#7B78FF]/3 blur-3xl animate-[pulse_8s_cubic-bezier(0.22,1,0.36,1)_infinite]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-[#7B78FF]/2 blur-3xl animate-[pulse_12s_cubic-bezier(0.22,1,0.36,1)_infinite]" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto relative z-10 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-[#3D3D5C]/20 rounded-md bg-[#0A0A29]/60 overflow-hidden transform transition-all duration-400 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="px-5 py-4 text-white hover:text-white text-lg font-medium group text-left">
                <span className="group-hover:translate-x-1 transition-transform duration-300">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-gray-300 animate-fade-in text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 text-center">
          <div className="promo-box inline-block mb-8 px-7 py-3 rounded-full bg-[#0F103E] border border-[#3D3D5C]/20">
            <p className="text-base">
              <span className="promo-text font-medium">First 50 customers get 3 free hours</span>
            </p>
          </div>
          
          <div className="mt-6">
            <Button 
              className="bg-gradient-to-r from-[#1A1A3D] to-[#232349] text-white px-5 py-6 rounded-full flex items-center gap-2 border border-[#3D3D5C]/20 hover:border-[#3D3D5C]/40 transition-all duration-400 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg overflow-hidden relative group"
              onClick={() => {
                // This would trigger the chatbot to open
                const chatbotButton = document.querySelector('.fixed.bottom-8.right-8 button');
                if (chatbotButton) {
                  (chatbotButton as HTMLButtonElement).click();
                }
              }}
            >
              <div className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center bg-[#232349]/70">
                <Sparkles className="w-4 h-4 text-[#7B78FF]" />
              </div>
              <span className="font-medium relative z-10">Chat with Dragon Assistant</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQs;
