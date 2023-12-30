import Modal from "./modal";
import { cookies } from "next/headers";

async function fechedData() {
  const cookieStore = cookies();

  const token = cookieStore.get("token");

  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(`${process.env.NEXT_API}/github/repos`, {
    cache: "no-store",
    headers: {
      Authorization: token.value,
    },
  });
  const data = await response.json();

  return data;
}

export default async function Auth() {
  const data = await fechedData();

  return <Modal props={data.repos} />;
}
