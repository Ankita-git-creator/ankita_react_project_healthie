import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const RequestCallbackWrapper = styled(Box)`
  .wrapper_mainCallBack {
    position: relative;
    padding: 95px 0 0;

    @media (max-width: 1199px) {
      padding: 60px 0 0;
    }
    @media (max-width: 599px) {
      padding: 38px 0 0;
    }
    figure {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      line-height: 0;
      &::before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(34, 11, 96, 0.7);
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
        min-height: 525px;
        object-fit: cover;
        @media (max-width: 1199px) {
          min-height: 350px;
        }
        @media (max-width: 599px) {
          min-height: 150px;
        }
      }
    }
    .topTitle {
      position: relative;
      z-index: 2;
      h2 {
        text-align: center;
        color: ${primaryColors.white};
        text-transform: capitalize;
      }
    }
    .formWRapperList {
      position: relative;
      z-index: 2;
      background: ${primaryColors.white};
      box-shadow: 0px 46px 60.8px -15px rgba(34, 11, 96, 0.08);
      border-radius: 10px;
      padding: 65px 49px 52px;
      margin-bottom: -173px;
      margin-top: 80px;
      @media (max-width: 899px) {
        padding: 30px 24px;
        margin-top: 30px;
      }
      @media (max-width: 599px) {
        padding: 20px 15px;
        margin-top: 22px;
      }
      .btnWrap {
        position: relative;
        margin-top: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          @media (max-width: 479px) {
            padding: 9px 16px;
            min-width: 126px;
            p {
              font-size: 12px;
            }
          }
          p {
            font-weight: 500;
          }
        }
      }
    }
  }
`;
