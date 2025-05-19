
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { verifyAdmin, getContactSubmissions, exportSubmissionsToCsv } from '@/lib/responses';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HydragonLogo from '@/components/HydragonLogo';
import { Loader2, RefreshCw, Download, FileDown, User, Mail, Building, Calendar, MessageSquare } from 'lucide-react';

const Admin: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
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
      const verified = verifyAdmin(password);
      
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
      const data = getContactSubmissions();
      
      // Format and process contact submissions
      const formattedContacts = data.contact?.map((item: any) => ({
        ...item,
        formattedDate: formatDate(item.createdAt)
      })) || [];
      
      // Format and process demo requests
      const formattedDemos = data.demos?.map((item: any) => ({
        ...item,
        formattedDate: formatDate(item.createdAt)
      })) || [];
      
      // Format and process newsletter subscriptions
      const formattedNewsletters = data.newsletters?.map((item: any) => ({
        ...item,
        formattedDate: formatDate(item.subscribedAt)
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

  const handleExportCsv = async () => {
    try {
      setExportLoading(true);
      exportSubmissionsToCsv();
      toast({
        title: "Export Successful",
        description: "All submissions have been exported to CSV"
      });
    } catch (error) {
      console.error('Error exporting to CSV:', error);
      toast({
        title: "Export Failed",
        description: "Could not export data to CSV",
        variant: "destructive"
      });
    } finally {
      setExportLoading(false);
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

  // Set up real-time storage event listener
  useEffect(() => {
    const handleStorageChange = () => {
      if (isVerified) {
        fetchSubmissions();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isVerified]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#080820] to-[#0A0A29]">
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
            <p className="text-gray-300">Manage form submissions</p>
          </div>
          
          {!isVerified ? (
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-md mx-auto shadow-xl">
              <div className="flex justify-center mb-6">
                <HydragonLogo withText={true} size="regular" />
              </div>
              
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
                  <p className="text-xs text-gray-400 mt-2">Default password: admin123</p>
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
            <div className="space-y-6">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl font-bold text-white">Submissions Dashboard</h2>
                <div className="flex gap-2">
                  {/* Updated Refresh Data Button with Neon Theme */}
                  <Button 
                    onClick={fetchSubmissions} 
                    variant="outline" 
                    className="text-[#E2FF55] border-[#E2FF55] hover:bg-[#E2FF55]/10 hover:shadow-[0_0_15px_#E2FF55] transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <Loader2 className="h-4 w-4 animate-spin mr-2 text-[#E2FF55]" />
                        <span>Loading...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <RefreshCw className="h-4 w-4 mr-2 text-[#E2FF55]" />
                        <span>Refresh Data</span>
                      </div>
                    )}
                  </Button>
                  
                  {/* Export to CSV Button */}
                  <Button 
                    onClick={handleExportCsv}
                    className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90"
                    disabled={exportLoading}
                  >
                    {exportLoading ? (
                      <div className="flex items-center">
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        <span>Exporting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <FileDown className="h-4 w-4 mr-2" />
                        <span>Export to CSV</span>
                      </div>
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Tabs for different types of submissions */}
              <Tabs defaultValue="contacts" className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
                <div className="p-4 border-b border-white/10">
                  <TabsList className="bg-white/10 grid grid-cols-3 gap-2">
                    <TabsTrigger value="contacts" className="data-[state=active]:bg-[#E2FF55] data-[state=active]:text-black">
                      Contact Forms
                    </TabsTrigger>
                    <TabsTrigger value="demos" className="data-[state=active]:bg-[#E2FF55] data-[state=active]:text-black">
                      Demo Requests
                    </TabsTrigger>
                    <TabsTrigger value="newsletters" className="data-[state=active]:bg-[#E2FF55] data-[state=active]:text-black">
                      Newsletter Subscriptions
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                {/* Contact Form Submissions */}
                <TabsContent value="contacts" className="p-4">
                  <Table>
                    <TableCaption>Contact form submissions: {contactSubmissions.length} total</TableCaption>
                    <TableHeader>
                      <TableRow className="hover:bg-white/5 border-white/10">
                        <TableHead className="text-white">Date</TableHead>
                        <TableHead className="text-white">Name</TableHead>
                        <TableHead className="text-white">Email</TableHead>
                        <TableHead className="text-white">Company</TableHead>
                        <TableHead className="text-white">Subject</TableHead>
                        <TableHead className="text-white">Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contactSubmissions.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-gray-400 py-8">No contact form submissions yet</TableCell>
                        </TableRow>
                      ) : (
                        contactSubmissions.map((submission) => (
                          <TableRow key={submission.id} className="hover:bg-white/5 border-white/10">
                            <TableCell className="text-gray-300 whitespace-nowrap">{submission.formattedDate}</TableCell>
                            <TableCell className="text-white flex items-center gap-2">
                              <User size={14} className="text-[#E2FF55]" />
                              {submission.name}
                            </TableCell>
                            <TableCell className="text-gray-300">
                              <div className="flex items-center gap-2">
                                <Mail size={14} className="text-[#E2FF55]" />
                                {submission.email}
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-300">
                              <div className="flex items-center gap-2">
                                <Building size={14} className="text-gray-400" />
                                {submission.company || 'N/A'}
                              </div>
                            </TableCell>
                            <TableCell className="text-white">{submission.subject}</TableCell>
                            <TableCell className="text-gray-300 max-w-xs truncate">{submission.message}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
                
                {/* Demo Requests */}
                <TabsContent value="demos" className="p-4">
                  <Table>
                    <TableCaption>Demo requests: {demoRequests.length} total</TableCaption>
                    <TableHeader>
                      <TableRow className="hover:bg-white/5 border-white/10">
                        <TableHead className="text-white">Date</TableHead>
                        <TableHead className="text-white">Name</TableHead>
                        <TableHead className="text-white">Email</TableHead>
                        <TableHead className="text-white">Company</TableHead>
                        <TableHead className="text-white">Job Title</TableHead>
                        <TableHead className="text-white">Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {demoRequests.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-gray-400 py-8">No demo requests yet</TableCell>
                        </TableRow>
                      ) : (
                        demoRequests.map((request) => (
                          <TableRow key={request.id} className="hover:bg-white/5 border-white/10">
                            <TableCell className="text-gray-300 whitespace-nowrap">{request.formattedDate}</TableCell>
                            <TableCell className="text-white flex items-center gap-2">
                              <User size={14} className="text-[#E2FF55]" />
                              {`${request.firstName} ${request.lastName}`}
                            </TableCell>
                            <TableCell className="text-gray-300">
                              <div className="flex items-center gap-2">
                                <Mail size={14} className="text-[#E2FF55]" />
                                {request.email}
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-300">
                              <div className="flex items-center gap-2">
                                <Building size={14} className="text-gray-400" />
                                {request.company}
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-300">{request.jobTitle}</TableCell>
                            <TableCell className="text-gray-300 max-w-xs truncate">{request.message || 'N/A'}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
                
                {/* Newsletter Subscriptions */}
                <TabsContent value="newsletters" className="p-4">
                  <Table>
                    <TableCaption>Newsletter subscriptions: {newsletterSubscriptions.length} total</TableCaption>
                    <TableHeader>
                      <TableRow className="hover:bg-white/5 border-white/10">
                        <TableHead className="text-white">Date</TableHead>
                        <TableHead className="text-white">Email</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {newsletterSubscriptions.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={2} className="text-center text-gray-400 py-8">No newsletter subscriptions yet</TableCell>
                        </TableRow>
                      ) : (
                        newsletterSubscriptions.map((subscription) => (
                          <TableRow key={subscription.id} className="hover:bg-white/5 border-white/10">
                            <TableCell className="text-gray-300 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-gray-400" />
                                {subscription.formattedDate}
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-300">
                              <div className="flex items-center gap-2">
                                <Mail size={14} className="text-[#E2FF55]" />
                                {subscription.email}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
