import RepoSelectPage, {
  ListRepoResponseType,
} from "@components/repoSelect/page";
import type { GetServerSideProps } from "next";

type ResponseType = {
  userInfo: {
    oname: string;
    avatar_url: string;
    gname: string;
  };
  repos: {
    id: number;
    full_name: string;
    private: boolean;
  }[];
};
type Repo = {
  props: ResponseType;
};

export const getServerSideProps = (async ({ req }) => {
  const response = await fetch(`${process.env.NEXT_API}/github/repos`, {
    cache: "no-store",
    headers: {
      Authorization: `${req.cookies.token}`,
    },
  });
  const data = await response.json();
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: Repo }>;

export default function RepoPage({ data }: { data: ListRepoResponseType }) {
  return (
    <>
      <RepoSelectPage props={data} />
    </>
  );
}
