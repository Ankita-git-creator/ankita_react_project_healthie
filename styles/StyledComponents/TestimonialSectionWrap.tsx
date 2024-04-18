import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const TestimonialSectionWrap = styled(Box)`
  position: relative;
  padding: 290px 0 100px;
  overflow: hidden;
  @media (max-width: 1199px) {
    padding: 200px 0 60px;
  }
  @media (max-width: 599px) {
    padding: 200px 0 38px;
  }
  /* &::before {
    position: absolute;
    content: "";
    right: 8%;
    bottom: 18%;
    width: 211px;
    height: 211px;
    background: rgba(255, 188, 0, 0.33);
    filter: blur(152px);
    border-radius: 50%;

    @media (max-width: 1199px) {
      width: 80px;
      height: 80px;
    }
  } */
  .shapeLineImg {
    position: absolute;
    right: 0;
    top: 100px;

    @media (max-width: 1199px) {
      width: 40%;
      top: 40px;
    }
    @media (max-width: 899px) {
      display: none;
    }
  }
  .shapeImgTw {
    position: absolute;
    right: 8%;
    bottom: 18%;

    @media (max-width: 899px) {
      right: -24%;
      bottom: 5%;
    }
  }
  .shapeImg {
    position: absolute;
    left: 0;
    bottom: -18%;
    @media (max-width: 899px) {
      left: -13%;
      bottom: -45%;
    }
  }
  .testimonial_main {
    position: relative;

    h2 {
      text-align: center;
      text-transform: capitalize;
      color: ${primaryColors.textPrimaryColor};
    }
    .singleSlider {
      position: relative;
      padding: 0 10px;
      .msgText {
        max-width: 915px;
        margin: 0 auto 40px;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: ${primaryColors.mainFontColor};
        line-height: 1.7;
        @media (max-width: 599px) {
          margin-bottom: 18px;
          font-size: 14px;
        }
      }
      .userInfo {
        display: flex;
        align-items: center;
        justify-content: center;
        figure {
          position: relative;
          width: 45px;
          height: 45px;
          line-height: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
          i {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .infoText {
          padding-left: 15px;
          @media (max-width: 599px) {
            padding-left: 10px;
          }
          .nameText {
            font-weight: 600;
            font-size: 20px;
            text-transform: capitalize;
            color: ${primaryColors.primary};
            font-family: ${montserrat.style.fontFamily};

            @media (max-width: 599px) {
              font-size: 18px;
            }
          }
          .position {
            font-weight: 400;
            font-size: 13px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: ${primaryColors.mainFontColor};
            @media (max-width: 599px) {
              font-size: 11px;
            }
          }
        }
      }
    }
    .sliderMain {
      margin-top: 65px;
      @media (max-width: 1199px) {
        margin-top: 32px;
      }
      @media (max-width: 599px) {
        margin-top: 15px;
      }
      .slick-dots {
        position: relative;
        bottom: 0;
        margin-top: 30px;

        @media (max-width: 599px) {
          margin-top: 8px;
        }
        li {
          width: 7px;
          height: 7px;
          margin: 0 3px;
          padding: 0;
          &.slick-active {
            button {
              width: 8px;
              height: 8px;
              background: rgba(255, 188, 0, 1);
            }
          }
          button {
            width: 7px;
            height: 7px;
            background: rgba(255, 188, 0, 0.2);
            border-radius: 50%;
            padding: 0;
            &::before {
              display: none;
            }
          }
        }
      }
    }
    .testimonialBottom {
      margin-top: 100px;
      @media (max-width: 1199px) {
        margin-top: 60px;
      }
      @media (max-width: 899px) {
        margin-top: 40px;
      }
      @media (max-width: 599px) {
        margin-top: 30px;
      }
      .infoTextLft {
        position: relative;
        h3 {
          font-size: 38px;
          margin-bottom: 25px;
          font-weight: 600;
          text-transform: capitalize;
          color: ${primaryColors.textPrimaryColor};
          @media (max-width: 1199px) {
            font-size: 30px;
          }
          @media (max-width: 899px) {
            font-size: 24px;
            text-align: center;
            margin-bottom: 6px;
          }
          @media (max-width: 599px) {
            font-size: 18px;
          }
        }
        p {
          font-weight: 400;
          font-size: 16px;
          color: ${primaryColors.textPrimaryColor};

          @media (max-width: 899px) {
            font-size: 14px;
            text-align: center;
          }
        }
      }
      .reviewWrap {
        position: relative;
        @media (max-width: 374px) {
          text-align: center;
        }
        h4 {
          font-weight: 600;
          font-size: 30px;
          text-transform: capitalize;
          color: ${primaryColors.textPrimaryColor};
          margin-bottom: 10px;
          @media (max-width: 899px) {
            font-size: 24px;
            margin-bottom: 4px;
          }
          @media (max-width: 599px) {
            font-size: 20px;
          }
        }
        .MuiRating-root {
          margin-bottom: 10px;
          @media (max-width: 899px) {
            margin-bottom: 4px;
          }
          .MuiRating-icon {
            padding: 0 5px 0 0;
          }
        }
        p {
          font-weight: 400;
          font-size: 16px;
          text-transform: capitalize;
          color: ${primaryColors.mainFontColor};
          @media (max-width: 599px) {
            font-size: 14px;
          }
        }
      }
    }
  }
  @media (max-width: 374px) {
    .clmFullWidth {
      width: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`;
