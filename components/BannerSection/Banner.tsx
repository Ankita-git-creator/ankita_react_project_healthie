/* eslint-disable mui-path-imports/mui-path-imports */

import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import ArrowIconRight from "@/ui/Icons/ArrowIconRight";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  styled
} from "@mui/material";
import Image from "next/image";

export const BannerWrapper = styled(Box)`
  background-color: ${primaryColors.colorF3F4F8};
  padding: 181px 0 57px;
  position: relative;
  @media (max-width: 1199px) {
    padding: 150px 0 40px;
  }
  @media (max-width: 599px) {
    padding: 130px 0 24px;
  }
  .banner_SectionWrap {
    position: relative;
    .title_text {
      margin-bottom: 15px;
      h1 {
        color: ${primaryColors.primary};
        font-weight: 800;
        line-height: 1.3;
      }
    }
    .banner_sectionTitle {
      position: relative;
      /* z-index: 9999; */
      .banner_lft_section {
        position: relative;
        z-index: 9999;
        padding-top: 26px;
        @media (max-width: 1199px) {
          padding-top: 0;
        }
        .banner_description {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.7;
          color: ${primaryColors.mainFontColor};
          @media (max-width: 599px) {
            font-size: 13px;
          }
          span {
            font-size: inherit;
            font-family: inherit;
            line-height: inherit;
            font-weight: 500;
            color: ${primaryColors.primary};
          }
          &.banner_details_text {
            max-width: 468px;
            @media (max-width: 1199px) {
              max-width: 100%;
            }
          }
          &.banner_sectionfullText {
            min-width: 643px;
            width: 100%;
            max-width: 643px;
            @media (max-width: 1199px) {
              min-width: auto;
              max-width: 100%;
            }
          }
        }
        .arrowsection_btn {
          margin: 30px 0;
          width: 60px;
          height: 60px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${primaryColors.primary};
          box-shadow: 0px 22px 18.5px 0px rgba(70, 31, 176, 0.122);
          @media (max-width: 1199px) {
            margin: 18px 0;
          }
          @media (max-width: 599px) {
            width: 40px;
            height: 40px;
          }
          &:hover {
            background-color: ${primaryColors.secondary};
          }
        }
        .lisence_text {
          margin-top: 60px;
          @media (max-width: 1199px) {
            margin: 18px 0 0 0;
          }

          @media (max-width: 599px) {
            margin-bottom: -10px;
            p {
              font-size: 10px;
            }
          }
          h2 {
            font-size: 56px;
            font-weight: 600;
            line-height: 1;
            color: ${primaryColors.primary};

            @media (max-width: 1199px) {
              font-size: 40px;
            }
            @media (max-width: 899px) {
              font-size: 30px;
            }
            @media (max-width: 599px) {
              font-size: 24px;
            }
          }
          p {
            color: ${primaryColors.mainFontColor};
          }
        }
      }
    }
    .banner_rgt_section {
      position: relative;
      padding-right: 13px;
      padding-bottom: 14px;

      @media (max-width: 899px) {
        padding: 0 7px 7px 0;
      }
      &::before {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 428px;
        height: 308px;
        border-radius: 20px;
        background: ${primaryColors.white};
        content: "";
        z-index: 1;

        @media (max-width: 899px) {
          width: 60%;
          height: 60%;
        }
      }
      .banner_cutoutimg {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
        height: 391px;
        @media (max-width: 899px) {
          height: 240px;
          width: 40%;
        }
        @media (max-width: 479px) {
          height: 180px;
          width: 45%;
        }
        @media (max-width: 374px) {
          height: 140px;
        }
      }
      .banner_mainImgWrap {
        line-height: 0;
        font-size: 0;
        height: 444px;
        border-radius: 35px;
        overflow: hidden;
        position: relative;
        z-index: 2;

        @media (max-width: 899px) {
          height: auto;
          border-radius: 20px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          position: relative;
          z-index: 10;
        }
      }
      .dotedsection {
        position: absolute;
        right: -35px;
        bottom: -27px;
        z-index: 0;
        @media (max-width: 1199px) {
          width: 100px;
          height: 100px;
          right: -15px;
          bottom: -15px;
        }
      }

      .service-badge {
        position: absolute;
        right: -40px;
        top: -55px;
        z-index: 3;
        @media (max-width: 1299px) {
          right: -15px;
        }

        @media (max-width: 599px) {
          right: inherit;
          left: 0;
          width: 81px;
          top: 10%;
        }
      }
    }
  }
  .land-ban-shp-3 {
    position: absolute;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    @media (max-width: 1199px) {
      width: 40%;
      z-index: 9;
    }
    @media (max-width: 479px) {
      width: 60%;
    }
  }
  .land-ban-shp-2 {
    line-height: 0;
    font-size: 0;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 999;
    @media (max-width: 1199px) {
      display: none;
    }
  }
  .landing-banner-dot-1 {
    position: absolute;
    top: 200px;
    left: -25px;
    height: 217px;
    @media (max-width: 1199px) {
      width: 100px;
      height: 100px;
      left: 0;
      top: 100px;
    }
  }
`;

function Banner() {
  return (
    <BannerWrapper>
      <Container fixed>
        <Box className="banner_SectionWrap">
          <Box className="title_text">
            <Typography variant="h1">
              get comprehensive health coverage that’s actually affordable
            </Typography>
          </Box>
          <Box className="banner_sectionTitle">
            <Grid container>
              <Grid item lg={4.5} xs={12}>
                <Box className="banner_lft_section">
                  <Typography className="banner_description banner_sectionfullText">
                    Discover a variety of coverage options tailored to match
                    your budget and needs, all while enjoying the assistance of
                    our dedicated support team, who are here to guide you at
                    every turn.
                  </Typography>
                  <IconButton className="arrowsection_btn">
                    <ArrowIconRight />
                  </IconButton>
                  <Typography className="banner_description banner_details_text">
                    <Typography variant="caption">Healthie,</Typography> a
                    licensed insurance agency operating in 50 states takes the
                    effort off your shoulders. We navigate the market on your
                    behalf, considering the options available in your state, to
                    help you select an affordable health insurance plan that
                    aligns perfectly with your individual needs.
                  </Typography>
                  <Box className="lisence_text">
                    <Typography variant="h2">50+</Typography>
                    <Typography variant="body1">States Licensed</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={7.5} xs={12}>
                <Box className="banner_rgt_section">
                  <Image
                    src={assest.bannerCutout}
                    alt="banner_cutoutimg"
                    width={336}
                    height={391}
                    className="banner_cutoutimg"
                  />
                  <figure className="banner_mainImgWrap">
                    <Image
                      src={assest.bannerimg}
                      alt="banner_img"
                      width={710}
                      height={444}
                    />
                  </figure>
                  <Image
                    src={assest.yellowdots}
                    alt="yellowdots"
                    width={160}
                    height={160}
                    className="dotedsection"
                  />

                  <Image
                    className="service-badge"
                    src={assest.banner_servicImg}
                    alt="service_badge"
                    width={150}
                    height={150}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <figure className="land-ban-shp-2">
        <Image
          src={assest.gradient_violate}
          alt="gradient_color"
          width={860}
          height={851}
        />
      </figure>
      <Image
        src={assest.ExportGradient}
        width={929}
        height={931}
        alt="gradient_clor"
        className="land-ban-shp-3"
      />
      <Image
        src={assest.whitedots}
        alt="white_dots"
        width={215}
        height={217}
        className="landing-banner-dot-1"
      />
    </BannerWrapper>
  );
}

export default Banner;
