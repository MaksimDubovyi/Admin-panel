
import { Box, Button } from '@mui/material';
import { usePathname } from "next/navigation";


const ButtonLink = ({ navLinks }) => {
  const pathname = usePathname();


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
      {navLinks.map((link) => {
                   const isActive = pathname === link.href;
                   const linkClasses = isActive ? `error` : "inherit";
        return (

        <Box key={link.href} mr={1} ml={1}>
          <Button  component="a" href={link.href} variant='contained' color={linkClasses}>{link.label}</Button>
        </Box>
      )})}
    </Box>
  );
};

export { ButtonLink };