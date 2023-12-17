import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaceIcon from '@mui/icons-material/Face';
import { Box, IconButton, Typography } from '@mui/material';


const ContactValue =({icon, content})=>{

    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="add to favorites">
          {icon === "FaceIcon" && <FaceIcon />}
          {icon === "LocalPhoneIcon" && <LocalPhoneIcon />}
        </IconButton>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginLeft: "10px" }}
        >
          {content}
        </Typography>
      </Box>
    );
}

export {ContactValue}

