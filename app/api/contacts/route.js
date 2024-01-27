import { NextResponse } from "next/server";

export async function GET(req) {
  const url = process.env.NEXT_URL_GET_USERS;
  const authorizationHeader = req.headers.get("authorization");
  const { searchParams } = new URL(req.url);
  const contact = searchParams.get("contact");
  const search = searchParams.get("search");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationHeader,
      },
    });

    if (!response.ok) {
      throw new Error("Unable to fetch contacts");
    }
    const data = await response.json();

    let currentContacts = data;
    if (contact) {
      currentContacts = currentContacts.filter(
        (contactItem) => contactItem._id === contact
      );
    } else if (search) {
      currentContacts = currentContacts.filter((contactItem) =>
        contactItem.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return NextResponse.json(currentContacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.error();
  }
}
