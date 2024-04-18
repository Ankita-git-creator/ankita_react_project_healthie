export interface Testimonial {
  success: boolean;
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: number;
  client_says: string;
  client_name: string;
  client_plan: string;
  active: number;
  profile_photo: string;
}
