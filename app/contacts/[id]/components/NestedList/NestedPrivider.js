import { useCallback, useState } from "react";
import { Typography, Button, Collapse } from "@mui/material";
import { ContainerList } from "./ContainerList";
import NestedContext from "./NestedContext";

const NestedPrivider = ({ data, title, selected, onSelect, name }) => {
  const [openList, setOpenList] = useState(false);

  const handleClickList = () => {
    setOpenList(!openList);
  };

  const selectHandler = useCallback(
    (id) => {
      const nextSelected = selected.slice();

      const index = nextSelected.indexOf(id);
      if (index !== -1) {
        nextSelected.splice(index, 1);
      } else {
        nextSelected.push(id);
      }

      onSelect([...nextSelected], name);
    },
    [onSelect, selected]
  );

  return (
    <NestedContext.Provider value={{ data, selected, onSelect: selectHandler }}>
      <Typography sx={{ display: "inline-block" }}>{title}</Typography>
      <Button
        sx={{ float: "right" }}
        variant="contained"
        onClick={handleClickList}
      >
        Open
      </Button>

      <Collapse in={openList} timeout="auto" unmountOnExit>
        <ContainerList />
      </Collapse>
    </NestedContext.Provider>
  );
};

export { NestedPrivider };
