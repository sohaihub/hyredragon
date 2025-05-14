import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast({
        title: "Missing fields",
        description: "Please enter your email and password.",
        variant: "destructive",
      })
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Success",
        description: "Logged in successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#080822] text-white">
      <div className="w-full max-w-md px-4">
        <h1 className="text-2xl font-bold mb-4">Login to HyrDragon</h1>
        <p className="text-sm text-gray-400 mb-6">
          Enter your credentials to access your account
        </p>
        
        <form className="w-full bg-[#1a1a3f] p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#2c2c54] text-white focus:outline-none focus:ring-2 focus:ring-[#E2FF55]"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#2c2c54] text-white focus:outline-none focus:ring-2 focus:ring-[#E2FF55]"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="mt-1 mb-4 text-right">
            <Link to="/forgot-password" className="text-[#E2FF55] text-sm hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-[#E2FF55] text-[#080822] hover:bg-[#E2FF55]/90 px-4 py-2 rounded-md font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
