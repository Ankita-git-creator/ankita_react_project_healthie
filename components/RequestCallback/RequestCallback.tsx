import assest from "@/json/assest";
import { RequestCallbackWrapper } from "@/styles/StyledComponents/RequestCallbackWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import ModalIconOne from "@/ui/Icons/ModalIconOne";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Inputs = {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  state: string;
  zip: number;
};

const schema = yup.object({
  email: yup.string().email(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone: yup
    .string()
    .matches(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      "Phone number must be in the format (XXX) XXX-XXXX"
    )
    .required(),
  state: yup.string().required(),
  zip: yup.number().required()
});

export default function RequestCallback() {
  const [callListDetails, setCallListDetails] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const handelModalCallOpen = () => {
    setCallListDetails(true);
  };
  const handelModalCallClose = () => {
    setCallListDetails(false);
  };

  const submitForm = (data: Inputs) => {
    console.log(data);
    handelModalCallOpen();
    reset({
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      state: "",
      zip: 0
    });
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
                    {...register("first_name")}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {errors?.first_name?.message}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <InputFieldCommon
                    placeholder="Duo"
                    isLabel
                    labelText="Last name*"
                    {...register("last_name")}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {errors?.last_name?.message}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <InputFieldCommon
                    placeholder="(406) 555-0120"
                    isLabel
                    labelText="phone number*"
                    {...register("phone")}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {errors?.phone?.message}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <InputFieldCommon
                    placeholder="alma.lawson@example.com"
                    isLabel
                    labelText="email (Optional)"
                    {...register("email")}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {errors?.email?.message}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <InputFieldCommon
                    placeholder="12345"
                    isLabel
                    labelText="Zip code*"
                    {...register("zip")}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {errors?.zip?.message}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                  <InputFieldCommon
                    placeholder="State Name"
                    isLabel
                    labelText="State*"
                    {...register("state")}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {errors?.state?.message}
                  </Typography>
                </Grid>
              </Grid>
              <Box className="btnWrap">
                <CustomButtonPrimary
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(submitForm)}
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
