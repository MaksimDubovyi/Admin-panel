
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
      border={2}
      borderColor="white"
      borderRadius={5}
      boxShadow="5px 8px 10px grey"
    > 
      {navLinks.map((link) => {
                   const isActive = pathname === link.href;
                   const linkClasses = isActive ? `secondary` : "success";
        return (

        <Box key={link.href} mr={1} ml={1}>
          <Button  component="a" href={link.href} variant='contained' color={linkClasses}>{link.label}</Button>
        </Box>
      )})}
    </Box>
  );
};

export { ButtonLink };