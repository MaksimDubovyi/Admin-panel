"use client";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { ComplaintStatuses } from "../data";
import { useEffect, useState } from "react";
import { parse, format } from "date-fns";

const parsedDate = (date) => {
  const parsedDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date());
  return format(parsedDate, "dd.MM.yyyy");
};

const ComplaintsDataGrid = ({ complaints }) => {
  const [editRowsModel, setEditRowsModel] = useState({});
  const [state, setState] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleYesClick = () => {
    setOpen(false);
    setState((prev) => {
      const updatedRows = prev.map((row) =>
        editRowsModel[row._id]
          ? { ...row, status: selectedStatus || row.status }
          : row
      );
      return updatedRows;
    });

    setSelectedStatus("");
  };

  const onClose = () => {
    setOpen(false);
    const keys = Object.keys(editRowsModel);
    if (keys.length > 0) {
      const lastKey = keys[keys.length - 1];
      const newEditRowsModel = { ...editRowsModel };
      delete newEditRowsModel[lastKey];
      setEditRowsModel(newEditRowsModel);
    }
  };

  const handleStatusChange = (e, params) => {
    setSelectedStatus(e.target.value);
    setEditRowsModel((prev) => ({ ...prev, [params.id]: true }));
    setOpen(true);
  };
  const onSubmit = () => {
    console.log("state", state);
    console.log("editRowsModel", editRowsModel);
    const selectedRows = state.filter((row) => editRowsModel[row._id]);

    console.log("Selected Rows:", selectedRows);
  };

  useEffect(() => {
    setState(complaints);
  }, []);

  const columns = Object.keys(complaints[0]).map((field, index) => {
    if (field === "createdAt") {
      return {
        field,
        headerName: field.charAt(0).toUpperCase() + field.slice(1),
        sortable: true,
        disableColumnMenu: true,
        width: 100,
        renderCell: (params) => (
          <p>
            {parsedDate(
              state.find((row) => row._id === params.id)?.createdAt || ""
            )}
          </p>
        ),
      };
    } else if (field === "message") {
      return {
        field,
        headerName: field.charAt(0).toUpperCase() + field.slice(1),
        sortable: true,
        disableColumnMenu: true,
        width: 400,

        renderCell: (params) => (
          <p
            style={{
              margin: 0,

              overflow: "auto",
            }}
          >
            {state.find((row) => row._id === params.id)?.message || ""}
          </p>
        ),
      };
    } else if (field === "_id") {
      return {
        field: "",
        sortable: false,
        disableColumnMenu: true,
        width: 1,
      };
    } else if (field === "updatedAt") {
      return {
        field: " ",
        sortable: false,
        disableColumnMenu: true,
        width: 1,
      };
    } else if (field === "status") {
      return {
        key: `column-${index}`,
        field,
        headerName: field.charAt(0).toUpperCase() + field.slice(1),
        sortable: true,
        width: 150,
        editable: "onCellEditCommit",
        renderCell: (params) => (
          <FormControl sx={{ width: 200 }}>
            <Select
              sx={{ color: editRowsModel[params.id] ? "red" : "inherit" }}
              value={state.find((row) => row._id === params.id)?.status || ""}
              onChange={(e) => handleStatusChange(e, params)}
            >
              {ComplaintStatuses.map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ),
      };
    } else if (field === "type") {
      return {
        field,
        headerName: field.charAt(0).toUpperCase() + field.slice(1),
        sortable: true,
        width: 100,
      };
    }

    return {
      disableColumnMenu: true,
      field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      sortable: true,
      width: 150,
    };
  });

  const getRowId = (row) => row._id;

  return (
    <div style={{ height: 600, width: "100%" }}>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        color="success"
        onClick={onSubmit}
      >
        update
      </Button>
      <DataGrid
        rows={state}
        columns={columns}
        pageSize={5}
        editMode="cell"
        editRowsModel={editRowsModel}
        onEditCellChangeCommitted={(params) => {
          setEditRowsModel((prev) => {
            delete prev[params.id];
            return { ...prev };
          });
        }}
        getRowId={getRowId}
        rowHeight={70}
      />

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
          <Button variant="contained" color="error" onClick={onClose}>
            no
          </Button>
          <Button variant="contained" color="success" onClick={handleYesClick}>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { ComplaintsDataGrid };
