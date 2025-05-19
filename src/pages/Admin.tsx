
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { verifyAdmin, getContactSubmissions, exportSubmissionsToCsv } from '@/lib/api';
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
  }, [isVerified, password]);

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
            <p className="text-gray-300">Manage form submissions</p>
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
            <div className="space-y-6">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl font-bold text-white">Submissions Dashboard</h2>
                <div className="flex gap-2">
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
                        <Table>
                          <TableHeader>
                            <TableRow className="border-white/10 bg-white/5">
                              <TableHead className="text-gray-300">Date</TableHead>
                              <TableHead className="text-gray-300">Name</TableHead>
                              <TableHead className="text-gray-300">Email</TableHead>
                              <TableHead className="text-gray-300">Company</TableHead>
                              <TableHead className="text-gray-300">Subject</TableHead>
                              <TableHead className="text-gray-300">Message</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="divide-y divide-white/10">
                            {contactSubmissions.map((submission) => (
                              <TableRow key={submission.id} className="text-gray-100 hover:bg-white/5 border-white/10">
                                <TableCell className="font-medium">
                                  {submission.formattedDate}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <User className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                    {submission.name}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                    {submission.email}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  {submission.company ? (
                                    <div className="flex items-center">
                                      <Building className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                      {submission.company}
                                    </div>
                                  ) : 'N/A'}
                                </TableCell>
                                <TableCell>{submission.subject}</TableCell>
                                <TableCell className="max-w-xs truncate">
                                  <div className="flex items-center">
                                    <MessageSquare className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                    <span title={submission.message}>
                                      {submission.message.length > 50 
                                        ? `${submission.message.substring(0, 50)}...` 
                                        : submission.message}
                                    </span>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
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
                        <Table>
                          <TableHeader>
                            <TableRow className="border-white/10 bg-white/5">
                              <TableHead className="text-gray-300">Date</TableHead>
                              <TableHead className="text-gray-300">Name</TableHead>
                              <TableHead className="text-gray-300">Email</TableHead>
                              <TableHead className="text-gray-300">Company</TableHead>
                              <TableHead className="text-gray-300">Job Title</TableHead>
                              <TableHead className="text-gray-300">Size</TableHead>
                              <TableHead className="text-gray-300">Preferred Date</TableHead>
                              <TableHead className="text-gray-300">Message</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="divide-y divide-white/10">
                            {demoRequests.map((request) => (
                              <TableRow key={request.id} className="text-gray-100 hover:bg-white/5 border-white/10">
                                <TableCell className="font-medium">
                                  {request.formattedDate}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <User className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                    {request.firstName} {request.lastName}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                    {request.email}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <Building className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                    {request.company}
                                  </div>
                                </TableCell>
                                <TableCell>{request.jobTitle}</TableCell>
                                <TableCell>{request.companySize}</TableCell>
                                <TableCell>
                                  {request.preferredDate ? (
                                    <div className="flex items-center">
                                      <Calendar className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                      {request.preferredDate}
                                    </div>
                                  ) : 'Not specified'}
                                </TableCell>
                                <TableCell className="max-w-xs truncate">
                                  {request.message ? (
                                    <div className="flex items-center">
                                      <MessageSquare className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                      <span title={request.message}>
                                        {request.message.length > 30 
                                          ? `${request.message.substring(0, 30)}...` 
                                          : request.message}
                                      </span>
                                    </div>
                                  ) : 'N/A'}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
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
                        <Table>
                          <TableHeader>
                            <TableRow className="border-white/10 bg-white/5">
                              <TableHead className="text-gray-300">Date</TableHead>
                              <TableHead className="text-gray-300">Email</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="divide-y divide-white/10">
                            {newsletterSubscriptions.map((subscriber) => (
                              <TableRow key={subscriber.id} className="text-gray-100 hover:bg-white/5 border-white/10">
                                <TableCell className="font-medium">
                                  {subscriber.formattedDate}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4 text-[#E2FF55]" />
                                    {subscriber.email}
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
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
                  All data is stored locally in your browser's localStorage
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
