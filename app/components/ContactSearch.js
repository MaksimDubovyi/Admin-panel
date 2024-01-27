"use client";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { getContactsBySearch } from "../../services/getContacts";
import { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { useSession } from "next-auth/react";

const ContactSearch = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const { data: session } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session && session.user) {
      const contacts = await getContactsBySearch(search, session.user.email);
      onSearch(contacts);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          color: "green",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "50px",
          justifyContent: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <TextField
          type="search"
          id="search"
          label="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <IconButton type="submit" color="inherit" aria-label="add an alarm">
          <SearchSharpIcon />
        </IconButton>
      </Box>
    </form>
  );
};

export { ContactSearch };
