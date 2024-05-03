// CategoryList

export type CategoryList = Root2[];

export interface Root2 {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

// SearchList

export type SearchList = Root2[];

export interface Root2 {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

// Product Details

export interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}
