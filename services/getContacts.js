const URL2 = "http://localhost:3000";

export const getContacts = async (token) => {
  try {
    const response = await fetch(URL2 + "/api/contacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 250,
      },
    });

    if (!response.ok) throw new Error("Unable to fetch contacts");

    return response.json();
  } catch {
    return null;
  }
};

export const getContactsBySearch = async (search, token) => {
  try {
    const response = await fetch(URL2 + `/api/contacts?search=${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 250,
      },
    });

    if (!response.ok) throw new Error("Unable to fetch contacts");

    return response.json();
  } catch {
    return null;
  }
};
export const getContactsId = async (id, token) => {
  try {
    const response = await fetch(URL2 + `/api/contacts/?contact=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 250,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch {
    return null;
  }
};
