import { useCategoryList } from "@/hooks/react-query/query-hooks/productQuery.hooks";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useRouter } from "next/router";
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
  // Category List
  const { data: categoryList, refetch: categoryListRefetch } =
    useCategoryList(false);
  useEffect(() => {
    categoryListRefetch();
  }, []);

  // Search List
  const rangeArray = [100, 200, 300, 400, 500];
  const [productName, setProductName] = useState("");
  const getProductName = (e: any) => setProductName(e.target.value);
  const [productPrice, setProductPrice] = useState("");
  const getProductPrice = (e: any) => setProductPrice(e.target.value);
  const [categoryid, setCategoryId] = useState(0);
  const categoryCahnge = (e: any) => setCategoryId(Number(e.target.value));
  const [minPrice, setMinPrice] = useState(0);
  const minCahnge = (e: any) => setMinPrice(e.target.value);
  const [maxPrice, setMaxPrice] = useState(0);
  const maxCahnge = (e: any) => setMaxPrice(e.target.value);
  const url = "https://api.escuelajs.co/api/v1";

  type SearchParams = {
    title?: string;
    price?: number;
    price_min?: number;
    price_max?: number;
    categoryId?: number;
  };

  const getSearchList = async (params: SearchParams) => {
    try {
      const res = await axios.get(`${url}/products`, { params });
      return res.data;
    } catch (error: any) {
      throw new Error("Error occurred while fetching data:", error);
    }
  };

  const [searchListData, setSearchListData] = useState<any[]>([]);
  const [paramBody, setParamBody] = useState<SearchParams>({
    title: "",
    price: 0,
    price_min: 0,
    price_max: 0,
    categoryId: 0
  });
  const { title, price, price_min, price_max, categoryId } = paramBody;

  useEffect(() => {
    setParamBody((prevParamBody) => ({
      ...prevParamBody,
      title: productName,
      price: Number(productPrice),
      price_min: minPrice,
      price_max: maxPrice,
      categoryId: categoryid
    }));
  }, [productName, productPrice, minPrice, maxPrice, categoryid]);

  const handleApplyFilters = async () => {
    try {
      const response = await getSearchList(paramBody);
      setSearchListData(response);

      setProductName("");
      setProductPrice("");
      setMinPrice(0);
      setMaxPrice(0);
      setCategoryId(0);
    } catch (error) {}
  };

  // Product Details
  const router = useRouter();
  const handleDetails = (id: any) => {
    router.push(`/details/${id}`);
  };

  return (
    <ProductWrapper>
      <MainContainer>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
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
                value={productName}
              />
            </StyledContainer>
            <DividedContainer></DividedContainer>
            <StyledContainer>
              <TextField
                id="standard-basic"
                label="Search By Price"
                variant="standard"
                onInput={getProductPrice}
                value={productPrice}
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
                  value={categoryId}
                >
                  {categoryList?.map((item: any) => (
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
                    value={minPrice}
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
                    value={maxPrice}
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
              <CustomButtonPrimary
                variant="contained"
                color="secondary"
                className="call_btnsection"
                size="small"
                onClick={handleApplyFilters}
              >
                <Typography variant="body1">Apply Filters</Typography>
              </CustomButtonPrimary>
            </StyledContainer>
          </Grid>
          <Grid item xs={8} md={8}>
            <StyledContainer>
              <Grid container spacing={4}>
                {searchListData.length > 0 ? (
                  searchListData.map((item: any, index: number) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={item?.images && item.images[0]}
                            alt={item?.title || "No Title"}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {item?.title || "No Title"}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item?.description || "No Description"}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              style={{
                                marginTop: 10,
                                fontSize: 16,
                                fontWeight: 500,
                                color: "black"
                              }}
                            >
                              Price: {item?.price || "N/A"}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            onClick={() => handleDetails(item?.id)}
                          >
                            Details
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ marginTop: 40, marginLeft: 40 }}
                  >
                    {"No data found"}
                  </Typography>
                )}
              </Grid>
            </StyledContainer>
          </Grid>
        </Grid>
      </MainContainer>
    </ProductWrapper>
  );
}

export default products;
