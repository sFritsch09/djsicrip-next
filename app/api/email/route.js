export async function POST(req) {
  const to = process.env.MAIL_TO;
  const from = process.env.MAIL_FROM;
  if (!process.env.AUTH_HEADER || !to || !from) {
    console.error("Mail config missing: AUTH_HEADER, MAIL_TO or MAIL_FROM");
    return Response.json(
      { api: "Something went wrong!", status: 500 },
      { status: 500 },
    );
  }
  const body = await req.json();
  const response = await fetch("https://mail.techchase.de/techchase/send", {
    method: "POST",
    headers: {
      Authorization: `Basic ${process.env.AUTH_HEADER}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({ ...body, to, from }),
  });
  if (!response.ok) {
    console.error(`Mail API HTTP error: ${response.status}`);
    return Response.json(
      { api: "Something went wrong!", status: 500 },
      { status: 500 },
    );
  }
  const resp = await response.json();
  if (resp.error) {
    console.error(resp.message);
    return Response.json(
      { api: "Something went wrong!", status: 500 },
      { status: 500 },
    );
  }
  return Response.json({ api: "Successfully Send!", status: 200 });
}
