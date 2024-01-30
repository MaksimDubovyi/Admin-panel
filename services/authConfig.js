"use server";
export const authLogin = async (phone, password) => {
  try {
    const url = process.env.NEXT_URL_LOGIN;

    const res = await fetch("http://164.92.243.161:5001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone,
        password: password,
      }),
    });
    return res;
  } catch {
    return null;
  }
};
