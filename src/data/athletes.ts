import { Athlete, SportCategory } from '../types';

export const athletes: Athlete[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    sport: 'Swimming',
    achievements: ['Olympic Gold Medalist', '3x World Champion', 'World Record Holder'],
    image: 'https://source.unsplash.com/random/300x300/?swimmer,woman',
    bio: 'Former Olympic champion specializing in freestyle events with over 15 years of competitive experience at the international level.',
    specialties: ['Sprint Technique', 'Race Strategy', 'Mental Preparation'],
    rating: 4.9,
    reviewCount: 124,
    price: 75,
    available: true
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    sport: 'Basketball',
    achievements: ['NBA All-Star', 'NBA Champion', 'Olympic Bronze Medalist'],
    image: 'https://source.unsplash.com/random/300x300/?basketball,man',
    bio: 'Professional basketball player with 10+ years experience in the NBA and international competitions.',
    specialties: ['Shooting Form', 'Court Vision', 'Team Leadership'],
    rating: 4.8,
    reviewCount: 97,
    price: 90,
    available: true
  },
  {
    id: '3',
    name: 'Emma Chen',
    sport: 'Gymnastics',
    achievements: ['Olympic Silver Medalist', 'World Champion (Balance Beam)', 'National Champion'],
    image: 'https://source.unsplash.com/random/300x300/?gymnast,woman',
    bio: 'Artistic gymnast with expertise in balance beam and floor exercise, now coaching the next generation.',
    specialties: ['Balance Beam Technique', 'Floor Routine Design', 'Competition Preparation'],
    rating: 5.0,
    reviewCount: 76,
    price: 85,
    available: true
  },
  {
    id: '4',
    name: 'James Wilson',
    sport: 'Track & Field',
    achievements: ['Olympic Gold Medalist', '2x World Champion', 'Diamond League Winner'],
    image: 'https://source.unsplash.com/random/300x300/?runner,man',
    bio: 'Specializing in sprint events with expertise in starting technique and race strategy.',
    specialties: ['Sprint Mechanics', 'Block Starts', 'Race Tactics'],
    rating: 4.7,
    reviewCount: 112,
    price: 70,
    available: true
  },
  {
    id: '5',
    name: 'Olivia Martinez',
    sport: 'Tennis',
    achievements: ['Grand Slam Winner', 'Former World #3', 'Olympic Silver Medalist'],
    image: 'https://source.unsplash.com/random/300x300/?tennis,woman',
    bio: 'Former professional tennis player with expertise in all court surfaces and playing styles.',
    specialties: ['Serve Technique', 'Court Movement', 'Match Strategy'],
    rating: 4.9,
    reviewCount: 148,
    price: 95,
    available: true
  },
  {
    id: '6',
    name: 'David Kim',
    sport: 'Soccer',
    achievements: ['World Cup Winner', 'Champions League Winner', '2x League Champion'],
    image: 'https://source.unsplash.com/random/300x300/?soccer,man',
    bio: 'Former professional midfielder with exceptional vision and set-piece expertise.',
    specialties: ['Ball Control', 'Passing', 'Set Pieces'],
    rating: 4.8,
    reviewCount: 203,
    price: 85,
    available: true
  },
  {
    id: '7',
    name: 'Alex Thompson',
    sport: 'Cycling',
    achievements: ['Tour de France Stage Winner', 'National Champion', 'World Championship Medalist'],
    image: 'https://source.unsplash.com/random/300x300/?cyclist',
    bio: 'Road cycling specialist with expertise in climbing and time trials.',
    specialties: ['Climbing Technique', 'Time Trial Position', 'Training Plans'],
    rating: 4.7,
    reviewCount: 89,
    price: 65,
    available: false
  },
  {
    id: '8',
    name: 'Natalie Parker',
    sport: 'Volleyball',
    achievements: ['Olympic Gold Medalist', 'World Championship MVP', '3x National Champion'],
    image: 'https://source.unsplash.com/random/300x300/?volleyball,woman',
    bio: 'Former outside hitter with exceptional attacking and defensive skills.',
    specialties: ['Hitting Technique', 'Defensive Positioning', 'Team Strategy'],
    rating: 4.9,
    reviewCount: 117,
    price: 80,
    available: true
  },
  {
    id: '9',
    name: 'Carlos Mendez',
    sport: 'Boxing',
    achievements: ['World Champion', 'Olympic Medalist', 'National Champion'],
    image: 'https://source.unsplash.com/random/300x300/?boxer,man',
    bio: 'Former professional boxer with expertise in technical boxing and counterpunching.',
    specialties: ['Defensive Technique', 'Counterpunching', 'Footwork'],
    rating: 4.8,
    reviewCount: 132,
    price: 90,
    available: true
  },
  {
    id: '10',
    name: 'Jennifer Liu',
    sport: 'Figure Skating',
    achievements: ['World Champion', 'Olympic Bronze Medalist', 'Grand Prix Final Winner'],
    image: 'https://source.unsplash.com/random/300x300/?figure,skater',
    bio: 'Former competitive figure skater known for artistic expression and technical precision.',
    specialties: ['Jumps', 'Spins', 'Choreography'],
    rating: 4.9,
    reviewCount: 95,
    price: 85,
    available: true
  },
  {
    id: '11',
    name: 'Thomas Wright',
    sport: 'Golf',
    achievements: ['Major Champion', 'Ryder Cup Winner', 'Multiple PGA Tour Wins'],
    image: 'https://source.unsplash.com/random/300x300/?golfer,man',
    bio: 'Professional golfer with a strong short game and course management expertise.',
    specialties: ['Putting', 'Short Game', 'Course Management'],
    rating: 4.7,
    reviewCount: 108,
    price: 100,
    available: true
  },
  {
    id: '12',
    name: 'Sophia Adams',
    sport: 'Rowing',
    achievements: ['Olympic Gold Medalist', '2x World Champion', 'National Record Holder'],
    image: 'https://source.unsplash.com/random/300x300/?rowing,woman',
    bio: 'Former competitive rower specializing in sculling events and team coordination.',
    specialties: ['Rowing Technique', 'Training Programs', 'Race Strategy'],
    rating: 4.8,
    reviewCount: 73,
    price: 70,
    available: false
  }
];

export const getSportCategories = (athletes: Athlete[]): Record<SportCategory, string[]> => {
  const categoriesMap: Record<SportCategory, string[]> = {
    [SportCategory.TeamSports]: ['Basketball', 'Soccer', 'Volleyball', 'Hockey', 'Rugby', 'Baseball'],
    [SportCategory.Individual]: ['Tennis', 'Golf', 'Figure Skating'],
    [SportCategory.Endurance]: ['Cycling', 'Marathon Running', 'Triathlon', 'Rowing'],
    [SportCategory.Combat]: ['Boxing', 'MMA', 'Judo', 'Wrestling', 'Fencing'],
    [SportCategory.WaterSports]: ['Swimming', 'Diving', 'Surfing', 'Water Polo'],
    [SportCategory.WinterSports]: ['Skiing', 'Snowboarding', 'Ice Hockey', 'Figure Skating'],
    [SportCategory.OlympicSports]: ['Swimming', 'Gymnastics', 'Track & Field', 'Volleyball', 'Tennis'],
    [SportCategory.Other]: []
  };

  // Filter the sports that actually have athletes
  const result: Record<SportCategory, string[]> = Object.entries(categoriesMap).reduce((acc, [category, sports]) => {
    const filteredSports = sports.filter(sport => 
      athletes.some(athlete => athlete.sport === sport)
    );
    
    return {
      ...acc,
      [category as SportCategory]: filteredSports
    };
  }, {} as Record<SportCategory, string[]>);

  // Add any sports that don't fit the predefined categories to "Other"
  const allPredefinedSports = Object.values(categoriesMap).flat();
  const otherSports = Array.from(new Set(
    athletes
      .map(athlete => athlete.sport)
      .filter(sport => !allPredefinedSports.includes(sport))
  ));
  
  result[SportCategory.Other] = otherSports;

  return result;
};

export const getAthletesBySport = (sport: string): Athlete[] => {
  return athletes.filter(athlete => athlete.sport === sport);
}; 