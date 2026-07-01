import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export async function signup(data: {
  displayName: string;
  username: string;
  email: string;
  password: string;
}) {
  const response = await api.post("/auth/signup", data);

  localStorage.setItem(
    "marginalia-token",
    response.data.token,
  );

  return response.data;
}

export async function login(data: {
  email: string;
  password: string;
}) {
  const response = await api.post("/auth/login", data);

  localStorage.setItem(
    "marginalia-token",
    response.data.token,
  );

  return response.data;
}

export function logout() {
  localStorage.removeItem("marginalia-token");
}

export function getToken() {
  return localStorage.getItem("marginalia-token");
}