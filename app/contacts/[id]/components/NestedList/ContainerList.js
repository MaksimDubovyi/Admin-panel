import List from "@mui/material/List";
import { ContainerListItem } from "./ContainerListItem";
import { useContext } from "react";
import NestedContext from "./NestedContext";

const ContainerList = () => {
  const { data } = useContext(NestedContext);
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {data.map((item) => (
        <ContainerListItem key={item.id} item={item} />
      ))}
    </List>
  );
};

export { ContainerList };
