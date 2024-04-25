// CategoryList

export interface CategoryList {
  status: string;
  request_id: string;
  data: Daum[];
}

export interface Daum {
  name: string;
  id: string;
}

// SearchList

export interface SearchList {
  status: string;
  request_id: string;
  data: Data;
}

export interface Data {
  total_products: number;
  country: string;
  domain: string;
  products: Product[];
}

export interface Product {
  asin: string;
  product_title: string;
  product_price: string;
  unit_price?: string;
  unit_count?: number;
  product_original_price?: string;
  currency: string;
  product_star_rating: string;
  product_num_ratings: number;
  product_url: string;
  product_photo: string;
  product_num_offers: any;
  product_minimum_offer_price: string;
  is_best_seller: boolean;
  is_amazon_choice: boolean;
  is_prime: boolean;
  climate_pledge_friendly: boolean;
  sales_volume: string;
  delivery: string;
}
