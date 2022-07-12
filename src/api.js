const BASE_URL = "https://www.watchrabbit.co.kr";

export async function postLoginData(Data) {
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

export async function postEmail(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email : Data.userEmail,
    }),
  });
  const body = await response.json();
  return body;
}
export async function postGoogle(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const body = await response.json();
  return body;
}
export async function postKakao(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const body = await response.json();
  return body;
}

