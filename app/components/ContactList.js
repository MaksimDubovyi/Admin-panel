import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: "26px",
    align: "right",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ContactList = ({ item }) => {
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {" "}
        <a href={`/contacts/${item._id.$oid}`}>{item.name}</a>
      </StyledTableCell>
      <StyledTableCell align="right">
        {" "}
        <a href={`/contacts/${item._id.$oid}`}>{item.login}</a>
      </StyledTableCell>
      <StyledTableCell align="right">
        {" "}
        <a href={`/contacts/${item._id.$oid}`}>{item.sex}</a>
      </StyledTableCell>
      <StyledTableCell align="right">
        {" "}
        <a href={`/contacts/${item._id.$oid}`}>{item.phone}</a>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export { ContactList };
