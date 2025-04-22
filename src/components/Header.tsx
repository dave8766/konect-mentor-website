import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white shadow-sm">
      <div className="font-bold text-xl text-primary-text">
        <img src="/konect-logo.jpeg" alt="Konect" className="h-10" />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="text-primary-secondary hover:text-primary-text transition-colors">Features</a></li>
          <li><a href="#how-it-works" className="text-primary-secondary hover:text-primary-text transition-colors">How It Works</a></li>
          <li><a href="#safety" className="text-primary-secondary hover:text-primary-text transition-colors">Safety</a></li>
          <li><a href="#athletes" className="py-2 px-4 bg-primary-accent text-white rounded-md hover:bg-opacity-90 transition-colors">For Athletes</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 