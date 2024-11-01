export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  isSitter: boolean;
  rating: number;
  reviews: number;
  availability?: {
    startDate: Date;
    endDate: Date;
  }[];
}

export interface Pet {
  id: string;
  ownerId: string;
  name: string;
  breed: string;
  age: number;
  description: string;
  specialNeeds: string;
  imageUrl: string;
}