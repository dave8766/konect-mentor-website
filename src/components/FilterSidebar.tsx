import React from 'react';
import { SportCategory } from '../types';

interface FilterSidebarProps {
  categories: Record<SportCategory, string[]>;
  selectedCategory: SportCategory | null;
  selectedSport: string | null;
  onCategoryChange: (category: SportCategory) => void;
  onSportChange: (sport: string) => void;
  onAvailabilityChange: (available: boolean | null) => void;
  onPriceRangeChange: (min: number, max: number) => void;
  availabilityFilter: boolean | null;
  priceRange: { min: number; max: number };
  resetFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  selectedSport,
  onCategoryChange,
  onSportChange,
  onAvailabilityChange,
  onPriceRangeChange,
  availabilityFilter,
  priceRange,
  resetFilters
}) => {
  // Calculate the number of sports in each category
  const getCategoryCount = (category: SportCategory): number => {
    return categories[category]?.length || 0;
  };

  return (
    <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-primary-text">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-primary-accent text-sm hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Sport Categories */}
      <div className="mb-6">
        <h4 className="text-primary-text font-semibold mb-3">Sport Categories</h4>
        <div className="space-y-2">
          {Object.entries(categories).map(([category, sports]) => {
            if (sports.length === 0) return null;
            
            return (
              <div key={category} className="flex items-center">
                <button
                  className={`flex-grow text-left px-2 py-1 rounded-md text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-accent bg-opacity-10 text-primary-accent font-medium'
                      : 'text-primary-text hover:bg-gray-100'
                  }`}
                  onClick={() => onCategoryChange(category as SportCategory)}
                >
                  {category}
                  <span className="ml-2 text-primary-secondary text-xs">
                    ({getCategoryCount(category as SportCategory)})
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sports */}
      {selectedCategory && categories[selectedCategory]?.length > 0 && (
        <div className="mb-6">
          <h4 className="text-primary-text font-semibold mb-3">Sports</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {categories[selectedCategory].map((sport) => (
              <div key={sport} className="flex items-center">
                <button
                  className={`flex-grow text-left px-2 py-1 rounded-md text-sm transition-colors ${
                    selectedSport === sport
                      ? 'bg-primary-accent bg-opacity-10 text-primary-accent font-medium'
                      : 'text-primary-text hover:bg-gray-100'
                  }`}
                  onClick={() => onSportChange(sport)}
                >
                  {sport}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Availability */}
      <div className="mb-6">
        <h4 className="text-primary-text font-semibold mb-3">Availability</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <button
              className={`flex-grow text-left px-2 py-1 rounded-md text-sm transition-colors ${
                availabilityFilter === true
                  ? 'bg-primary-accent bg-opacity-10 text-primary-accent font-medium'
                  : 'text-primary-text hover:bg-gray-100'
              }`}
              onClick={() => onAvailabilityChange(true)}
            >
              Available Now
            </button>
          </div>
          <div className="flex items-center">
            <button
              className={`flex-grow text-left px-2 py-1 rounded-md text-sm transition-colors ${
                availabilityFilter === null
                  ? 'bg-primary-accent bg-opacity-10 text-primary-accent font-medium'
                  : 'text-primary-text hover:bg-gray-100'
              }`}
              onClick={() => onAvailabilityChange(null)}
            >
              Show All
            </button>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-primary-text font-semibold mb-3">Price Range ($/hr)</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={priceRange.max}
              onChange={(e) => onPriceRangeChange(priceRange.min, parseInt(e.target.value))}
              className="w-full accent-primary-accent"
            />
          </div>
          <div className="flex justify-between text-sm text-primary-secondary">
            <span>${priceRange.min}</span>
            <span>${priceRange.max}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar; 