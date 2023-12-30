import { useContext, useState } from "react";
import {
  ListItemIcon,
  Checkbox,
  ListItemButton,
  Collapse,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import NestedContext from "./NestedContext";
import { useSelected } from "../useSelected";

const ContainerListItem = ({ item, level = 0 }) => {
  const { data, selected, onSelect } = useContext(NestedContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const subitems = data.filter(
    (x) => x.id === item.id && x.children && x.children.length > 0
  );

  const checked = useSelected(item.id);

  if (subitems.length) {
    return (
      <>
        <ListItemButton onClick={handleClick} sx={{ pl: level * 4 }}>
          <ListItemText primary={item.label} id={item.id} sx={{ pl: 7 }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {subitems[0].children.map((x) => (
            <ContainerListItem key={x.id} item={x} level={level + 1} />
          ))}
        </Collapse>
      </>
    );
  }

  return (
    <ListItemButton
      id={`listItemButton_${item.id}`}
      sx={{ pl: level * 4 }}
      onClick={() => onSelect(item.id)}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": item.id }}
        />
      </ListItemIcon>
      <ListItemText primary={item.label} id={item.id} />
    </ListItemButton>
  );
};

export { ContainerListItem };
