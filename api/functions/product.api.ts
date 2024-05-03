import { CategoryList } from "@/interface/products.interfaces";
import axios from "axios";

const url = "https://api.escuelajs.co/api/v1";
// const api_key = "19c67eb493msh9567d55b91e4b7dp1241e8jsne64a27e3cc42";

// CategoryList
export const getCategoryList = async () => {
  const res = await axios.get<CategoryList>(`${url}/categories`);
  return res;
};

// SearchList
// type SearchParams = {
//   title?: string;
//   price?: number;
//   price_min?: number;
//   price_max?: number;
//   categoryId?: number;
// };

// export const getSearchList = async (params: SearchParams) => {
//   const { title, price, price_min, price_max, categoryId } = params;
//   const res = await axios.get<SearchList>(`${url}/products`, {
//     params: { params }
//   });
//   return res;
// };
