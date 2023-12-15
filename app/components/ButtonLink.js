import Link from "next/link";
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';

const ButtonLink = ({ navLinks }) => {
  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={2}
      p={2}
      border={2}
      borderColor="white"
      borderRadius={5}
      boxShadow="1px 2px 3px red"
    >
      {navLinks.map((link) => (
        <Box key={link.href} mr={1} ml={1}>
          <Link href={link.href} passHref>
            <Button color="inherit" variant="outlined">
              {link.label}
            </Button>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export { ButtonLink };