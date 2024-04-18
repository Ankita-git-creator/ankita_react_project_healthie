import { primaryColors } from "@/themes/_muiPalette";
import { roboto } from "@/themes/_muiTheme";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  /* &.activeHeader {
    .header_topsection {
      transform: translateY(-100%);
      padding: 0;
      height: 0;
      transition: all 0.4s;
      font-size: 0;
      pointer-events: none;
      opacity: 0;
    }
    .headerContainer {
      background-color: white !important;
      border-top: 1px solid #220b600f;
      box-shadow: 0px 15px 30px 0px #220b600f;
      padding: 10px 0;
      transition: all 0.4s;
    }
  } */
  .header_topsection {
    padding: 10px 20px;
    background-color: ${primaryColors.white};
    transition: all 0.4s;

    .header_Tiledetails {
      @media (max-width: 599px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      .title_section {
        font-size: 11px;
        font-weight: 500;
        line-height: 12.89px;
        letter-spacing: 0.13em;
        text-transform: uppercase;
        color: ${primaryColors.textPrimaryColor};
        display: flex;
        align-items: center;
        @media (max-width: 599px) {
          font-size: 10px;
          width: 100%;
          justify-content: center;
        }
        .flg_icon {
          display: inline-block;
          line-height: 0;
          font-size: 0;
          margin-right: 8px;
        }
      }
      a {
        display: inline-block;
        font-size: 11px;
        font-weight: 500;
        line-height: 12.89px;
        letter-spacing: 0.13em;
        text-transform: uppercase;
        text-decoration: underline;
        color: ${primaryColors.primary};
        margin-left: 4px;
        @media (max-width: 599px) {
          font-size: 10px;
          margin: 4px 0 0 0;
        }
        &:hover {
          color: ${primaryColors.textPrimaryColor};
        }
      }
    }
  }

  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
    justify-content: space-between;
  }
  .hdr_rgt {
    margin-left: 20px;
    display: flex;
    align-items: center;
    button {
      margin-right: 30px;

      @media (max-width: 599px) {
        margin-right: 18px;
      }
      span {
        font-family: ${roboto.style.fontFamily};
        line-height: 1.3;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .fee_quotebtn {
      padding: 0;
      background-color: transparent;
      transition: all 0.3s ease-in-out;
      span {
        text-decoration: underline;
        color: ${primaryColors.primary};
        font-weight: 500;
        text-transform: capitalize;
        @media (max-width: 599px) {
          font-size: 12px;
        }
      }
      &:hover {
        span {
          color: ${primaryColors.secondary};
        }
      }
    }
    .call_btnsection {
      min-width: 163px;
      padding: 15px 34px;
      height: 50px;
      span {
        font-weight: 500;
        text-transform: capitalize;
      }
      @media (max-width: 599px) {
        min-width: 119px;
        padding: 8px 13px;
        height: 34px;
        span {
          font-size: 12px;
          line-height: 1;
        }
        svg {
          width: 14px;
          height: 14px;
        }
      }
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 24px 0;
    transition: all 0.4s;
    @media (max-width: 599px) {
      padding: 20px 0;
    }
  }

  .headerLogo {
    width: 55px;
    display: inline-block;
    transition: all 0.4s;

    @media (max-width: 599px) {
      width: 38px;
    }
  }
  /* .navbar {
    margin-left: auto;
    a {
      margin-right: 45px;
      display: inline-block;
      color: ${primaryColors.textPrimaryColor};
      font-size: 15px;
      &:hover {
        color: ${primaryColors.primary};
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.primary};
      }
    }
  } */
`;
