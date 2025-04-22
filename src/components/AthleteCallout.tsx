import React, { useState } from 'react';

const AthleteCallout: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [athleteEmail, setAthleteEmail] = useState('');
  const [sport, setSport] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the athlete registration submission
    console.log('Athlete registration:', { firstName, lastName, athleteEmail, sport });
    alert('Thanks for your interest! We will contact you with more information soon.');
    setFirstName('');
    setLastName('');
    setAthleteEmail('');
    setSport('');
  };

  const sports = [
    'Select your sport',
    'Athletics',
    'Basketball',
    'Boxing',
    'Cycling',
    'Football',
    'Golf',
    'Gymnastics',
    'Ice Hockey',
    'Rugby',
    'Swimming',
    'Tennis',
    'Triathlon',
    'Volleyball',
    'Weightlifting',
    'Wrestling',
    'Other'
  ];

  return (
    <section id="athletes" className="py-16 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-primary-accent p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Are You an Elite Athlete?</h2>
            <p className="mb-6">
              Join our platform to share your expertise, mentor the next generation, and create an additional revenue stream while building your personal brand.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Monetize your knowledge and experience</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Build your personal brand and following</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Give back to your sport through mentorship</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-primary-text mb-4">Register Your Interest</h3>
            <p className="text-primary-secondary mb-6">
              We're looking for Olympians, professional athletes, and elite coaches to join our platform early. Leave your details and we'll be in touch.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-primary-secondary text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="w-full px-4 py-3 border border-primary-secondary border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-primary-secondary text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-primary-secondary border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="athleteEmail" className="block text-primary-secondary text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  id="athleteEmail"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-primary-secondary border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  value={athleteEmail}
                  onChange={(e) => setAthleteEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="sport" className="block text-primary-secondary text-sm mb-2">Sport</label>
                <select
                  id="sport"
                  className="w-full px-4 py-3 border border-primary-secondary border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent bg-white"
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  required
                >
                  {sports.map((sportOption, index) => (
                    <option key={index} value={index === 0 ? '' : sportOption} disabled={index === 0}>
                      {sportOption}
                    </option>
                  ))}
                </select>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-primary-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Request More Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleteCallout; 