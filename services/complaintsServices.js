"use server";
import { tempComplaints } from "../app/complaints/tempData";

export const getAllComplaints = async (token) => {
  return tempComplaints;
};
// const getAllComplaints = async (token) => {
//   try {
//     const url = process.env.NEXT_URL_GET_COMPLAINTS;
//     console.log("token", token);
//     const response = await fetch(url, {
//       next: {
//         revalidate: 150,
//       },
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error("Unable to fetch contacts");
//     }
//     return response.json();
//   } catch (error) {
//     return null;
//   }
// };
export const getComplaints = async (token) => {
  try {
    const response = await getAllComplaints(token);
    // console.log("getComplaints", response);
    return response;
  } catch (error) {
    return null;
  }
};
