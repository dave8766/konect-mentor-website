import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Safety from '../components/Safety';
import HowItWorks from '../components/HowItWorks';

const UserPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-background">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight mb-6">
                  Learn Directly From Elite Athletes
                </h1>
                <h2 className="text-xl md:text-2xl text-primary-secondary mb-8">
                  Get personalised advice, feedback and mentorship from verified Olympians and professional athletes
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent bg-opacity-10 flex items-center justify-center mr-4 text-primary-accent">
                      <span className="text-xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text">Expert Guidance</h3>
                      <p className="text-primary-secondary">Get advice from athletes who've reached the pinnacle of your sport.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent bg-opacity-10 flex items-center justify-center mr-4 text-primary-accent">
                      <span className="text-xl">📹</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text">Video Analysis</h3>
                      <p className="text-primary-secondary">Submit videos of your technique and receive professional feedback.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent bg-opacity-10 flex items-center justify-center mr-4 text-primary-accent">
                      <span className="text-xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text">Mental Strength</h3>
                      <p className="text-primary-secondary">Learn the mindset techniques that help elite athletes succeed under pressure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent bg-opacity-10 flex items-center justify-center mr-4 text-primary-accent">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text">Direct Access</h3>
                      <p className="text-primary-secondary">Connect with your sporting heroes through text, video calls and exclusive content.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-accent"
                    />
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors whitespace-nowrap"
                    >
                      Join the Waitlist
                    </button>
                  </form>
                  <p className="text-sm text-primary-secondary mt-3">
                    Be the first to know when we launch. No spam, just updates about access.
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-primary-text mb-6">Find Your Perfect Mentor</h3>
                  
                  <div className="space-y-6">
                    <div className="rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                        <div>
                          <h4 className="font-bold text-primary-text">Sarah Johnson</h4>
                          <p className="text-sm text-primary-secondary">Olympic Gold Medallist, Swimming</p>
                        </div>
                      </div>
                      <p className="text-primary-secondary mb-3">
                        "I specialise in stroke technique and race strategy. Let me help you improve your swimming performance."
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-accent font-medium">£45 / session</span>
                        <button className="px-4 py-2 border border-primary-accent text-primary-accent rounded-md hover:bg-primary-accent hover:text-white transition-colors text-sm">
                          View Profile
                        </button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                        <div>
                          <h4 className="font-bold text-primary-text">David Chen</h4>
                          <p className="text-sm text-primary-secondary">Professional Tennis Player</p>
                        </div>
                      </div>
                      <p className="text-primary-secondary mb-3">
                        "Whether you need help with your serve or mental game preparation, I can provide personalised coaching."
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-accent font-medium">£60 / session</span>
                        <button className="px-4 py-2 border border-primary-accent text-primary-accent rounded-md hover:bg-primary-accent hover:text-white transition-colors text-sm">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button className="text-primary-accent font-medium hover:underline">
                      Browse All Athletes →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Features />
        
        <HowItWorks />
        
        <Testimonials />
        
        <Safety />
      </main>
      
      <Footer />
    </div>
  );
};

export default UserPage; 