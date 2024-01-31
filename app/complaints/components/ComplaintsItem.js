"use client";
import { parse, format } from "date-fns";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import style from "./complaintsItem.module.css";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ComplaintStatuses, Complaint } from "../data";

const parsedDate = (date) => {
  const parsedDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date());
  return format(parsedDate, "dd.MM.yyyy");
};

const ComplaintsItem = ({ item }) => {
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setStatus(item.status);
  }, [item.status]);

  const handleSubmit = () => {
    console.log("handleSubmit", { idComplaint: item._id, status: status });
    setOpen(false);
  };
  return (
    <>
      <TableRow>
        {Complaint.map((e) => {
          if (e === "createdAt") {
            return (
              <TableCell key={item._id + e}>
                <Typography align="center" component="p">
                  {parsedDate(item[e])}
                </Typography>
              </TableCell>
            );
          } else if (e === "message") {
            return (
              <TableCell key={item._id + e}>
                <Typography align="center" component="p">
                  {item[e]}
                </Typography>
              </TableCell>
            );
          } else if (e === "status") {
            return (
              <TableCell key={item._id + e} style={{ padding: "0px" }}>
                <FormControl fullWidth>
                  <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    {ComplaintStatuses.map((type) => (
                      <MenuItem value={type} key={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            );
          } else if (e === "button") {
            return (
              <TableCell key={item._id + e} style={{ padding: "0px" }}>
                <Button
                  sx={{ m: 2 }}
                  variant="contained"
                  color="success"
                  onClick={() => setOpen(true)}
                >
                  send
                </Button>
              </TableCell>
            );
          } else {
            return (
              <TableCell key={item._id + e} style={{ padding: "0px" }}>
                <Typography className={style.p} align="center" component="p">
                  {item[e]}
                </Typography>
              </TableCell>
            );
          }
        })}
      </TableRow>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Change the status of the complaint?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            no
          </Button>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { ComplaintsItem };
