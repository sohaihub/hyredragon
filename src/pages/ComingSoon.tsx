import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A29] text-white">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-300 mb-8">This page is under construction. Stay tuned for updates!</p>
      <Link to="/" className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-6 py-3 rounded-full">
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
