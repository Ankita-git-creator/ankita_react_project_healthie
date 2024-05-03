import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
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

const Details = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<any>({});

  console.log(router.query);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${router.query.id}`
        );
        setProductDetails(res.data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);

  console.log(productDetails);

  return (
    <ProductWrapper>
      <MainContainer>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={productDetails?.images && productDetails.images[0]}
              alt={productDetails?.title || "No Title"}
              // style={{ objectFit: "cover" }}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {productDetails?.title || "No Title"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetails?.description || "No Description"}
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
                Price: {productDetails?.price || "N/A"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </MainContainer>
    </ProductWrapper>
  );
};

export default Details;
