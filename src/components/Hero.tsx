import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the email submission
    console.log('Email submitted:', email);
    alert('Thanks for your interest! We will notify you when we launch.');
    setEmail('');
  };

  return (
    <section className="bg-primary-background py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight mb-4">
            Connect Directly with Your Sporting Heroes
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-secondary mb-8">
            Get personalised advice and exclusive content from verified elite athletes
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-primary-text mb-4">Be the First to Know When We Launch</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-primary-secondary border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Notify Me
              </button>
            </form>
            <p className="mt-4 text-xs text-primary-secondary">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="bg-gray-200 w-full aspect-[4/3] rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-primary-secondary">
                Athlete-mentee interaction image
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-accent text-white text-sm font-medium py-2 px-4 rounded-md">
              Verified Elite Athletes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 