import assest from "@/json/assest";
import { RequestCallbackWrapper } from "@/styles/StyledComponents/RequestCallbackWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import ModalIconOne from "@/ui/Icons/ModalIconOne";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";

export default function RequestCallback() {
  const [callListDetails, setCallListDetails] = React.useState(false);

  const handelModalCallOpen = () => {
    setCallListDetails(true);
  };
  const handelModalCallClose = () => {
    setCallListDetails(false);
  };
  return (
    <>
      <RequestCallbackWrapper id="free-quote">
        <Box className="wrapper_mainCallBack">
          <figure>
            <Image src={assest.callBackImg} alt="" width={1920} height={525} />
          </figure>
          <Container fixed>
            <Box className="topTitle">
              <Typography variant="h2">Request a callback</Typography>
            </Box>
            <Box className="formWRapperList">
              <Grid container spacing={{ lg: 3, xs: 2 }}>
                <Grid item lg={6} md={6} xs={6}>
                  <InputFieldCommon
                    placeholder="John"
                    isLabel
                    labelText="first name*"
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <InputFieldCommon
                    placeholder="Duo"
                    isLabel
                    labelText="Last name*"
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <InputFieldCommon
                    placeholder="(406) 555-0120"
                    isLabel
                    labelText="phone number*"
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <InputFieldCommon
                    placeholder="alma.lawson@example.com"
                    isLabel
                    labelText="email (Optional)"
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <InputFieldCommon
                    placeholder="12345"
                    isLabel
                    labelText="Zip code*"
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <InputFieldCommon
                    placeholder="State Name"
                    isLabel
                    labelText="State*"
                  />
                </Grid>
              </Grid>
              <Box className="btnWrap">
                <CustomButtonPrimary
                  variant="contained"
                  color="primary"
                  onClick={handelModalCallOpen}
                >
                  <Typography variant="body1">Submit</Typography>
                </CustomButtonPrimary>
              </Box>
            </Box>
          </Container>
        </Box>
      </RequestCallbackWrapper>
      <MuiModalWrapper
        open={callListDetails}
        title=""
        onClose={handelModalCallClose}
        className="callDataModal"
      >
        <Box className="detailCallModal">
          <i>
            <ModalIconOne />
          </i>
          <Typography variant="h2">
            An agent will contact you shortly to finalize your plan
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sagittis.
          </Typography>
        </Box>
      </MuiModalWrapper>
    </>
  );
}
