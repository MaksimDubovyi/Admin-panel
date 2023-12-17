import { Paper } from "@mui/material";

export default function NotFoound()
{
    return (
      <Paper
        sx={{
          width: "100vw",
          height: "90vh",
          backgroundImage: `url(https://cdn2.mageplaza.com/media/blog/404-not-found-nginx/what-is-404-not-found-nginx.jpg)`,
          backgroundSize: "100%",
        }}
      />
    );
}