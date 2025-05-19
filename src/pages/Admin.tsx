
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { verifyAdmin, getContactSubmissions } from '@/lib/api';
import { Submission } from '@/lib/types';

const Admin: React.FC = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Authenticate using the API utility
      const success = await verifyAdmin(password);

      if (!success) {
        throw new Error('Authentication failed');
      }

      setIsAuthenticated(true);
      await fetchSubmissions();
      
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Authentication Failed",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      // Fetch submissions using the API utility
      const data = await getContactSubmissions(password);
      setSubmissions(data);
      
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Failed to load submissions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
            <h1 className="text-3xl font-bold text-white mb-6">Admin Login</h1>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="password" className="text-white text-sm font-medium block">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="bg-white/10 border-white/20 text-white focus:border-blue-400"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></div>
                    Logging in...
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white">Contact Form Submissions</h1>
              <Button
                onClick={() => setIsAuthenticated(false)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Logout
              </Button>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-400 border-t-transparent"></div>
              </div>
            ) : submissions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-blue-400">Name</th>
                      <th className="py-3 px-4 text-blue-400">Email</th>
                      <th className="py-3 px-4 text-blue-400">Company</th>
                      <th className="py-3 px-4 text-blue-400">Plan</th>
                      <th className="py-3 px-4 text-blue-400">Subject</th>
                      <th className="py-3 px-4 text-blue-400">Message</th>
                      <th className="py-3 px-4 text-blue-400">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((submission, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4 text-white">{submission.name}</td>
                        <td className="py-4 px-4 text-white">{submission.email}</td>
                        <td className="py-4 px-4 text-white">{submission.company || '—'}</td>
                        <td className="py-4 px-4 text-white">{submission.plan}</td>
                        <td className="py-4 px-4 text-white">{submission.subject}</td>
                        <td className="py-4 px-4 text-white">
                          <div className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                            {submission.message}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-white">
                          {submission.created_at
                            ? new Date(submission.created_at).toLocaleDateString()
                            : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-10 text-gray-300">
                <p>No submissions found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
