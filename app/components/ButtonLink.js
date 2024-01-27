"use client";
import { Box, Button, Grid } from "@mui/material";
import { usePathname } from "next/navigation";
import { SignInForm } from "./SignInForm";
import { useSession } from "next-auth/react";
const ButtonLink = ({ navLinks }) => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={2}
      p={2}
      boxShadow="2px 2px 10px grey"
    >
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <SignInForm />
        </Grid>
        {session && session.user.image
          ? navLinks.map((link) => {
              const isActive = pathname === link.href;
              const linkClasses = isActive ? `error` : "inherit";
              return (
                <Grid item key={link.href} xs={2}>
                  <Button
                    component="a"
                    href={link.href}
                    variant="contained"
                    color={linkClasses}
                  >
                    {link.label}
                  </Button>
                </Grid>
              );
            })
          : null}
      </Grid>
    </Box>
  );
};

export { ButtonLink };
