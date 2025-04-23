import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AthleteCallout from '../components/AthleteCallout';
import Safety from '../components/Safety';
import Modal from '../components/Modal';

const AthletePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-primary-background">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight mb-6">
                  Share Your Expertise & Grow Your Brand
                </h1>
                <h2 className="text-xl md:text-2xl text-primary-secondary mb-8">
                  Join Konect as an Elite Athlete and mentor the next generation
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent bg-opacity-10 flex items-center justify-center mr-4 text-primary-accent">
                      <span className="text-xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text">Monetise Your Knowledge</h3>
                      <p className="text-primary-secondary">Create a new revenue stream by sharing your expertise and experience with aspiring athletes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent bg-opacity-10 flex items-center justify-center mr-4 text-primary-accent">
                      <span className="text-xl">🔍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text">Grow Your Visibility</h3>
                      <p className="text-primary-secondary">Build your personal brand and expand your audience beyond traditional social media.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent bg-opacity-10 flex items-center justify-center mr-4 text-primary-accent">
                      <span className="text-xl">⏱️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text">Flexible Time Commitment</h3>
                      <p className="text-primary-secondary">Set your own availability and manage interactions in a way that fits your schedule.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-accent bg-opacity-10 flex items-center justify-center mr-4 text-primary-accent">
                      <span className="text-xl">❤️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text">Give Back to Your Sport</h3>
                      <p className="text-primary-secondary">Help develop the next generation of athletes and create a lasting impact on your sport.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-primary-text mb-6">How It Works for Athletes</h3>
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent text-white flex items-center justify-center mr-4 font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-text">Apply & Verify</h4>
                        <p className="text-primary-secondary">Complete our application and verification process to join as an elite athlete.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent text-white flex items-center justify-center mr-4 font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-text">Create Your Profile</h4>
                        <p className="text-primary-secondary">Build your profile with your expertise, achievements, and the types of mentorship you offer.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent text-white flex items-center justify-center mr-4 font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-text">Set Your Terms</h4>
                        <p className="text-primary-secondary">Choose your pricing, availability, and the interaction types that work best for you.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent text-white flex items-center justify-center mr-4 font-semibold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-text">Start Mentoring</h4>
                        <p className="text-primary-secondary">Begin connecting with aspiring athletes and sharing your knowledge while earning income.</p>
                      </div>
                    </li>
                  </ol>
                  
                  <div className="mt-8">
                    <button 
                      onClick={openModal}
                      className="w-full py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                    >
                      Apply Now as an Elite Athlete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <AthleteCallout />
        
        <Safety />
      </main>
      
      <Footer />
      
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Apply as an Elite Athlete">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-primary-text mb-1">
                First Name
              </label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
                placeholder="Your first name"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-primary-text mb-1">
                Last Name
              </label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
                placeholder="Your last name"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
              placeholder="Your email address"
            />
          </div>
          
          <div>
            <label htmlFor="sport" className="block text-sm font-medium text-primary-text mb-1">
              Your Sport
            </label>
            <input 
              type="text" 
              id="sport" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
              placeholder="E.g., Swimming, Tennis, etc."
            />
          </div>
          
          <div>
            <label htmlFor="achievements" className="block text-sm font-medium text-primary-text mb-1">
              Athletic Achievements
            </label>
            <textarea 
              id="achievements" 
              rows={3} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
              placeholder="List your key athletic achievements or career highlights"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="socialMedia" className="block text-sm font-medium text-primary-text mb-1">
              Social Media Profiles
            </label>
            <textarea 
              id="socialMedia" 
              rows={2} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
              placeholder="E.g., Instagram: @yourhandle, Twitter: @yourhandle"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-primary-text mb-1">
              Why do you want to join?
            </label>
            <textarea 
              id="motivation" 
              rows={2} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
              placeholder="Tell us briefly why you're interested in joining our platform"
            ></textarea>
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Submit Application
            </button>
            <p className="text-xs text-primary-secondary mt-2 text-center">
              Our team will review your application and contact you within 48 hours.
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AthletePage; 