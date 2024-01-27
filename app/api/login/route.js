export async function POST(request) {
  const body = await request.json();
  const url = process.env.NEXT_URL_LOGIN;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: body?.phone,
      password: body?.password,
    }),
  });

  const user = await res.json();
  if (user) {
    return new Response(JSON.stringify(user));
  } else return new Response(JSON.stringify(null));
}
