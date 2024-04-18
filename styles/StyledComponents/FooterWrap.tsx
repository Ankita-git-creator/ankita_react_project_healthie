import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const FooterWrap = styled(Box)`
  position: relative;
  background: ${primaryColors.primary};
  .ftrTop_wrapper {
    padding: 80px 0;
    @media (max-width: 1199px) {
      padding: 60px 0;
    }
    @media (max-width: 599px) {
      padding: 30px 0;
    }
    .footerTopInfo {
      position: relative;
      text-align: center;
      a {
        display: inline-block;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        li {
          width: auto;
          padding: 0 10px;
          a {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 188, 0, 0.4);
            border-radius: 50%;
            &:hover {
              transform: scale(1.08);
            }
          }
        }
      }
      .wrapper_footerBox {
        display: flex;
        align-items: center;
        max-width: 962px;
        margin: 75px auto 0;
        justify-content: space-between;

        @media (max-width: 1199px) {
          margin-top: 40px;
        }
        @media (max-width: 899px) {
          flex-wrap: wrap;
          margin-top: 30px;
          justify-content: center;
        }
      }
      .textInfo {
        .titletext {
          font-family: ${montserrat.style.fontFamily};
          font-weight: 600;
          font-size: 24px;
          text-transform: capitalize;
          color: ${primaryColors.white};
          @media (max-width: 1199px) {
            font-size: 20px;
          }

          @media (max-width: 599px) {
            font-size: 14px;
          }
        }
        p {
          text-align: left;
          color: ${primaryColors.white};
          font-size: 16px;
          @media (max-width: 599px) {
            font-size: 12px;
          }
        }
      }
      .rightWrap {
        @media (max-width: 899px) {
          margin-top: 28px;
        }
        .textInfo {
          @media (max-width: 899px) {
            text-align: center;
            p {
              text-align: center;
            }
          }
        }
      }
      .leftWrap {
        display: flex;
        align-items: center;

        @media (max-width: 360px) {
          flex-wrap: wrap;
          justify-content: center;
        }
        .textInfo {
          padding-right: 40px;

          @media (max-width: 1199px) {
            padding-right: 20px;
          }

          @media (max-width: 360px) {
            width: 100%;
            padding: 0 0 10px;
            text-align: center;
            p {
              text-align: center;
            }
          }
        }
        button {
          width: 163px;
          height: 50px;
          background: ${primaryColors.white};
          border-radius: 5px;
          padding: 10px;
          font-size: 15px;
          font-weight: 500;
          color: ${primaryColors.primary};

          @media (max-width: 1199px) {
            width: auto;
            padding: 8px 20px;
            height: auto;
          }
          &:hover {
            background: ${primaryColors.secondary};
            color: ${primaryColors.white};
          }
        }
      }
    }
  }
  .footerBtm {
    padding: 28px 0;
    position: relative;
    @media (max-width: 1199px) {
      padding: 20px 0;
    }
    @media (max-width: 899px) {
      padding: 15px 0;
    }
    @media (max-width: 599px) {
      padding: 12px 0;
    }
    &::before {
      position: absolute;
      content: "";
      left: 30px;
      right: 30px;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      top: 0;
    }
    .copyright {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 599px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      p {
        font-size: 15px;
        color: ${primaryColors.color979797};

        @media (max-width: 599px) {
          font-size: 13px;
          width: 100%;
          text-align: center;
        }
        a {
          color: ${primaryColors.color979797};
          &:hover {
            color: ${primaryColors.white};
          }
        }
      }
    }
  }
`;
