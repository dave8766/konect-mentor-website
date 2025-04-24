export interface Athlete {
  id: string;
  name: string;
  sport: string;
  achievements: string[];
  image: string;
  bio: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  price: number;
  available: boolean;
}

export enum SportCategory {
  TeamSports = "Team Sports",
  Individual = "Individual Sports",
  Endurance = "Endurance Sports",
  Combat = "Combat Sports",
  WaterSports = "Water Sports",
  WinterSports = "Winter Sports",
  OlympicSports = "Olympic Sports",
  Other = "Other Sports"
} 