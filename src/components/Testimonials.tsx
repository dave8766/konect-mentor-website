import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
          {/* Replace with actual image */}
          <div className="w-full h-full flex items-center justify-center text-primary-secondary text-xs">
            {image}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-primary-text">{name}</h4>
          <p className="text-primary-secondary text-sm">{role}</p>
        </div>
      </div>
      <p className="text-primary-secondary italic">"{quote}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "As an Olympic champion, I'm excited to share my journey and insights with aspiring athletes through this platform.",
      name: "Sarah Johnson",
      role: "Olympic Gold Medalist, Swimming",
      image: "SJ",
    },
    {
      quote: "I wish I had access to something like this when I was starting my career. The direct advice from pros is invaluable.",
      name: "Michael Chen",
      role: "Professional Basketball Player",
      image: "MC",
    },
    {
      quote: "This platform has been a game-changer for my training. Getting direct feedback from my sporting heroes is incredible.",
      name: "Emma Williams",
      role: "Young Athlete",
      image: "EW",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">What People Are Saying</h2>
          <p className="text-xl text-primary-secondary max-w-3xl mx-auto">
            Hear from athletes and mentees who are excited about our platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 