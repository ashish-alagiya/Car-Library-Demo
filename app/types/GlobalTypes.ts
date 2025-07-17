// Define TypeScript interfaces for global types used throughout the application.

export interface CarType {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  carType: 'automatic' | 'manual';
}

export type Car = {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  carType: 'manual' | 'automatic';
  tags: string[];
  createdAt: string;
};

export type CarFilters = {
  search?: string;
  carType?: string;
  tags?: string[];
  sortBy?: 'createdAt' | 'name';
  sortOrder?: 'ASC' | 'DESC';
};

export type CreateCarPayload = {
  imageUrl: string;
  name: string;
  description: string;
  carType: 'manual' | 'automatic';
  tags: string[];
};

export type UpdateCarPayload = Partial<CreateCarPayload> & { id: number };
