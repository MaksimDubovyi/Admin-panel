import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";

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
const properties = ["name", "login", "sex", "phone"];
const ContactItem = ({ item }) => {
  return (
    <StyledTableRow>
      {properties.map((e) => (
        <StyledTableCell key={e}>
          <Link href={`/contacts/${item._id}`}>{item[e]}</Link>
        </StyledTableCell>
      ))}
    </StyledTableRow>
  );
};

export { ContactItem };
