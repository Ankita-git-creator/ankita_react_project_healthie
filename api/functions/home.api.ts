import { Sitecontents } from "@/interface/site_contents.interfaces";
import { Testimonial } from "@/interface/testimonial.interfaces";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

// testimonials
export const GetTestimonials = async () => {
  const res = await axiosInstance.get<Testimonial>(
    endpoints.landing.testimonials
  );
  return res;
};

// site contents
export const GetSiteContents = async () => {
  const res = await axiosInstance.get<Sitecontents>(
    endpoints.landing.site_contents
  );
  return res;
};
