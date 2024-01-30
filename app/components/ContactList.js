"use client";
import { useEffect, useState } from "react";
import { ContactSearch } from "./ContactSearch";
import { Container } from "@mui/system";
import { getContacts } from "../../services/getContacts";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ContactItem, StyledTableCell } from "./ContactItem";
import { useSession } from "next-auth/react";
import Loading from "../loading";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    if (session && session.user) {
      getContacts(session.user.email).then(setContacts);
    }
  }, [session]);

  if (contacts.length === 0) {
    return (
      <div className="container">
        <h1>Contacts loading...</h1>
        <Loading />
      </div>
    );
  }
  return (
    <Container sx={{ mt: "30px" }}>
      <h1>Contacts</h1>
      <ContactSearch onSearch={setContacts} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
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
              <ContactItem item={item} key={item._id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export { ContactList };
