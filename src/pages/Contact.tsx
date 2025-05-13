import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background gradients */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E2FF55]/20 blur-3xl pointer-events-none select-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl pointer-events-none select-none"></div>

      <Header />

      <main className="flex-grow relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Get in <span className="text-[#E2FF55]">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions about Hydragon's AI recruitment platform? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-lg">
                <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      required
                      className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      required
                      className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 w-full md:w-auto flex items-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-lg">
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Info</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                        <Mail className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white">contact@hydragon.ai</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                        <Phone className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                        <MapPin className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-white">123 Tech Avenue,<br />San Francisco, CA 94107</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-[#E2FF55]/10 rounded-lg mr-4">
                        <Clock className="h-5 w-5 text-[#E2FF55]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Hours</p>
                        <p className="text-white">Monday - Friday: 9am - 6pm<br />Weekend: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-lg">
                  <h2 className="text-2xl font-bold mb-4 text-white">Follow Us</h2>
                  <div className="flex space-x-4">
                    {["Facebook", "Twitter", "Instagram", "YouTube"].map((platform, index) => (
                      <a
                        key={index}
                        href="#"
                        className="p-3 bg-[#E2FF55]/10 rounded-lg hover:bg-[#E2FF55]/20 transition-colors"
                      >
                        <svg
                          className="h-5 w-5 text-[#E2FF55]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          {/* Add respective platform icons */}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
