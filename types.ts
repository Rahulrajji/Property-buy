
export interface Property {
  id: number;
  title: string;
  type: 'Buy' | 'Rent';
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  sources?: GroundingSource[];
}

export interface GroundingSource {
  title: string;
  uri: string;
  type: 'web' | 'maps';
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
