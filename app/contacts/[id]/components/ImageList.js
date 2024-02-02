import { Grid } from "@mui/material";
import { ImageItem } from "./ImageItem";

const ImageList = ({ values, setFieldValue }) => {
  return (
    <>
      {values["profileImage"].map((img, index) => (
        <ImageItem
          key={img.name}
          img={img}
          setFieldValue={setFieldValue}
          values={values}
          index={index}
        />
      ))}
    </>
  );
};
export { ImageList };
