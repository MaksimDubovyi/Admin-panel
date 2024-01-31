"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getComplaints } from "../../../services/complaintsServices";
import { ComplaintsItem } from "./ComplaintsItem";
import { Container } from "@mui/system";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Loading from "../../loading";
import { StyledTableCell } from "../../components/ContactItem";
import { DataControlPanel } from "./DataControlPanel";
const ComplaintsList = () => {
  const [complaints, setComplaints] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    if (session && session.user) {
      getComplaints(session.user.email).then(setComplaints);
    }
  }, [session]);

  if (complaints.length === 0) {
    return (
      <div className="container">
        <h1>Complaints loading...</h1>
        <Loading />
      </div>
    );
  }
  return (
    <Container sx={{ mt: "30px" }}>
      <h1>Complaints</h1>

      <DataControlPanel
        session={session.user.email}
        setComplaints={setComplaints}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>creator id</StyledTableCell>
              <StyledTableCell>target id</StyledTableCell>
              <StyledTableCell>type</StyledTableCell>
              <StyledTableCell>message</StyledTableCell>
              <StyledTableCell>created at</StyledTableCell>
              <StyledTableCell>status</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((item) => (
              <ComplaintsItem item={item} key={item._id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export { ComplaintsList };
