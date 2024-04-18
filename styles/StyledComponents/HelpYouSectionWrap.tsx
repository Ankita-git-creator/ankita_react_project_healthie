import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HelpYouSectionWrap = styled(Box)`
  position: relative;
  .lineShapeImg {
    position: absolute;
    left: 0;
    top: -117px;

    @media (max-width: 1199px) {
      width: 30%;
      top: -60px;
    }
    @media (max-width: 899px) {
      top: -50px;
    }
    @media (max-width: 599px) {
      top: -110px;
      width: 80%;
    }

    @media (max-width: 479px) {
      top: -10%;
    }
  }
  .helpYouMain {
    position: relative;
    padding: 110px 0;
    @media (max-width: 1199px) {
      padding: 60px 0;
    }
    @media (max-width: 899px) {
      padding: 40px 0;
    }
    @media (max-width: 599px) {
      padding: 35px 0;
    }

    .topTitle {
      position: relative;
      max-width: 799px;
      margin: 0 auto 40px;

      @media (max-width: 479px) {
        margin-bottom: 20px;
      }
      h2 {
        text-align: center;
        text-transform: capitalize;
      }
    }
    .sliderMainWrap {
      @media (max-width: 479px) {
        margin-right: -16px;
      }
      .slick-slide {
        padding: 0 18px;
        @media (max-width: 479px) {
          padding: 0 10px;
        }
      }
      .slick-list {
        margin: 0 -18px;
        @media (max-width: 479px) {
          padding: 0 100px 0 0 !important;
          margin: 0 0 0 -10px;
        }
        @media (max-width: 374px) {
          padding: 0 40px 0 0 !important;
        }
      }
    }
    .sliderCardInner {
      position: relative;
      display: flex !important;
      flex-direction: column;
      height: 100%;
      min-height: 545px;
      @media (max-width: 599px) {
        min-height: 540px;
      }
      @media (max-width: 479px) {
        min-height: 480px;
      }
      figure {
        width: 100%;
        line-height: 0;
        margin-bottom: 22px;
        min-height: 294px;
        display: flex;
        align-items: flex-end;

        @media (max-width: 479px) {
          min-height: auto;
        }
        img {
          width: 100%;
          @media (max-width: 479px) {
            max-height: 250px;
            object-fit: contain;
          }
        }
      }
      .titleText {
        font-weight: 700;
        font-size: 16px;
        text-transform: capitalize;
        color: ${primaryColors.textPrimaryColor};
        margin-bottom: 12px;
        @media (max-width: 599px) {
          font-size: 15px;
          margin-bottom: 10px;
        }
      }
      ul {
        padding: 0;
        margin-bottom: 12px;
        @media (max-width: 479px) {
          margin-bottom: 10px;
        }
        li {
          position: relative;
          padding: 0 0 6px 20px;
          font-weight: 400;
          font-size: 14px;
          color: ${primaryColors.mainFontColor};
          @media (max-width: 599px) {
            font-size: 13px;
          }

          @media (max-width: 479px) {
            padding: 0 0 4px 16px;
          }
          &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 6px;
            background: url("/assets/images/ticArrow.svg");
            width: 10px;
            height: 10px;
            background-size: 100%;
          }
          &:last-child {
            padding-bottom: 0;
          }
        }
      }
      button {
        max-width: 163px;
        padding: 10px 16px;
        margin-top: auto;
        @media (max-width: 599px) {
          max-width: 146px;
          padding: 7px 16px;
          margin-top: auto;
          min-width: 146px;
        }
        p {
          font-size: 14px;
          font-weight: 500;
          text-transform: capitalize;
          @media (max-width: 599px) {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
