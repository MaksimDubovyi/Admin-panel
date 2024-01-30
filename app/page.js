import { Container, Typography } from "@mui/material";
import { HomeComponent } from "./components/HomeComponent";
export default function Home() {
  return (
    <>
      <Container sx={{ mt: "50px" }}>
        <HomeComponent />
        <Typography variant="h1" align="center" color="textPrimary">
          Admin panel 2.0
        </Typography>
      </Container>
    </>
  );
}
