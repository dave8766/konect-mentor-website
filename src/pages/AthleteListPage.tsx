import React, { useState, useEffect, useMemo } from 'react';
import { Athlete, SportCategory } from '../types';
import { athletes, getSportCategories } from '../data/athletes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AthleteCard from '../components/AthleteCard';
import FilterSidebar from '../components/FilterSidebar';

const AthleteListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SportCategory | null>(null);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [availabilityFilter, setAvailabilityFilter] = useState<boolean | null>(null);
  const [priceRange, setPriceRange] = useState({ min: 10, max: 200 });
  const [sortOption, setSortOption] = useState<'price-low' | 'price-high' | 'rating'>('rating');

  // Get all sport categories from the athletes data
  const sportCategories = useMemo(() => getSportCategories(athletes), []);

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedSport(null);
    setAvailabilityFilter(null);
    setPriceRange({ min: 10, max: 200 });
    setSortOption('rating');
  };

  // Handle category selection
  const handleCategoryChange = (category: SportCategory) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedSport(null);
    } else {
      setSelectedCategory(category);
      setSelectedSport(null);
    }
  };

  // Handle sport selection
  const handleSportChange = (sport: string) => {
    setSelectedSport(selectedSport === sport ? null : sport);
  };

  // Handle price range change
  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  // Filter athletes based on selected filters
  const filteredAthletes = useMemo(() => {
    return athletes.filter((athlete) => {
      // Filter by search query
      if (
        searchQuery &&
        !athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !athlete.sport.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filter by sport
      if (selectedSport && athlete.sport !== selectedSport) {
        return false;
      }

      // Filter by category
      if (
        selectedCategory &&
        !selectedSport &&
        !sportCategories[selectedCategory].includes(athlete.sport)
      ) {
        return false;
      }

      // Filter by availability
      if (availabilityFilter !== null && athlete.available !== availabilityFilter) {
        return false;
      }

      // Filter by price range
      if (athlete.price < priceRange.min || athlete.price > priceRange.max) {
        return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedSport,
    availabilityFilter,
    priceRange,
    sportCategories,
  ]);

  // Sort the filtered athletes based on selected sort option
  const sortedAthletes = useMemo(() => {
    return [...filteredAthletes].sort((a, b) => {
      if (sortOption === 'price-low') {
        return a.price - b.price;
      } else if (sortOption === 'price-high') {
        return b.price - a.price;
      } else {
        // Default sort by rating (highest first)
        return b.rating - a.rating;
      }
    });
  }, [filteredAthletes, sortOption]);

  return (
    <div className="min-h-screen flex flex-col bg-primary-background">
      <Header />

      <main className="flex-grow py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <section className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-2">
              Browse Our Elite Athletes
            </h1>
            <p className="text-primary-secondary">
              Connect with verified professionals and Olympians across various sports
            </p>
          </section>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters (Mobile: Show/Hide Toggle) */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => document.getElementById('mobileFilters')?.classList.toggle('hidden')}
                className="w-full py-2 bg-white border border-gray-200 rounded-md text-primary-text flex items-center justify-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Filters</span>
              </button>
              <div id="mobileFilters" className="hidden mt-4">
                <FilterSidebar
                  categories={sportCategories}
                  selectedCategory={selectedCategory}
                  selectedSport={selectedSport}
                  onCategoryChange={handleCategoryChange}
                  onSportChange={handleSportChange}
                  onAvailabilityChange={setAvailabilityFilter}
                  onPriceRangeChange={handlePriceRangeChange}
                  availabilityFilter={availabilityFilter}
                  priceRange={priceRange}
                  resetFilters={resetFilters}
                />
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <FilterSidebar
                categories={sportCategories}
                selectedCategory={selectedCategory}
                selectedSport={selectedSport}
                onCategoryChange={handleCategoryChange}
                onSportChange={handleSportChange}
                onAvailabilityChange={setAvailabilityFilter}
                onPriceRangeChange={handlePriceRangeChange}
                availabilityFilter={availabilityFilter}
                priceRange={priceRange}
                resetFilters={resetFilters}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search and Sort Controls */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search athletes or sports..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-shrink-0 min-w-[180px]">
                    <select
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent appearance-none bg-white"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value as 'price-low' | 'price-high' | 'rating')}
                    >
                      <option value="rating">Sort by: Top Rated</option>
                      <option value="price-low">Sort by: Price (Low to High)</option>
                      <option value="price-high">Sort by: Price (High to Low)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-4 text-primary-secondary">
                <p>
                  Showing {sortedAthletes.length} {sortedAthletes.length === 1 ? 'athlete' : 'athletes'}
                  {selectedSport ? ` in ${selectedSport}` : ''}
                  {selectedCategory && !selectedSport ? ` in ${selectedCategory}` : ''}
                </p>
              </div>

              {/* Athletes Grid */}
              {sortedAthletes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedAthletes.map((athlete) => (
                    <AthleteCard key={athlete.id} athlete={athlete} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-primary-text mb-2">No Athletes Found</h3>
                  <p className="text-primary-secondary mb-4">
                    We couldn't find any athletes matching your current filters.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 bg-primary-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AthleteListPage; 