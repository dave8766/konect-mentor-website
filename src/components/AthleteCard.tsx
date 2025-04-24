import React from 'react';
import { Athlete } from '../types';
import { Link } from 'react-router-dom';

interface AthleteCardProps {
  athlete: Athlete;
}

const AthleteCard: React.FC<AthleteCardProps> = ({ athlete }) => {
  const { id, name, sport, achievements, image, specialties, rating, reviewCount, price, available } = athlete;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        {!available && (
          <div className="absolute top-3 right-3 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
            Unavailable
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-lg font-bold">{name}</h3>
          <p className="text-white text-sm opacity-90">{sport}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-primary-text font-semibold ml-1">{rating}</span>
            <span className="text-primary-secondary text-sm ml-1">({reviewCount})</span>
          </div>
          <div className="ml-auto text-primary-accent font-semibold">
            ${price}/hr
          </div>
        </div>
        
        <div className="text-sm text-primary-secondary mb-4">
          <p className="font-semibold text-primary-text mb-1">Achievement highlights:</p>
          <ul className="list-disc list-inside">
            {achievements.slice(0, 2).map((achievement, index) => (
              <li key={index} className="mb-1 ml-1">{achievement}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {specialties.slice(0, 3).map((specialty, index) => (
            <span key={index} className="bg-gray-100 text-primary-secondary text-xs px-2 py-1 rounded-full">
              {specialty}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/athlete/${id}`}
          className={`block w-full py-2 text-center rounded-md text-white font-medium transition-colors ${
            available ? 'bg-primary-accent hover:bg-opacity-90' : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={(e) => !available && e.preventDefault()}
        >
          {available ? 'Connect Now' : 'Currently Unavailable'}
        </Link>
      </div>
    </div>
  );
};

export default AthleteCard; 