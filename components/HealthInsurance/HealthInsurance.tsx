/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
import { carddataList } from "@/json/mock/healthCardList";
import { HealthInsuranceWrap } from "@/styles/StyledComponents/HealthInsuranceWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function HealthInsurance() {
  return (
    <HealthInsuranceWrap>
      <Box className="mainHealthins">
        <Container fixed>
          <Box className="wrapMainHealth">
            <Typography variant="h2">
              find the perfect health insurance for your needs
            </Typography>
            <Box className="cardAllWrap">
              <Grid container spacing={{ lg: 3, xs: 2 }}>
                {carddataList.map((item, index) => (
                  <Grid item lg={4} md={6} xs={12} key={index}>
                    <Box className="innerCard_wrap">
                      <i>{item.iconPath}</i>
                      <Typography variant="body1" className="titleText">
                        {item.titleText}
                      </Typography>
                      <Typography variant="body1">{item.subText}</Typography>
                      <CustomButtonPrimary variant="contained" color="primary">
                        <Typography variant="body1">
                          Get a free quote
                        </Typography>
                      </CustomButtonPrimary>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </HealthInsuranceWrap>
  );
}
