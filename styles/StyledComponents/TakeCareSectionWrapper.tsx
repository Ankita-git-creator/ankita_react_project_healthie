import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const TakeCareSectionWrapper = styled(Box)`
  .wrapper_wecare {
    position: relative;
    background: ${primaryColors.white};
    box-shadow: 0px 0px 60.8px -15px rgba(34, 11, 96, 0.08);
    border-radius: 10px;
    padding: 40px 38px;
    margin-bottom: -140px;
    z-index: 9;
    @media (max-width: 1199px) {
      padding: 30px 25px;
      margin-bottom: -110px;
    }
    @media (max-width: 899px) {
      padding: 20px 10px;
      margin-bottom: -140px;
    }
    .listInfoCare {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 899px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      .leftWrapInfo {
        display: flex;
        align-items: center;

        @media (max-width: 899px) {
          width: 100%;
          margin-bottom: 18px;
          flex-wrap: wrap;
          justify-content: center;
        }
        i {
          width: 98px;
          height: 98px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: ${primaryColors.colorF3F4F8};
          @media (max-width: 899px) {
            width: 56px;
            height: 56px;
            svg {
              width: 24px;
              height: 24px;
            }
          }
        }
        .textInfo {
          width: calc(100% - 98px);
          padding-left: 27px;

          @media (max-width: 899px) {
            width: 100%;
            padding: 15px 0 0;
            text-align: center;
          }
          p {
            font-weight: 400;
            font-size: 14px;
            color: ${primaryColors.mainFontColor};

            @media (max-width: 599px) {
              font-size: 13px;
            }
          }
          h2 {
            margin-bottom: 10px;
            text-transform: capitalize;
            color: ${primaryColors.textPrimaryColor};

            @media (max-width: 899px) {
              font-size: 20px;
              margin-bottom: 4px;
            }
            @media (max-width: 599px) {
              font-size: 16px;
            }
          }
        }
      }
      button {
        @media (max-width: 599px) {
          padding: 9px 20px;
          min-width: auto;
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
        }
        p {
          display: flex;
          align-items: center;
          text-transform: capitalize;

          @media (max-width: 599px) {
            font-size: 12px;
          }
          svg {
            margin-right: 10px;

            @media (max-width: 599px) {
              width: 14px;
              height: 14px;
              margin-right: 6px;
            }
          }
        }
      }
    }
  }
`;
