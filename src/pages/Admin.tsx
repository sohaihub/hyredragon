
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSheetData } from '@/lib/sheets-service';

interface FormSubmission {
  name: string;
  email: string;
  company?: string;
  plan: string;
  subject: string;
  message: string;
}

const Admin: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem('admin-auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchSubmissions();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication for demo purposes
    // In a real app, this would verify against a secure backend
    if (email === 'admin@example.com' && password === 'password') {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
      fetchSubmissions();
      
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Authentication failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-auth');
    navigate('/admin');
  };

  const fetchSubmissions = async () => {
    setIsLoading(true);
    
    try {
      // Fetch data from Google Sheet
      const data = await getSheetData();
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Failed to load submissions",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCsv = () => {
    // Create CSV content
    const headers = ['Name', 'Email', 'Company', 'Plan', 'Subject', 'Message'];
    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        `"${sub.name.replace(/"/g, '""')}"`,
        `"${sub.email.replace(/"/g, '""')}"`,
        `"${sub.company?.replace(/"/g, '""') || ''}"`,
        `"${sub.plan.replace(/"/g, '""')}"`,
        `"${sub.subject.replace(/"/g, '""')}"`,
        `"${sub.message.replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0A0A29] text-white">
        <Header />
        
        <main className="flex-grow flex items-center justify-center py-12">
          <div className="w-full max-w-md p-8 space-y-8 bg-[#0F103E]/70 rounded-xl shadow-lg border border-white/10">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">Admin Login</h1>
              <p className="mt-2 text-gray-300">Sign in to access the dashboard</p>
            </div>
            
            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 bg-[#141824] border-gray-700 focus:border-[#E2FF55] text-white"
                    placeholder="admin@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 bg-[#141824] border-gray-700 focus:border-[#E2FF55] text-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-[#E2FF55] hover:bg-[#c8e03c] text-[#0A0A29] font-medium">
                Sign in
              </Button>
            </form>
            
            <div className="mt-4 text-sm text-gray-400 text-center">
              <p>For demo: email: admin@example.com / password: password</p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29] text-white">
      <Header />
      
      <main className="flex-grow py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Contact Submissions</h1>
          <div className="space-x-4">
            <Button 
              onClick={downloadCsv}
              className="bg-[#E2FF55] hover:bg-[#c8e03c] text-[#0A0A29] font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CSV
            </Button>
            
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="border-white/20 hover:bg-white/10 text-white"
            >
              Log out
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin w-10 h-10 border-4 border-[#E2FF55] border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-16 bg-[#0F103E]/50 rounded-lg border border-white/10">
            <h3 className="text-xl font-medium text-gray-300">No submissions yet</h3>
            <p className="mt-2 text-gray-400">Submissions from the contact form will appear here.</p>
          </div>
        ) : (
          <div className="bg-[#0F103E]/70 rounded-xl shadow-lg overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-gray-300">Name</TableHead>
                    <TableHead className="text-gray-300">Email</TableHead>
                    <TableHead className="text-gray-300">Company</TableHead>
                    <TableHead className="text-gray-300">Plan</TableHead>
                    <TableHead className="text-gray-300">Subject</TableHead>
                    <TableHead className="text-gray-300">Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission, index) => (
                    <TableRow key={index} className="border-white/10 hover:bg-[#1A1F2C]">
                      <TableCell className="font-medium text-white">{submission.name}</TableCell>
                      <TableCell className="text-gray-200">{submission.email}</TableCell>
                      <TableCell className="text-gray-200">{submission.company || '-'}</TableCell>
                      <TableCell className="text-gray-200">{submission.plan}</TableCell>
                      <TableCell className="text-gray-200">{submission.subject}</TableCell>
                      <TableCell className="max-w-xs truncate text-gray-200">
                        {submission.message.length > 100
                          ? `${submission.message.substring(0, 100)}...`
                          : submission.message}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
