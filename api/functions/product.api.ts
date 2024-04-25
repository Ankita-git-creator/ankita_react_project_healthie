import { CategoryList } from "@/interface/products.interfaces";
import axios from "axios";

const url = "https://real-time-amazon-data.p.rapidapi.com";
const api_key = "19c67eb493msh9567d55b91e4b7dp1241e8jsne64a27e3cc42";

// CategoryList
export const getCategoryList = async () => {
  const res = await axios.get<CategoryList>(`${url}/product-category-list`, {
    headers: {
      "X-RapidAPI-Key": `${api_key}`,
      "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
    }
  });
  return res;
};

// SearchList
// type SearchParams = {
//   query: string;
//   page?: string;
//   country?: string;
//   category_id?: string;
//   sort_by?: string;
//   min_price?: number;
//   max_price?: number;
//   product_condition?: string;
// };

// export const getSearchList = async (params: SearchParams) => {
//   const {
//     query,
//     page,
//     country,
//     category_id,
//     sort_by,
//     min_price,
//     max_price,
//     product_condition
//   } = params;
//   const res = await axios.get<SearchList>(`${url}/search`, {
//     headers: {
//       "X-RapidAPI-Key": `${api_key}`,
//       "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
//     },
//     params: {
//       query,
//       page,
//       country,
//       category_id,
//       sort_by,
//       min_price,
//       max_price,
//       product_condition
//     }
//   });
//   return res;
// };

// interface SearchParams {
//   query: string;
//   page?: string;
//   country?: string;
//   category_id?: string;
//   sort_by?: string;
//   min_price?: number;
//   max_price?: number;
//   product_condition?: string;
// }

// type QueryFunction<TResult, TError> = (
//   context: QueryFunctionContext<string[], any>
// ) => Promise<TResult>;

// export const getSearchList: QueryFunction<
//   AxiosResponse<SearchList, any>,
//   [string[], SearchParams]
// > = async ({ queryKey }) => {
//   const [_, queryParams] = queryKey;

//   let searchParams: SearchParams;
//   if (typeof queryParams === "string") {
//     console.error("Invalid query parameters:", queryParams);
//     searchParams = {
//       query: ""
//     };
//   } else {
//     searchParams = queryParams;
//   }

//   const {
//     query,
//     page = "",
//     country = "",
//     category_id = "",
//     sort_by = "",
//     min_price = 0,
//     max_price = 0,
//     product_condition = ""
//   } = searchParams;

//   const res = await axios.get<SearchList>(`${url}/search`, {
//     headers: {
//       "X-RapidAPI-Key": `${api_key}`,
//       "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
//     },
//     params: {
//       query,
//       page,
//       country,
//       category_id,
//       sort_by,
//       min_price,
//       max_price,
//       product_condition
//     }
//   });

//   return res;
// };
