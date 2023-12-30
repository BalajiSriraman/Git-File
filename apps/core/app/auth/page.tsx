"use client";

import SearchBar from "@utils/getParam";

export default function Page() {
  const code = SearchBar().getParamValue("code");

  fetch(`/api/auth/getToken/?code=${code}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .catch((res) => console.log(res));

  return <h1>Hello, Auth page!</h1>;
}
