import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import {
  getComplaintsBySearchStatus,
  getComplaintsSortType,
  getComplaintsSortStatus,
  getComplaintsBySearchType,
} from "../../../services/complaintsServices";
import { ComplaintStatuses, ComplaintType } from "../data";
import { Container } from "@mui/system";
const DataControlPanel = ({ session, setComplaints }) => {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const sortType = async () => {
    setType("");
    setStatus("");
    await getComplaintsSortType(session).then(setComplaints);
  };
  const sortStatus = async () => {
    setType("");
    setStatus("");
    await getComplaintsSortStatus(session).then(setComplaints);
  };
  const handleSearchStatus = async (e) => {
    try {
      setStatus(e);
      const filteredComplaints = await getComplaintsBySearchStatus(e, session);
      setComplaints(filteredComplaints);
    } catch (error) {
      console.error("Error filtering by status:", error);
    }
  };
  const handleSearchType = async (e) => {
    try {
      setType(e);
      const filteredComplaints = await getComplaintsBySearchType(e, session);
      setComplaints(filteredComplaints);
    } catch (error) {
      console.error("Error filtering by Type:", error);
    }
  };
  return (
    <>
      <Container sx={{ display: "flex", alignItems: "center", m: 1 }}>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ m: 2 }}
          onClick={sortType}
        >
          Sort type
        </Button>
        <Button variant="outlined" color="inherit" onClick={sortStatus}>
          Sort status
        </Button>
        <FormControl sx={{ width: 200, m: 2 }}>
          <InputLabel id="select-label-status">Sort by status</InputLabel>
          <Select
            labelId="select-label-status"
            value={status}
            onChange={(e) => handleSearchStatus(e.target.value)}
          >
            {ComplaintStatuses.map((type) => (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200, m: 2 }}>
          <InputLabel id="select-label-type">Sort by type</InputLabel>
          <Select
            labelId="select-label-type"
            value={type}
            onChange={(e) => handleSearchType(e.target.value)}
          >
            {ComplaintType.map((type) => (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </>
  );
};

export { DataControlPanel };
