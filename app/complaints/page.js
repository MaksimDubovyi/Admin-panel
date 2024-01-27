// import { authConfig } from "../configs/auth";
// import { getServerSession } from "next-auth/next";
// export default async function Complaints() {
//   const session = await getServerSession(authConfig);
//   console.log("getServerSession:Complaints", session);

//   return (
//     <div>
//       <h1>hi</h1>
//     </div>
//   );
// }
import { authConfig } from "../configs/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export default async function Complaints({ req }) {
  const session = await getServerSession({ req });

  console.log("getServerSession:Complaints", session);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}
