import React, { useState } from 'react';
import Modal from './Modal';

const AthleteCallout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-primary-text mb-4">
              Ready to Share Your Expertise?
            </h2>
            <p className="text-primary-secondary mb-6">
              Join our community of elite athletes and make a difference in the lives of aspiring athletes while creating a new revenue stream.
            </p>
            <button 
              onClick={openModal}
              className="px-6 py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors self-start"
            >
              Request More Information
            </button>
          </div>
          <div className="md:w-1/2 bg-primary-accent p-8 md:p-12 text-white">
            <h3 className="text-2xl font-semibold mb-6">What You'll Get</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Early access to our platform when we launch</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personalized profile setup assistance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Featured placement to maximize visibility</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Marketing support to help you succeed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Request More Information">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-text mb-1">
              Full Name
            </label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
              placeholder="Your full name"
            />
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
              Key Achievements
            </label>
            <textarea 
              id="achievements" 
              rows={3} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
              placeholder="Brief summary of your athletic achievements"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="questions" className="block text-sm font-medium text-primary-text mb-1">
              Questions or Comments
            </label>
            <textarea 
              id="questions" 
              rows={2} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
              placeholder="Any specific questions you have for us"
            ></textarea>
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Submit Request
            </button>
            <p className="text-xs text-primary-secondary mt-2 text-center">
              We'll be in touch with more information about joining our platform.
            </p>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default AthleteCallout; 