import assest from "@/json/assest";
import DotIcon from "@/ui/Icons/DotIcon";
import StarIcon from "@/ui/Icons/StarIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const BannerWrapper = styled(Box)`
  width: 100%;
  padding: 50px 0 50px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  border-radius: none;
`;

const buttonStyles = {
  color: "#1976d2",
  bgcolor: "rgba(25, 117, 210, 0.3)",
  "&:hover": {
    bgcolor: "rgba(25, 117, 210, 0.3)",
    boxShadow: "none"
  },
  height: "23px",
  textTransform: "none",
  "& .MuiButton-startIcon": {
    marginBottom: "2px"
  },
  boxShadow: "none"
};

function Index() {
  const blogArray = [
    {
      id: 1,
      featured: "Labelbox Accelerate 2021",
      labelbox: "Labelbox",
      date: "November 07, 2021",
      image: assest.banner_1,
      title: "Labelbox November Updates",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 1,
      featured: "Labelbox Accelerate 2021",
      labelbox: "Labelbox",
      date: "November 07, 2021",
      image: assest.banner_1,
      title: "Labelbox November Updates",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 1,
      featured: "Labelbox Accelerate 2021",
      labelbox: "Labelbox",
      date: "November 07, 2021",
      image: assest.banner_1,
      title: "Labelbox November Updates",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 1,
      featured: "Labelbox Accelerate 2021",
      labelbox: "Labelbox",
      date: "November 07, 2021",
      image: assest.banner_1,
      title: "Labelbox November Updates",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  return (
    <BannerWrapper>
      <StyledContainer>
        <StyledCard>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={assest.banner_1}
          />
          <CardActions>
            <Button
              variant="contained"
              size="small"
              startIcon={<StarIcon />}
              sx={buttonStyles}
            >
              Featured
            </Button>
            <Button
              sx={{ color: "#5c5b5b", textTransform: "none" }}
              size="small"
            >
              Labelbox
            </Button>
            <Button
              sx={{ color: "#5c5b5b", textTransform: "none" }}
              size="small"
              startIcon={<DotIcon />}
            >
              November 07, 2021
            </Button>
          </CardActions>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Stop labelling data blindly
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </CardContent>
        </StyledCard>
        <Grid container spacing={4}>
          {blogArray.map((item) => (
            <Grid item xs={6} md={6} key={item.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={item.image}
                />
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<StarIcon />}
                    sx={buttonStyles}
                  >
                    {item.featured}
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    sx={{ color: "#5c5b5b", textTransform: "none" }}
                    size="small"
                  >
                    {item.labelbox}
                  </Button>
                  <Button
                    sx={{ color: "#5c5b5b", textTransform: "none" }}
                    size="small"
                    startIcon={<DotIcon />}
                  >
                    {item.date}
                  </Button>
                </CardActions>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </BannerWrapper>
  );
}

export default Index;
