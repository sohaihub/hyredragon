
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Password strength indicator
  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, text: '' };
    if (password.length < 6) return { strength: 1, text: 'Weak' };
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    const texts = ['', 'Weak', 'Moderate', 'Good', 'Strong'];
    const colors = ['', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
    
    return { 
      strength: strength + 1, 
      text: texts[strength + 1],
      color: colors[strength + 1]
    };
  };

  const strengthData = getPasswordStrength(newPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setSuccess(false);
    setError(null);
    
    // Validation
    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would call an API to change the password
      // For demonstration purposes, we'll simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear form and show success
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setSuccess(true);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background circular gradients */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>

      <Header />

      <main className="flex-grow relative z-10 pt-24">
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto">
              <div className="bg-[#080822]/80 rounded-2xl border border-gray-800 p-8">
                <h1 className="text-2xl font-bold text-white mb-6">Change Password</h1>
                
                {success && (
                  <div className="mb-6 bg-[#E2FF55]/10 border border-[#E2FF55]/30 text-[#E2FF55] p-4 rounded-lg flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>Password changed successfully!</span>
                  </div>
                )}
                
                {error && (
                  <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="current-password" className="text-sm font-medium text-gray-300">
                        Current Password
                      </label>
                      <Input
                        id="current-password"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                        className="bg-[#0F103E] border-gray-700 focus:border-[#E2FF55] text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="new-password" className="text-sm font-medium text-gray-300">
                        New Password
                      </label>
                      <Input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="bg-[#0F103E] border-gray-700 focus:border-[#E2FF55] text-white"
                      />
                      
                      {newPassword && (
                        <div className="mt-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-400">Password strength:</span>
                            <span className={`text-xs ${
                              strengthData.strength <= 2 ? 'text-red-400' : 
                              strengthData.strength === 3 ? 'text-yellow-400' : 
                              'text-green-400'
                            }`}>
                              {strengthData.text}
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${strengthData.color}`} 
                              style={{ width: `${strengthData.strength * 25}%` }}
                            />
                          </div>
                          <div className="mt-1 text-xs text-gray-400">
                            Use at least 8 characters with uppercase, numbers and symbols.
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="confirm-password" className="text-sm font-medium text-gray-300">
                        Confirm New Password
                      </label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="bg-[#0F103E] border-gray-700 focus:border-[#E2FF55] text-white"
                      />
                      
                      {confirmPassword && newPassword !== confirmPassword && (
                        <p className="text-xs text-red-400 mt-1">
                          Passwords do not match
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="mt-6 w-full bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Changing Password...' : 'Change Password'}
                  </Button>
                </form>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-sm text-gray-400">
                  Having trouble? <a href="/contact" className="text-[#E2FF55] hover:underline">Contact Support</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChangePassword;
