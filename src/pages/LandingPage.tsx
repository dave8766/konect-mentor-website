import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-background flex flex-col">
      <header className="py-4 px-6 md:px-12 flex justify-center items-center bg-white shadow-sm">
        <div>
          <img src="/konect-logo.jpeg" alt="Konect" className="h-12" />
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-8">
          Welcome to Konect
        </h1>
        <p className="text-xl text-primary-secondary max-w-2xl mb-12">
          The platform connecting elite athletes with aspiring athletes for mentorship, advice, and inspiration.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary-text mb-8">I am an...</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Elite Athlete Card */}
          <Link 
            to="/athlete" 
            className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105 border-2 border-transparent hover:border-primary-accent"
          >
            <div className="w-20 h-20 bg-primary-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-primary-accent">🏆</span>
            </div>
            <h3 className="text-2xl font-bold text-primary-text mb-4">Elite Athlete</h3>
            <p className="text-primary-secondary mb-6">
              Share your expertise, mentor aspiring athletes, and create an additional revenue stream while building your personal brand.
            </p>
            <button className="px-6 py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors w-full">
              Continue as Elite Athlete
            </button>
          </Link>
          
          {/* User Card */}
          <Link 
            to="/user" 
            className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105 border-2 border-transparent hover:border-primary-accent"
          >
            <div className="w-20 h-20 bg-primary-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-primary-text mb-4">Aspiring Athlete</h3>
            <p className="text-primary-secondary mb-6">
              Connect with elite athletes for personalised advice, exclusive content, and mentorship to elevate your performance.
            </p>
            <button className="px-6 py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors w-full">
              Continue as Aspiring Athlete
            </button>
          </Link>
        </div>
      </main>
      
      <footer className="py-6 text-center text-primary-secondary bg-white mt-auto">
        <p>© {new Date().getFullYear()} Konect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage; 