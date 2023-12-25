"use client";
import {
  Container,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <>
      <Container sx={{ mt: "50px" }}>
        <Typography variant="h5" align="center" color="textSecondary">
          Material UI{" "}
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          Admin panel
        </Typography>
      </Container>
    </>
  );
}
