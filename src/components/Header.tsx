import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white shadow-sm">
      <div className="font-bold text-xl text-primary-text">
        <Link to="/">
          <img src="/konect-logo.jpeg" alt="Konect" className="h-10" />
        </Link>
      </div>
      <nav>
        <ul className="flex flex-wrap items-center space-x-2 md:space-x-6">
          <li><Link to="/athletes" className="text-primary-secondary hover:text-primary-text transition-colors">Browse Athletes</Link></li>
          <li><a href="#features" className="text-primary-secondary hover:text-primary-text transition-colors">Features</a></li>
          <li><a href="#how-it-works" className="text-primary-secondary hover:text-primary-text transition-colors">How It Works</a></li>
          <li><a href="#safety" className="text-primary-secondary hover:text-primary-text transition-colors">Safety</a></li>
          <li><Link to="/athlete" className="py-2 px-4 bg-primary-accent text-white rounded-md hover:bg-opacity-90 transition-colors">For Athletes</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 