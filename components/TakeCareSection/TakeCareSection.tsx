import { TakeCareSectionWrapper } from "@/styles/StyledComponents/TakeCareSectionWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CallIcon from "@/ui/Icons/CallIcon";
import TakeCareIcon from "@/ui/Icons/TakeCareIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function TakeCareSection() {
  const router = useRouter();
  return (
    <TakeCareSectionWrapper>
      <Container fixed>
        <Box className="wrapper_wecare">
          <Box className="listInfoCare">
            <Box className="leftWrapInfo">
              <i>
                <TakeCareIcon />
              </i>
              <Box className="textInfo">
                <Typography variant="h2">We take care of you</Typography>
                <Typography variant="body1">
                  Stay close with us and get your coverage today.
                </Typography>
              </Box>
            </Box>
            <CustomButtonPrimary
              variant="contained"
              color="secondary"
              onClick={() => {
                router.push("tel:1234567890");
              }}
            >
              <Typography variant="body1">
                <CallIcon />
                call us now
              </Typography>
            </CustomButtonPrimary>
          </Box>
        </Box>
      </Container>
    </TakeCareSectionWrapper>
  );
}
