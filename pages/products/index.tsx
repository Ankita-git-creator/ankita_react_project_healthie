import { useCategoryList } from "@/hooks/react-query/query-hooks/productQuery.hooks";
import { SearchList } from "@/interface/products.interfaces";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProductWrapper = styled(Box)`
  width: 100%;
  padding: 20px 0;
  background-color: ${primaryColors.bodyColor};
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledContainer = styled(Box)`
  background-color: ${primaryColors.white};
  padding: 15px;
`;

export const DividedContainer = styled(Container)`
  background-color: ${primaryColors.bodyColor};
  height: 2px;
  width: 100%;
`;

export const PriceContainer = styled(Container)`
  display: flex;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
`;

function products() {
  const { data: categoryList, refetch: categoryListRefetch } =
    useCategoryList(false);
  console.log("categoryList", categoryList);

  useEffect(() => {
    categoryListRefetch();
  }, []);

  // const { data: searchList, refetch: searchListRefetch } = useSearchList(
  //   false,
  //   {
  //     query: "abc"
  //   }
  // );

  const url = "https://real-time-amazon-data.p.rapidapi.com";
  const api_key = "19c67eb493msh9567d55b91e4b7dp1241e8jsne64a27e3cc42";

  // console.log("searchList", searchList);

  // useEffect(() => {
  //   searchListRefetch();
  // }, []);

  const rangeArray = [100, 200, 300, 400, 500];

  const countryList = [
    {
      name: "United States",
      code: "US"
    },
    {
      name: "Australia",
      code: "AU"
    },
    {
      name: "Brazil",
      code: "BR"
    },
    {
      name: "Canada",
      code: "CA"
    },
    {
      name: "China",
      code: "CN"
    },
    {
      name: "France",
      code: "FR"
    },
    {
      name: "Germany",
      code: "DE"
    },
    {
      name: "India",
      code: "IN"
    },
    {
      name: "Italy",
      code: "IT"
    },
    {
      name: "Mexico",
      code: "MX"
    },
    {
      name: "Netherlands",
      code: "NL"
    },
    {
      name: "Singapore",
      code: "SG"
    },
    {
      name: "Spain",
      code: "ES"
    },
    {
      name: "Turkey",
      code: "TR"
    },
    {
      name: "United Arab Emirates",
      code: "AE"
    },
    {
      name: "United Kingdom",
      code: "GB"
    },
    {
      name: "Japan",
      code: "JP"
    },
    {
      name: "Saudi Arabia",
      code: "SA"
    },
    {
      name: "Poland",
      code: "PL"
    },
    {
      name: "Sweden",
      code: "SE"
    },
    {
      name: "Belgium",
      code: "BE"
    },
    {
      name: "Egypt",
      code: "EG"
    }
  ];

  const productCondArr = ["NEW", "USED", "RENEWED", "COLLECTIBLE"];

  const sortByArr = [
    "RELEVANCE",
    "LOWEST_PRICE",
    "HIGHEST_PRICE",
    "REVIEWS",
    "NEWEST",
    "BEST_SELLERS"
  ];

  const [productName, setProductName] = useState("");
  const getProductName = (e: any) => {
    console.log("sort_by", e.target.value);
    setProductName(e.target.value);
  };

  const [categoryId, setCategoryId] = useState("");
  const categoryCahnge = (e: any) => {
    console.log("category_id", e.target.value);
    setCategoryId(e.target.value);
  };

  const [minPrice, setMinPrice] = useState(0);
  const minCahnge = (e: any) => {
    console.log("min_price", e.target.value);
    setMinPrice(e.target.value);
  };

  const [maxPrice, setMaxPrice] = useState(0);
  const maxCahnge = (e: any) => {
    console.log("max_price", e.target.value);
    setMaxPrice(e.target.value);
  };

  const [countryCode, setCountryCode] = useState("");
  const countryCahnge = (e: any) => {
    console.log("country", e.target.value);
    setCountryCode(e.target.value);
  };

  const [prodCondition, setProdCondition] = useState("");
  const prodCondCahnge = (e: any) => {
    console.log("product_condition", e.target.value);
    setProdCondition(e.target.value);
  };

  const [sortBy, setSortBy] = useState("");
  const sortByCahnge = (e: any) => {
    console.log("sort_by", e.target.value);
    setSortBy(e.target.value);
  };

  const getSearchList = async (
    query: string | "",
    country?: string | "",
    category_id?: string | "",
    sort_by?: string | "",
    min_price?: number | 0,
    max_price?: number | 0,
    product_condition?: string | ""
  ) => {
    const res = await axios.get<SearchList>(`${url}/search`, {
      headers: {
        "X-RapidAPI-Key": `${api_key}`,
        "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
      },
      params: {
        query: productName,
        country: countryCode,
        category_id: categoryId,
        sort_by: sortBy,
        min_price: minPrice,
        max_price: maxPrice,
        product_condition: prodCondition
      }
    });
    return res;
  };

  return (
    <ProductWrapper>
      <MainContainer>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <StyledContainer>
              <Typography variant="body1">Filters</Typography>
            </StyledContainer>
            <DividedContainer></DividedContainer>
            <StyledContainer>
              <TextField
                id="standard-basic"
                label="Search Products"
                variant="standard"
                onInput={getProductName}
              />
            </StyledContainer>
            <DividedContainer></DividedContainer>
            <StyledContainer>
              <Typography variant="body2">Categories</Typography>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{ fontSize: 13 }}
                >
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Category"
                  onChange={categoryCahnge}
                >
                  {categoryList?.map((item, index) => (
                    <MenuItem value={item?.id}>{item?.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </StyledContainer>
            <DividedContainer></DividedContainer>
            <StyledContainer>
              <Typography variant="body2">Price</Typography>
              <PriceContainer>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={{ fontSize: 13 }}
                  >
                    Min
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Min"
                    onChange={minCahnge}
                  >
                    {rangeArray.map((item, index) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Typography variant="body2">to</Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={{ fontSize: 13 }}
                  >
                    Max
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Max"
                    onChange={maxCahnge}
                  >
                    {rangeArray.map((item, index) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </PriceContainer>
            </StyledContainer>
            <DividedContainer></DividedContainer>
            <StyledContainer>
              <Typography variant="body2">Countries</Typography>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{ fontSize: 13 }}
                >
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Country"
                  onChange={countryCahnge}
                >
                  {countryList.map((item, index) => (
                    <MenuItem value={item?.code}>{item?.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </StyledContainer>
            <DividedContainer></DividedContainer>
            <StyledContainer>
              <Typography variant="body2">Product Conditions</Typography>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{ fontSize: 13 }}
                >
                  Product Condition
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Product Condition"
                  onChange={prodCondCahnge}
                >
                  {productCondArr.map((item, index) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </StyledContainer>
            <DividedContainer></DividedContainer>
            <StyledContainer>
              <Typography variant="body2">Sort By</Typography>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{ fontSize: 13 }}
                >
                  Sort By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Sort By"
                  onChange={sortByCahnge}
                >
                  {sortByArr.map((item, index) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </StyledContainer>
            <DividedContainer></DividedContainer>
            <StyledContainer>
              <CustomButtonPrimary
                variant="contained"
                color="secondary"
                className="call_btnsection"
                size="small"
                onClick={async () => {
                  try {
                    const response = await getSearchList(
                      productName,
                      countryCode,
                      categoryId,
                      sortBy,
                      minPrice,
                      maxPrice,
                      prodCondition
                    );
                    console.log(response);
                  } catch (error) {
                    console.error("Error occurred while fetching data:", error);
                  }
                }}
              >
                <Typography variant="body1">Apply Filters</Typography>
              </CustomButtonPrimary>
            </StyledContainer>
          </Grid>
          <Grid item xs={9} md={9}></Grid>
        </Grid>
      </MainContainer>
    </ProductWrapper>
  );
}

export default products;
