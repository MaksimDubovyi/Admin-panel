"use client";
import { Container, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Container sx={{ mt: "50px" }}>
        {session && session.user ? (
          <Typography variant="h3" align="center" color="textPrimary">
            Hi - {session.user.name}
          </Typography>
        ) : null}
        <Typography variant="h1" align="center" color="textPrimary">
          Admin panel 2.0
        </Typography>
      </Container>
    </>
  );
}
