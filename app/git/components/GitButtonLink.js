import { Button } from "@mui/material";

const GitButtonLink = ({list}) => {
  return (
    <ol>
      {list.data.map((item) => (
        <li container key={item.subtitle}>
          <Button
            sx={{ m: "5px" }}
            component="a"
            href={"#" + item.subtitle}
            variant="contained"
            color="primary"
          >
            {item.subtitle}
          </Button>
        </li>
      ))}
    </ol>
  );
};

export { GitButtonLink };
