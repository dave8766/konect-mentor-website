import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex">
      <div className="mr-6">
        <div className="w-12 h-12 rounded-full bg-primary-accent text-white flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-primary-text mb-2">{title}</h3>
        <p className="text-primary-secondary">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Sign Up For Updates',
      description: 'Register your interest to be the first to know when we launch and get early access.',
    },
    {
      number: 2,
      title: 'Discover Athletes',
      description: 'Browse through our directory of verified elite athletes from various sports.',
    },
    {
      number: 3,
      title: 'Connect & Learn',
      description: 'Engage directly through Q&As, mentorship sessions, and exclusive content.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-6 md:px-12 bg-primary-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">How It Will Work</h2>
          <p className="text-xl text-primary-secondary max-w-3xl mx-auto">
            A simple process designed to connect you with sporting excellence
          </p>
        </div>
        <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-around lg:px-12">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 