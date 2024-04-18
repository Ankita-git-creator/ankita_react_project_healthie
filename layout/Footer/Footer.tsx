/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { useSiteContents } from "@/hooks/react-query/query-hooks/homeQuery.hooks";
import assest from "@/json/assest";
import { dataCallList } from "@/json/mock/callListData.mock";
import { FooterWrap } from "@/styles/StyledComponents/FooterWrap";
import FooterSocialIonFour from "@/ui/Icons/FooterSocialIonFour";
import FooterSocialIonOne from "@/ui/Icons/FooterSocialIonOne";
import FooterSocialIonThree from "@/ui/Icons/FooterSocialIonThree";
import FooterSocialIonTwo from "@/ui/Icons/FooterSocialIonTwo";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Footer = () => {
  const router = useRouter();

  const [callList, setCallList] = React.useState(false);
  const handelModalOpen = () => {
    setCallList(true);
  };
  const handelModalClose = () => {
    setCallList(false);
  };

  const { data: siteContentInfo, isLoading, refetch } = useSiteContents(false);
  console.log("siteContentInfo", siteContentInfo);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <FooterWrap>
        <Container fixed>
          <Box className="ftrTop_wrapper">
            <Box className="footerTopInfo">
              <Link href="/" className="ftr-logo">
                <Image
                  src={assest.footerLogo}
                  alt="logo"
                  width={50}
                  height={47}
                />
              </Link>
              <List disablePadding>
                <ListItem disablePadding>
                  {siteContentInfo?.fb_link && (
                    <Link href={siteContentInfo.fb_link}>
                      <FooterSocialIonOne />
                    </Link>
                  )}
                </ListItem>
                <ListItem disablePadding>
                  {siteContentInfo?.insta_link && (
                    <Link href={siteContentInfo.insta_link}>
                      <FooterSocialIonTwo />
                    </Link>
                  )}
                </ListItem>
                <ListItem disablePadding>
                  {siteContentInfo?.twitter_link && (
                    <Link href={siteContentInfo.twitter_link}>
                      <FooterSocialIonThree />
                    </Link>
                  )}
                </ListItem>
                <ListItem disablePadding>
                  {siteContentInfo?.linkedin_link && (
                    <Link href={siteContentInfo.linkedin_link}>
                      <FooterSocialIonFour />
                    </Link>
                  )}
                </ListItem>
              </List>
              <Box className="wrapper_footerBox">
                <Box className="leftWrap">
                  <Box className="textInfo">
                    <Typography variant="body1" className="titletext">
                      Click here to find your
                    </Typography>
                    <Typography variant="body1">
                      Get your free instant quote here
                    </Typography>
                  </Box>
                  <Button type="button" onClick={handelModalOpen}>
                    State numbers
                  </Button>
                </Box>
                <Box className="rightWrap">
                  <Box className="textInfo">
                    <Typography variant="body1" className="titletext">
                      Keep it touch
                    </Typography>
                    <Typography variant="body1">
                      Stay close with us and get your coverage today.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box className="footerBtm">
          <Container fixed>
            <Box className="copyright">
              <Typography variant="body1">
                © 2024 <Link href="/">Healthie</Link>. All rights reserved.
              </Typography>
              <Typography variant="body1">
                Website Design by <Link href="/">Webskitters</Link>
              </Typography>
            </Box>
          </Container>
        </Box>
      </FooterWrap>

      <MuiModalWrapper
        open={callList}
        title=""
        onClose={handelModalClose}
        className="callDataModal"
      >
        <Box className="wrapper_callListModa">
          <Typography variant="h2">Our local Offices</Typography>
          <List disablePadding className="phoneCallList">
            {dataCallList.map((item, index) => (
              <ListItem disablePadding key={index}>
                <Typography variant="body1">{item.title}</Typography>
                <Link href={`tel:${item.linkPhone}`}>{item.phoneNo}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </MuiModalWrapper>
    </>
  );
};

export default Footer;
