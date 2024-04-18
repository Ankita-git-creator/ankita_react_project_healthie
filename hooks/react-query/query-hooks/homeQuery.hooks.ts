import { GetSiteContents, GetTestimonials } from "@/api/functions/home.api";
import { useQuery } from "react-query";
import {
  GET_SITE_CONTENTS,
  GET_TESTIMONIALS
} from "../query-keys/homeQuery.keys";

// testimonials
export const useTestimonials = (
  enabled: boolean = false,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([GET_TESTIMONIALS], GetTestimonials, {
    enabled,
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data?.testimonials ?? []
  });

//  site contents
export const useSiteContents = (
  enabled: boolean = false,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([GET_SITE_CONTENTS], GetSiteContents, {
    enabled,
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data?.pageContents ?? []
  });
