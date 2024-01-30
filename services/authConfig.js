export const authLogin = async (phone, password) => {
  try {
    const url = process.env.NEXT_URL_LOGIN;

    const res = await fetch(url, {
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
