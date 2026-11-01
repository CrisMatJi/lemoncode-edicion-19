export interface Review {
  id: string;
  author: string;
  date: string;
  comment: string;
}

export interface House {
  id: string;
  name: string;
  description: string;
  address: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  price: number;
  imageUrl: string;
  amenities: string[];
  reviews: Review[];
}
