import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HealthInsuranceWrap = styled(Box)`
  margin-top: 50px;

  @media (max-width: 1199px) {
    margin-top: 30px;
  }
  @media (max-width: 599px) {
    margin-top: 20px;
  }
  .mainHealthins {
    position: relative;
    padding: 170px 0 100px;
    background: ${primaryColors.colorF3F4F8};
    @media (max-width: 1199px) {
      padding: 120px 0 60px;
    }
    @media (max-width: 899px) {
      padding: 155px 0 40px;
    }
    .wrapMainHealth {
      position: relative;
      h2 {
        text-align: center;
        margin-bottom: 50px;
        text-transform: capitalize;
        color: ${primaryColors.textPrimaryColor};
        @media (max-width: 899px) {
          margin-bottom: 30px;
        }
        @media (max-width: 599px) {
          margin-bottom: 20px;
        }
      }
      .innerCard_wrap {
        position: relative;
        background: ${primaryColors.white};
        border: 1px solid rgba(34, 11, 96, 0.06);
        box-shadow: 0px 15px 30px rgba(34, 11, 96, 0.06);
        border-radius: 10px;
        padding: 38px 30px 25px;
        height: 100%;
        display: flex;
        flex-direction: column;
        @media (max-width: 1199px) {
          padding: 30px 25px;
        }
        @media (max-width: 599px) {
          padding: 30px 20px 20px;
        }
        i {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 1px solid rgba(34, 11, 96, 0.07);
          box-shadow: 0px 15px 26.4px -6px rgba(81, 38, 195, 0.12);
          border-radius: 50%;
          margin-right: auto;
          margin-bottom: 20px;
          @media (max-width: 599px) {
            width: 70px;
            height: 70px;
          }
        }
        .titleText {
          font-weight: 600;
          font-size: 18px;
          text-transform: capitalize;
          color: ${primaryColors.textPrimaryColor};
          margin-bottom: 10px;

          @media (max-width: 599px) {
            font-size: 15px;
          }
        }
        p {
          font-weight: 400;
          font-size: 14px;
          color: ${primaryColors.mainFontColor};
          margin-bottom: 20px;
          line-height: 1.7;
          @media (max-width: 599px) {
            font-size: 13px;
          }
        }
        button {
          margin-top: auto;
          padding: 9px 16px;
          min-width: auto;
          max-width: 140px;
          @media (max-width: 479px) {
            max-width: 126px;
            padding: 8px 16px;
          }
          p {
            color: ${primaryColors.white};
            font-size: 14px;
            font-weight: 500;
            margin: 0;
            text-transform: capitalize;
            @media (max-width: 479px) {
              font-size: 12px;
            }
          }
        }
      }
    }
    .wetakeCareBox {
      position: relative;
      z-index: 9;
      background: ${primaryColors.white};
      box-shadow: 0px 0px 60.8px -15px rgba(34, 11, 96, 0.08);
      border-radius: 10px;
    }
  }
`;
