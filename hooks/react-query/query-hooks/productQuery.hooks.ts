import { getCategoryList } from "@/api/functions/product.api";
import { useQuery } from "react-query";
import { GET_CATEGORIES } from "../query-keys/productQuery.keys";

// category list
export const useCategoryList = (
  enabled: boolean = false,
  onSuccess: any = () => {},
  onError: any = () => {}
) =>
  useQuery([GET_CATEGORIES], getCategoryList, {
    enabled,
    onSuccess,
    onError,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data ?? []
  });

// search list
// export const useSearchList = (
//   enabled: boolean = false,
//   onSuccess: any = () => {},
//   onError: any = () => {}
// ) =>
//   useQuery(
//     [GET_SEARCH_LIST],
//     (context) => getSearchList({ query: context.queryKey[0] }),
//     {
//       enabled,
//       onSuccess,
//       onError,
//       refetchOnWindowFocus: false,
//       select: (data) => data?.data?.data ?? []
//     }
//   );
