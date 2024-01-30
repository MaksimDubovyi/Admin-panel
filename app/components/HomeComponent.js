"use client";
import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";

const HomeComponent = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && session.user ? (
        <Typography variant="h3" align="center" color="textPrimary">
          Hi - {session.user.name}
        </Typography>
      ) : null}
    </>
  );
};

export { HomeComponent };
