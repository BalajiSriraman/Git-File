import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Combobox from "../ComboBox";
import Layout from "./layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { parseRepo } from "@utils/parseRepo";

export type ListRepoResponseType = {
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

interface DataProps {
  props: ListRepoResponseType;
}

const RepoSelectPage: React.FC<DataProps> = (data) => {
  const [repoDetails, setRepoDetails] = useState<{
    userName: string;
    repoName: string;
  }>();

  const handleRepoSelection = (selectedData: { full_name: string }) => {
    const parsedData = parseRepo(selectedData.full_name);
    setRepoDetails(parsedData);
  };

  useEffect(() => {
    if (repoDetails) {
      setRepoDetails(repoDetails);
    }
  }, [repoDetails]);
  return (
    <Layout>
      <div className=" p-5 flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center space-y-8">
          <p className="text-white text-[24px] font-medium font-sans">
            Choose Your Favorite Repository to Explore
          </p>
          <div className="flex flex-col items-center space-y-10">
            <div className="flex justify-center items-center space-x-3">
              <input
                className="h-6 w-[420px] rounded px-2 py-3 text-black outline-none"
                type="text"
                id="inputField"
                placeholder="Paste your GitHub repo link here"
              />
              <button id="submitButton">
                <ArrowRightIcon className="h-6 w-5 bg-white rounded text-black " />
              </button>
            </div>
            <h3>or</h3>
            <div>
              <Combobox
                data={data.props.repos}
                emitClickEvent={handleRepoSelection}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[70px]">
          <Link
            href={`/file/${repoDetails?.userName}/${repoDetails?.repoName}/main`}
            className="bg-white text-black hover:bg-black hover:border-2 hover:border-solid hover:border-white hover:text-white outline-none border-none text-lg font-semibold text-opacity-100 z-10 tracking-wide cursor-pointer h-12 w-96  flex justify-center items-center space-x-4 rounded-lg "
          >
            <p>Open Repository</p>
            <ArrowRightIcon className="h-7 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default RepoSelectPage;
