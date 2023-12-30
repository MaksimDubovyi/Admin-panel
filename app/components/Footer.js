"use client";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "50px",
        backgroundColor: "black",
      }}
    >
      <hr />

      <Typography
        mt={1}
        align="center"
        color="textSecondaty"
        component="p"
        variant="subtitle1"
        sx={{ color: "white" }}
      >
        Next.js React Material Ui side
      </Typography>
    </div>
  );
};

export { Footer };
