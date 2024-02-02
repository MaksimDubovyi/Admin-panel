import { Button, CardMedia, Typography, Card } from "@mui/material";

function formatFileSize(sizeInBytes) {
  if (sizeInBytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = parseInt(Math.floor(Math.log(sizeInBytes) / Math.log(k)));
  return parseFloat((sizeInBytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

const ImageItem = ({ img, setFieldValue, values, index }) => {
  return (
    <Card sx={{ maxWidth: 150, m: 1 }}>
      <CardMedia
        component="img"
        image={`http://164.92.243.161:5001/${img.name}`}
        alt="green iguana"
      />

      <Typography gutterBottom variant="h5">
        size: {formatFileSize(img.size)}
      </Typography>

      <Button
        size="large"
        color="error"
        onClick={() => {
          const updatedImages = values.profileImage.filter(
            (_, i) => i !== index
          );
          setFieldValue("profileImage", updatedImages);
        }}
      >
        delete
      </Button>
    </Card>
  );
};
export { ImageItem };
