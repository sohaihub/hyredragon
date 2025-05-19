import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Loader2, RefreshCw, FileDown, User, Mail, Building, Calendar, MessageSquare } from 'lucide-react';
import { responseManager } from '@/lib/responses'; // Import our local storage manager

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
    
    if (password !== 'admin123') { // Simple password verification
      toast({
        title: "Access Denied",
        description: "Incorrect password",
        variant: "destructive",
      });
      return;
    }
    
    setIsVerified(true);
    fetchSubmissions();
    toast({
      title: "Success",
      description: "Admin login successful",
    });
  };

  const fetchSubmissions = async () => {
    setIsLoading(true);
    
    try {
      // Get data from local storage using our response manager
      const contacts = responseManager.getResponsesByType('contact');
      const demos = responseManager.getResponsesByType('demo');
      const newsletters = responseManager.getResponsesByType('newsletter');
      
      // Format dates
      const formattedContacts = contacts.map(item => ({
        ...item,
        formattedDate: formatDate(item.timestamp)
      }));
      
      const formattedDemos = demos.map(item => ({
        ...item,
        formattedDate: formatDate(item.timestamp)
      }));
      
      const formattedNewsletters = newsletters.map(item => ({
        ...item,
        formattedDate: formatDate(item.timestamp)
      }));
      
      setContactSubmissions(formattedContacts);
      setDemoRequests(formattedDemos);
      setNewsletterSubscriptions(formattedNewsletters);
      
      toast({
        title: "Data Refreshed",
        description: `${formattedContacts.length} contacts, ${formattedDemos.length} demos, ${formattedNewsletters.length} newsletters loaded.`
      });
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Failed to fetch submissions",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportCsv = () => {
    try {
      setExportLoading(true);
      const allData = {
        contacts: contactSubmissions,
        demos: demoRequests,
        newsletters: newsletterSubscriptions
      };
      
      // Create CSV content
      const csvContent = "data:text/csv;charset=utf-8," 
        + Object.entries(allData).map(([type, data]) => 
            `${type}\n${Object.keys(data[0] || {}).join(",")}\n`
            + data.map(row => Object.values(row).join(",")).join("\n")
          ).join("\n\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `hyredragon_submissions_${format(new Date(), 'yyyy-MM-dd')}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Export Successful",
        description: "All submissions exported to CSV"
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
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isVerified]);

  // Rest of your JSX remains the same, just update the data source references
  // ... (Keep all the JSX code from your original file)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-blue-950">
      {/* Your existing JSX code remains exactly the same */}
    </div>
  );
};

export default Admin;