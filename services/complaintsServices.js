"use server";
import { tempComplaints } from "../app/complaints/tempData";

export const getComplaints = async (token) => {
  return tempComplaints;
};

export const getComplaintsSortStatus = async (token) => {
  tempComplaints.sort((a, b) => {
    const statusOrder = ["new", "pending", "closed"];
    const statusA = statusOrder.indexOf(a.status);
    const statusB = statusOrder.indexOf(b.status);
    return statusA - statusB;
  });
  return tempComplaints;
};
export const getComplaintsSortType = async (token) => {
  tempComplaints.sort((a, b) => {
    const statusOrder = ["spam", "other", "content"];
    const statusA = statusOrder.indexOf(a.type);
    const statusB = statusOrder.indexOf(b.type);
    return statusA - statusB;
  });
  return tempComplaints;
};

export const getComplaintsBySearchType = async (type, token) => {
  try {
    const filteredComplaints = tempComplaints.filter((complaint) => {
      return complaint.type === type;
    });
    return filteredComplaints;
  } catch {
    return null;
  }
};
export const getComplaintsBySearchStatus = async (status, token) => {
  try {
    const filteredComplaints = tempComplaints.filter((complaint) => {
      return complaint.status === status;
    });
    return filteredComplaints;
  } catch {
    return null;
  }
};
