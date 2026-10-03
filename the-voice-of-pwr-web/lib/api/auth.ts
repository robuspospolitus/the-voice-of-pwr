"use server";

const API_URL = process.env.API_URL ?? "http://127.0.0.1:3001";

export async function RegisterUser(input: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify(input),
  });

  const data = await res.json();
  if (!res.ok) return { ok: false as const, message: data.message as string };
  return { ok: true as const, user: data };
}

export async function loginAccount(input: { email: string; password: string }) {
  const res = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify(input),
  });
  const data = await res.json();
  if (!res.ok) return { ok: false as const, message: data.message as string };
  return { ok: true as const, accessToken: data.access_token as string };
}
