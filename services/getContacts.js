"use server";

const getAllContacts = async (token) => {
  try {
    const url = process.env.NEXT_URL_GET_USERS;
    const response = await fetch("http://164.92.243.161:5001/api/all-users", {
      next: {
        revalidate: 150,
      },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Unable to fetch contacts");
    }
    return response.json();
  } catch (error) {
    return null;
  }
};

export const getContacts = async (token) => {
  const response = await getAllContacts(token);
  return response;
};
export const getContactsBySearch = async (search, token) => {
  try {
    const response = await getAllContacts(token);
    const currentContacts = response.filter((contactItem) =>
      contactItem.name.toLowerCase().includes(search.toLowerCase())
    );
    return currentContacts;
  } catch {
    return null;
  }
};
export const getContactsId = async (id, token) => {
  try {
    console.log("getContactsId", id);
    const response = await getAllContacts(token);
    const currentContacts = response.filter(
      (contactItem) => contactItem._id === id
    );
    return currentContacts;
  } catch {
    return null;
  }
};
