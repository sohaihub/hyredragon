
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { verifyAdmin, getContactSubmissions } from '@/lib/api';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

const Admin: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contactSubmissions, setContactSubmissions] = useState<any[]>([]);
  const [demoRequests, setDemoRequests] = useState<any[]>([]);
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
      setContactSubmissions(data.contacts || []);
      setDemoRequests(data.demoRequests || []);
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

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
    } catch (error) {
      return dateString || 'N/A';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-blue-950">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Admin Dashboard
          </h1>
          
          {!isVerified ? (
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 max-w-md mx-auto border border-white/10">
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
                    className="bg-white/10 border-white/20 text-white"
                    disabled={isVerifying}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isVerifying}
                >
                  {isVerifying ? "Verifying..." : "Login"}
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Submissions</h2>
                <Button 
                  onClick={fetchSubmissions} 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Refresh Data"}
                </Button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
                <Tabs defaultValue="contacts" className="w-full">
                  <TabsList className="w-full bg-white/5">
                    <TabsTrigger value="contacts" className="flex-1">Contact Form ({contactSubmissions.length})</TabsTrigger>
                    <TabsTrigger value="demos" className="flex-1">Demo Requests ({demoRequests.length})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="contacts" className="p-0">
                    {contactSubmissions.length > 0 ? (
                      <div className="overflow-x-auto">
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
                                  {formatDate(submission.created_at)}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.Name}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.Email}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.Company || 'N/A'}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.Plan || 'N/A'}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {submission.Subject || 'N/A'}
                                </td>
                                <td className="px-4 py-4 text-sm max-w-xs truncate">
                                  {submission.Message || 'N/A'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-8 text-center text-gray-300">
                        {isLoading ? 'Loading contact submissions...' : 'No contact form submissions found'}
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="demos" className="p-0">
                    {demoRequests.length > 0 ? (
                      <div className="overflow-x-auto">
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
                                  {formatDate(request.created_at)}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.first_name} {request.last_name}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.email}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.phone}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.company}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.job_title}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                  {request.company_size}
                                </td>
                                <td className="px-4 py-4 text-sm max-w-xs truncate">
                                  {request.message || 'N/A'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-8 text-center text-gray-300">
                        {isLoading ? 'Loading demo requests...' : 'No demo requests found'}
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
              
              <p className="mt-6 text-sm text-gray-400 text-center">
                For security reasons, please log out when you're done. <br />
                <button 
                  onClick={() => setIsVerified(false)} 
                  className="text-blue-400 hover:underline mt-2"
                >
                  Log Out
                </button>
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
