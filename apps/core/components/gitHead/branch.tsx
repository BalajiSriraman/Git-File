import { cookies } from "next/headers";
import { ListboxComp } from "./headless/listbox";

export async function BranchBox(repoDetails: any) {
  const cookieStore = cookies();

  const token = cookieStore.get("token");

  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(
    `${process.env.NEXT_API}/github/branches/${repoDetails.data.data[0]}/${repoDetails.data.data[1]}`,
    {
      cache: "no-store",
      headers: {
        Authorization: token.value,
      },
    }
  );

  const data = await response.json();

  return (
    <div className="w-48 mx-6 pb-2.5">
      <ListboxComp props={data} />
    </div>
  );
}
