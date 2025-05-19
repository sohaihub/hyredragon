
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { verifyAdmin, getContactSubmissions } from '@/lib/api';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';
import { Loader2, RefreshCw } from 'lucide-react';

const Admin: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contactSubmissions, setContactSubmissions] = useState<any[]>([]);
  const [demoRequests, setDemoRequests] = useState<any[]>([]);
  const [newsletterSubscriptions, setNewsletterSubscriptions] = useState<any[]>([]);
  const { toast } = useToast();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password) {
      toast({
        title: "Error",
        description: "Please enter the admin password",
        variant: "destructive",
      });
      return;
    }
    
    setIsVerifying(true);
    
    try {
      const verified = await verifyAdmin(password);
      
      if (verified) {
        setIsVerified(true);
        fetchSubmissions();
        toast({
          title: "Success",
          description: "Admin login successful",
        });
      } else {
        toast({
          title: "Access Denied",
          description: "Incorrect password",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error verifying admin:', error);
      toast({
        title: "Error",
        description: "Failed to verify admin credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const fetchSubmissions = async () => {
    setIsLoading(true);
    
    try {
      const data = await getContactSubmissions(password);
      console.log("Fetched data:", data); // Debug logging
      
      // Format and process contact submissions
      const formattedContacts = data.contact?.map((item: any) => ({
        ...item,
        formattedDate: formatDate(item.created_at)
      })) || [];
      
      // Format and process demo requests
      const formattedDemos = data.demos?.map((item: any) => ({
        ...item,
        formattedDate: formatDate(item.created_at)
      })) || [];
      
      // Format and process newsletter subscriptions
      const formattedNewsletters = data.newsletters?.map((item: any) => ({
        ...item,
        formattedDate: formatDate(item.subscribed_at)
      })) || [];
      
      setContactSubmissions(formattedContacts);
      setDemoRequests(formattedDemos);
      setNewsletterSubscriptions(formattedNewsletters);
      
      toast({
        title: "Data Refreshed",
        description: `${formattedContacts.length} contact submissions, ${formattedDemos.length} demo requests, and ${formattedNewsletters.length} newsletter subscriptions loaded.`
      });
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Failed to fetch submissions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    try {
      return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
    } catch (error) {
      return 'Invalid Date';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-blue-950">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-neon-green/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-neon-purple/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-neon-green/5 blur-2xl"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-300">Manage contact and demo request submissions</p>
          </div>
          
          {!isVerified ? (
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-md mx-auto shadow-xl">
              <h2 className="text-xl font-medium text-white mb-6">Admin Login</h2>
              
              <form onSubmit={handleVerify} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter admin password"
                    className="bg-white/5 border-white/10 text-white"
                    disabled={isVerifying}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90"
                  disabled={isVerifying}
                >
                  {isVerifying ? (
                    <div className="flex items-center">
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      <span>Verifying...</span>
                    </div>
                  ) : "Login"}
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl font-bold text-white">Submissions Dashboard</h2>
                <Button 
                  onClick={fetchSubmissions} 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      <span>Loading...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      <span>Refresh Data</span>
                    </div>
                  )}
                </Button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg">
                <Tabs defaultValue="contacts" className="w-full">
                  <TabsList className="w-full bg-white/5">
                    <TabsTrigger value="contacts" className="flex-1 text-white data-[state=active]:bg-[#E2FF55]/10 data-[state=active]:text-[#E2FF55]">
                      Contact Form ({contactSubmissions.length})
                    </TabsTrigger>
                    <TabsTrigger value="demos" className="flex-1 text-white data-[state=active]:bg-[#E2FF55]/10 data-[state=active]:text-[#E2FF55]">
                      Demo Requests ({demoRequests.length})
                    </TabsTrigger>
                    <TabsTrigger value="newsletters" className="flex-1 text-white data-[state=active]:bg-[#E2FF55]/10 data-[state=active]:text-[#E2FF55]">
                      Newsletter Subscribers ({newsletterSubscriptions.length})
                    </TabsTrigger>
                  </TabsList>
                  
                  {/* Contact Form Submissions Tab */}
                  <TabsContent value="contacts" className="p-0">
                    <div className="overflow-x-auto">
                      {contactSubmissions.length > 0 ? (
                        <table className="w-full">
                          <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Company</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plan</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subject</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            {contactSubmissions.map((submission, index) => (
                              <tr key={index} className="text-gray-100 hover:bg-white/5">
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.formattedDate}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.name}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.email}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.company || 'N/A'}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.plan || submission["select_plan"] || 'N/A'}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.subject || 'N/A'}
                                </td>
                                <td className="px-4 py-4 text-sm max-w-xs truncate">
                                  {submission.message || 'N/A'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className="p-8 text-center text-gray-300">
                          {isLoading ? (
                            <div className="flex justify-center items-center space-x-2">
                              <Loader2 className="h-5 w-5 animate-spin text-[#E2FF55]" />
                              <span>Loading contact submissions...</span>
                            </div>
                          ) : 'No contact form submissions found'}
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* Demo Requests Tab */}
                  <TabsContent value="demos" className="p-0">
                    <div className="overflow-x-auto">
                      {demoRequests.length > 0 ? (
                        <table className="w-full">
                          <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Company</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Job Title</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Company Size</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            {demoRequests.map((request, index) => (
                              <tr key={index} className="text-gray-100 hover:bg-white/5">
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.formattedDate}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.first_name} {request.last_name}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.email}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.phone || 'N/A'}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.company || 'N/A'}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.job_title || 'N/A'}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.company_size || 'N/A'}
                                </td>
                                <td className="px-4 py-4 text-sm max-w-xs truncate">
                                  {request.message || 'N/A'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className="p-8 text-center text-gray-300">
                          {isLoading ? (
                            <div className="flex justify-center items-center space-x-2">
                              <Loader2 className="h-5 w-5 animate-spin text-[#E2FF55]" />
                              <span>Loading demo requests...</span>
                            </div>
                          ) : 'No demo requests found'}
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* Newsletter Subscribers Tab */}
                  <TabsContent value="newsletters" className="p-0">
                    <div className="overflow-x-auto">
                      {newsletterSubscriptions.length > 0 ? (
                        <table className="w-full">
                          <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            {newsletterSubscriptions.map((subscriber, index) => (
                              <tr key={index} className="text-gray-100 hover:bg-white/5">
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {subscriber.formattedDate}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {subscriber.email}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${subscriber.status === 'active' ? 'bg-green-100 text-green-800' : 
                                    subscriber.status === 'unsubscribed' ? 'bg-red-100 text-red-800' : 
                                    'bg-yellow-100 text-yellow-800'}`}>
                                    {subscriber.status || 'unknown'}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className="p-8 text-center text-gray-300">
                          {isLoading ? (
                            <div className="flex justify-center items-center space-x-2">
                              <Loader2 className="h-5 w-5 animate-spin text-[#E2FF55]" />
                              <span>Loading newsletter subscriptions...</span>
                            </div>
                          ) : 'No newsletter subscribers found'}
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
                <p className="text-sm text-gray-400 text-center sm:text-left">
                  Showing all submissions from contact forms, demo requests, and newsletter subscriptions
                </p>
                <button 
                  onClick={() => setIsVerified(false)} 
                  className="text-[#E2FF55] hover:text-[#E2FF55]/80 hover:underline flex items-center"
                >
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
