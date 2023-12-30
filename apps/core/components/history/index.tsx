import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import gith_logo from "@images/icons/github_icon.svg";
import shareIcon from "@images/icons/share.svg";
import RepoType from "./repoType";

type ResponceType = {
  id: string;
  userName: string;
  repoName: string;
  branchName: string;
  data: {
    isPrivate: boolean;
  };
}[];
interface DataProps {
  props: ResponceType;
}

const History: React.FC<DataProps> = (data) => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      {data.props.map((item) => {
        return (
          <div
            key={item.id}
            className="relative group bg-black flex mx-6 justify-between items-center h-24 pl-4 rounded border-[#FFF] border-[0.1px] hover:cursor-pointer"
          >
            <div className="mb-1.5 flex-col gap-3 items-center">
              <div className="flex items-center space-x-2">
                <span className="font-bold">{item.repoName}</span>
                <Image
                  src={gith_logo}
                  width="18"
                  height="18"
                  alt="github link"
                />
              </div>
              <div className="flex space-x-6 justify-center items-center">
                <span className="font-extralight">
                  Github Repo Description Branch: {item.branchName}
                </span>
                <RepoType props={item.data.isPrivate} />
              </div>
            </div>
            <div>
              <EllipsisHorizontalIcon className="w-[30px] mx-5" />
            </div>
            <div className="opacity-0 group-hover:opacity-100 absolute  transform -translate-y-1/2 right-[-10px] top-0">
              <Image
                className="rounded-full"
                src={shareIcon}
                alt="sharing-icon"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
