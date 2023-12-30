import Data from "./core";
async function fecheddata() {
  const response = await fetch(
    `${process.env.NEXT_API}/github/repo/Tanishqpati/Github_PR_Generator/main`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.body;
}

export default async function Core() {
  const data = await fecheddata();
  return <Data props={data} />;
}
