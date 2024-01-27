const URL = "http://localhost:3000/api/login";

export const authLogin = async (phone, password) => {
  try {
    const res = await fetch(URL, {
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
