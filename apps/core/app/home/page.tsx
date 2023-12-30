import AuthLayout from "@/Auth";
import History from "@components/history";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Loading from "./loading";

async function fetcher() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(`${process.env.NEXT_API}/master/history`, {
    cache: "no-store",
    headers: {
      Authorization: token.value,
    },
  });

  const data = await response.json();

  return data;
}

export default async function HeaderSlot() {
  // zod validation req

  const data = await fetcher();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <History props={data} />
      </Suspense>
    </>
  );
}
