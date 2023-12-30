import Data from "@components/core/core";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Loading from "./loading";

async function fecheddata([a, b, c]: any) {
  console.log(c);
  const cookieStore = cookies();

  const token = cookieStore.get("token");

  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(
    `${process.env.NEXT_API}/github/repo/${a}/${b}/${c}`,
    {
      cache: "no-store",
      headers: {
        Authorization: token.value,
      },
    }
  );
  const data = await response.json();
  return data.body.data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fecheddata(params.slug);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Data props={data} />
      </Suspense>
    </div>
  );
}
