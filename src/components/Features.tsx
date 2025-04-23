import React, { useState, useEffect } from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center bg-primary-accent bg-opacity-10 text-primary-accent rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary-text mb-2">{title}</h3>
      <p className="text-primary-secondary">{description}</p>
    </div>
  );
};

interface InteractionModelProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  example: string;
}

const InteractionModel: React.FC<InteractionModelProps> = ({ icon, title, description, benefits, example }) => {
  return (
    <div className="w-full h-full flex flex-col p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-primary-accent bg-opacity-10 text-primary-accent rounded-full mr-4 text-2xl">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-primary-text">{title}</h3>
      </div>
      <p className="text-primary-secondary mb-6">{description}</p>
      
      <h4 className="font-semibold text-primary-text mb-3">Benefits:</h4>
      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 mr-2 mt-0.5 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-primary-secondary">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <h4 className="font-semibold text-primary-text mb-2">Example:</h4>
        <div className="bg-gray-50 p-4 rounded-md border border-gray-100 text-primary-secondary italic">
          {example}
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const features = [
    {
      icon: '💬',
      title: 'Direct Q&A',
      description: 'Ask questions and get personalised answers from elite athletes in your sport',
    },
    {
      icon: '🎯',
      title: 'Exclusive Content',
      description: 'Access training tips, strategies, and insider knowledge not available anywhere else',
    },
    {
      icon: '📝',
      title: 'Personalised Advice',
      description: 'Receive tailored feedback on your performance and technique from the best in the field',
    },
    {
      icon: '✓',
      title: 'Verified Athletes',
      description: 'Every mentor on our platform is verified to ensure you get authentic expert guidance',
    },
  ];

  const interactionModels = [
    {
      icon: '💬',
      title: '1-on-1 Text Chat',
      description: 'Asynchronous Q&A where you submit questions and athletes answer when available. Available as pay-per-question or subscription credits.',
      benefits: [
        'Get answers at your convenience',
        'Athletes can respond thoughtfully in their own time',
        'Affordable entry point for mentorship',
        'Build a record of advice and guidance',
        'Follow-up questions to clarify advice'
      ],
      example: '"I have been struggling with my tennis backhand. Received detailed technique tips from a Grand Slam champion that completely changed my approach!"'
    },
    {
      icon: '🎥',
      title: '1-on-1 Video Calls',
      description: 'Schedule private video sessions (15-min, 30-min) with your chosen athlete mentor for personalised guidance.',
      benefits: [
        'Real-time feedback and demonstrations',
        'Personalised attention addressing specific needs',
        'More engaging and interactive experience',
        'Opportunity to show your technique for feedback',
        'Build a more personal mentor relationship'
      ],
      example: '"My 30-minute session with an Olympic swimmer helped me pinpoint exactly what was holding my freestyle back. I could demonstrate my technique and get immediate corrections."'
    },
    {
      icon: '👥',
      title: 'Group Q&A / "Ask Me Anything"',
      description: 'Join live text or video sessions where athletes answer questions from multiple subscribers at once.',
      benefits: [
        'Learn from questions asked by other participants',
        'More accessible pricing than private sessions',
        'Community feeling with like-minded sports enthusiasts',
        'Regular scheduled sessions with your favourite athletes',
        'Wide range of topics covered in a single session'
      ],
      example: '"Attending the monthly AMA with the professional cycling team gives me incredible insights into training, nutrition, and race tactics. Plus, I have connected with other cycling enthusiasts!"'
    },
    {
      icon: '📹',
      title: 'Personalised Video Responses',
      description: 'Submit videos of your technique or performance and receive detailed video feedback and critiques.',
      benefits: [
        'Visual demonstration of corrections and improvements',
        'Athlete can annotate your video with feedback',
        'Rewatch advice as many times as needed',
        'Share feedback with coaches or training partners',
        'Track improvement over time with follow-up videos'
      ],
      example: '"I sent a video of my basketball shooting form and received a detailed breakdown from an NBA player. He recorded himself showing exactly how to adjust my elbow position and follow-through."'
    },
    {
      icon: '📱',
      title: 'Content Feed',
      description: 'Access private feeds with articles, short videos, training logs, and mindset tips from your favourite athletes.',
      benefits: [
        'Regular updates from athletes you follow',
        'Insight into professional training methodologies',
        'Exclusive content not available on social media',
        'Seasonal training tips and competition advice',
        'Mindset and motivation from the best in the sport'
      ],
      example: '"Following my favourite runner\'s content feed has transformed my training. I have implemented her strength routines, nutrition tips, and race-day strategies with amazing results."'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === interactionModels.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? interactionModels.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === interactionModels.length - 1;

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <section id="features" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Why Konect Makes a Difference</h2>
          <p className="text-xl text-primary-secondary max-w-3xl mx-auto">
            Our platform bridges the gap between elite sports knowledge and aspiring athletes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Interaction Models</h2>
        <p className="text-xl text-primary-secondary max-w-3xl mx-auto">
          Multiple ways to connect with elite athletes based on your needs
        </p>
      </div>
      
      <div className="w-full bg-gray-50 py-12">
        <div className="relative max-w-7xl mx-auto">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {interactionModels.map((model, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="px-4 md:px-12 max-w-4xl mx-auto">
                    <InteractionModel
                      icon={model.icon}
                      title={model.title}
                      description={model.description}
                      benefits={model.benefits}
                      example={model.example}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {!isFirstSlide && (
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-2 md:left-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 text-primary-accent hover:text-primary-text transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          
          {!isLastSlide && (
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-2 md:right-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 text-primary-accent hover:text-primary-text transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-8">
            {interactionModels.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary-accent' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;