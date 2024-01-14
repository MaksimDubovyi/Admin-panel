"use client";
import { useEffect, useState } from "react";
import { ContactSearch } from "../components/ContactSearch";
import { Container } from "@mui/system";
import { getContacts } from "../../services/getContacts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ContactList, StyledTableCell } from "../components/ContactList";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  return (
    <Container sx={{ mt: "30px" }}>
      <h1>Contacts</h1>
      <ContactSearch onSearch={setContacts} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Login</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((item) => (
              <ContactList item={item} key={item._id.$oid} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
