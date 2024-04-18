/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
import {
  useSiteContents,
  useTestimonials
} from "@/hooks/react-query/query-hooks/homeQuery.hooks";
import { TestimonialSectionWrap } from "@/styles/StyledComponents/TestimonialSectionWrap";
import QuoteIcon from "@/ui/Icons/QuoteIcon";
import StartIcon from "@/ui/Icons/StartIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const {
    data: testimonialInfo,
    isLoading: testimonialLoading,
    refetch: testimonialRefetch
  } = useTestimonials(false);
  console.log("testimonialInfo", testimonialInfo);

  useEffect(() => {
    testimonialRefetch();
  }, []);

  const {
    data: siteContentInfo,
    isLoading: siteContentLoading,
    refetch: siteContentRefetch
  } = useSiteContents(false);
  console.log("siteContentInfo", siteContentInfo);

  useEffect(() => {
    siteContentRefetch();
  }, []);

  return (
    <TestimonialSectionWrap>
      {/* <Image
        src={assest.shapeTestimoni1}
        className="shapeImg"
        width={489}
        height={459}
        alt=""
      />
      <Image
        src={assest.shapeImgNew3}
        className="shapeImgTw"
        width={400}
        height={400}
        alt=""
      />
      <Image
        src={assest.shapeLineImg1}
        className="shapeLineImg"
        width={800}
        height={200}
        alt=""
      /> */}

      <Box className="testimonial_main">
        <Container fixed>
          <Typography variant="h2">Our happy clients says about us</Typography>
          <Box className="sliderMain">
            <Slider {...settings}>
              {testimonialInfo?.map((item, index) => (
                <Box className="singleSlider" key={index}>
                  <Typography variant="body1" className="msgText">
                    {item.client_says}
                  </Typography>
                  <Box className="userInfo">
                    <figure>
                      <Image
                        src={item?.profile_photo}
                        alt="user-image"
                        width={45}
                        height={45}
                      />
                      <i>
                        <QuoteIcon />
                      </i>
                    </figure>
                    <Box className="infoText">
                      <Typography variant="body1" className="nameText">
                        {item.client_name}
                      </Typography>
                      <Typography variant="body1" className="position">
                        {item.client_plan}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
          <Box className="testimonialBottom">
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} xs={12}>
                <Box className="infoTextLft">
                  <Typography variant="h3">
                    More than {siteContentInfo?.happy_clients} happy client
                    every month
                  </Typography>
                  <Typography variant="body1">
                    Best health insurance providers in the U.S.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} xs={6} className="clmFullWidth">
                    <Box className="reviewWrap">
                      <Typography variant="h4">4.8</Typography>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        icon={<StartIcon />}
                      />
                      <Typography variant="body1">Google rating</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} xs={6} className="clmFullWidth">
                    <Box className="reviewWrap">
                      <Typography variant="h4">5.0</Typography>
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        icon={<StartIcon />}
                      />
                      <Typography variant="body1">
                        Satisfaction Guaranteed
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </TestimonialSectionWrap>
  );
}
