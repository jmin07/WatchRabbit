const BASE_URL = "http://localhost:8443";

export async function postJWT(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email: Data.userEmail,
      password: Data.userPassword,
    }),
  });
  const body = await response.json();
  return body;
}
