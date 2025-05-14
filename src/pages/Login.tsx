
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import HydragonLogo from '@/components/HydragonLogo';
import { ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: isLogin ? "Login successful!" : "Account created!",
      description: isLogin
        ? "Welcome back to HyrDragon."
        : "Welcome to HyrDragon! Please check your email to verify your account.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background gradients */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E2FF55]/20 blur-3xl pointer-events-none select-none"></div>
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/5 blur-3xl pointer-events-none select-none"></div>

      <div className="p-4 absolute top-0 left-0 z-20">
        <Button
          variant="ghost"
          className="text-gray-300 hover:text-white hover:bg-gray-800"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
      </div>

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full relative z-10">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <HydragonLogo size="lg" withText={true} />
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">
              {isLogin ? "Sign in to your account" : "Create your account"}
            </h1>
            <p className="text-gray-300">
              {isLogin
                ? "Enter your details below to sign in"
                : "Enter your details below to get started"}
            </p>
          </div>

          <div className="bg-[#0A0A29]/60 border border-gray-800 rounded-2xl p-6 md:p-8 backdrop-blur-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    required
                    className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  {isLogin && (
                    <Link
                      to="/coming-soon"
                      className="text-[#7B78FF] hover:text-[#E2FF55] text-xs"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder={
                    isLogin ? "Enter your password" : "Create a password"
                  }
                  required
                  className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                />
              </div>

              {!isLogin && (
                <div className="space-y-1.5">
                  <Label htmlFor="confirmPassword" className="text-white">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    required
                    className="bg-[#080820] border-gray-800 focus:border-[#E2FF55] text-white"
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    className="data-[state=checked]:bg-[#E2FF55] data-[state=checked]:border-[#E2FF55]"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-300 ml-2"
                  >
                    Keep me signed in
                  </label>
                </div>
              )}

              {!isLogin && (
                <div className="flex items-center">
                  <Checkbox
                    id="terms"
                    className="data-[state=checked]:bg-[#E2FF55] data-[state=checked]:border-[#E2FF55]"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-300 ml-2"
                  >
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-[#7B78FF] hover:text-[#E2FF55]"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-[#7B78FF] hover:text-[#E2FF55]"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              )}

              <Button
                type="submit"
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 w-full"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-[#0A0A29] text-gray-400">OR</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-white w-full flex gap-2 items-center justify-center"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Continue with Google
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              {isLogin ? (
                <p className="text-gray-300">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-[#7B78FF] hover:text-[#E2FF55]"
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-gray-300">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-[#7B78FF] hover:text-[#E2FF55]"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
