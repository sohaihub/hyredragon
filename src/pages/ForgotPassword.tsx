import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Call the backend API to send the password reset email
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('If your email is registered, you will receive a password reset link shortly.');
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#080822] text-white">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <p className="text-sm text-gray-400 mb-6 text-center">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#1a1a3f] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#2c2c54] text-white focus:outline-none focus:ring-2 focus:ring-[#E2FF55]"
            placeholder="Enter your email"
          />
        </div>
        {message && <p className="text-center text-sm mb-4">{message}</p>}
        <Button
          type="submit"
          className="w-full bg-[#E2FF55] text-[#080822] hover:bg-[#E2FF55]/90 px-4 py-2 rounded-md font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
