import React from 'react';

interface SafetyPointProps {
  title: string;
  description: string;
}

const SafetyPoint: React.FC<SafetyPointProps> = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h4 className="flex items-center text-lg font-semibold text-primary-text mb-1">
        <svg className="w-5 h-5 mr-2 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        {title}
      </h4>
      <p className="text-primary-secondary ml-7">{description}</p>
    </div>
  );
};

const Safety: React.FC = () => {
  const athleteSafety = [
    {
      title: 'Verification',
      description: 'Rigorous process to verify athlete identity and professional credentials.'
    },
    {
      title: 'Moderation',
      description: 'AI and human moderation to filter abusive or inappropriate messages before they reach the athlete.'
    },
    {
      title: 'Blocking/Reporting',
      description: 'Easy tools for athletes to block users or report issues.'
    },
    {
      title: 'Anonymity Controls',
      description: 'Allow athletes control over how much personal detail is shared.'
    },
    {
      title: 'Communication Funnel',
      description: 'All communication stays within the app. No sharing of personal contact info.'
    },
    {
      title: 'Time Management',
      description: 'Tools for athletes to set availability, limit interaction numbers, and use canned responses for common questions.'
    }
  ];

  const userSafety = [
    {
      title: 'Age Verification & Parental Consent',
      description: 'Strict mechanisms for under-18s. Full compliance with COPPA, GDPR and other relevant regulations.'
    },
    {
      title: 'Clear Guidelines',
      description: 'Define what advice can/cannot be given. Athletes are mentors/advisors, not certified coaches (unless they are).'
    },
    {
      title: 'Reporting',
      description: 'Users can report inappropriate athlete behaviour or content at any time.'
    },
    {
      title: 'Disclaimers',
      description: 'Clear disclaimers that advice is for informational/inspirational purposes and not a substitute for professional coaching or medical care.'
    },
    {
      title: 'Data Privacy',
      description: 'Secure handling of user data with industry-standard encryption and privacy protections.'
    }
  ];

  return (
    <section id="safety" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Safety & Trust</h2>
          <p className="text-xl text-primary-secondary max-w-3xl mx-auto">
            We prioritise the safety of everyone on our platform with comprehensive protections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-accent text-white flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-text">Athlete Safety</h3>
            </div>
            <div>
              {athleteSafety.map((point, index) => (
                <SafetyPoint 
                  key={index}
                  title={point.title}
                  description={point.description}
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-accent text-white flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-text">User Safety</h3>
            </div>
            <div>
              {userSafety.map((point, index) => (
                <SafetyPoint 
                  key={index}
                  title={point.title}
                  description={point.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white px-6 py-4 rounded-lg border border-primary-accent border-opacity-30">
            <p className="text-primary-text font-medium">
              We are committed to creating a <span className="text-primary-accent font-bold">safe environment</span> where meaningful connections can flourish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety; 