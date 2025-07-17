// Define TypeScript interfaces for global types used throughout the application.

export interface CarType {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  carType: 'automatic' | 'manual';
}
