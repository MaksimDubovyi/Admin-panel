"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getComplaints } from "../../../services/complaintsServices";
import { Container } from "@mui/system";
import Loading from "../../loading";
import { ComplaintsDataGrid } from "./ComplaintsDataGrid";

const ComplaintsList = () => {
  const [complaints, setComplaints] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      getComplaints(session.user.email).then(setComplaints);
      console.log("response", complaints);
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
    <Container>
      <h1>Complaints</h1>
      <ComplaintsDataGrid complaints={complaints} />
    </Container>
  );
};
export { ComplaintsList };
