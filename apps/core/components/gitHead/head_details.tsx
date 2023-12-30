import Image from "next/image";
import miniGitLogo from "@images/mini_git_logo.png";
import { BranchBox } from "./branch";

export default function Head(data: any) {
  const githubUrl = `https://github.com/${data.data[0]}/${
    data.data[1]
  }/tree/${decodeURIComponent(data.data[2])}`;

  console.log(data.data[1]);
  return (
    <div className="flex items-baseline justify-between">
      <div className="mx-6 mt-12 flex items-center justify-start">
        <div className="text-3xl">{data.data[1]}</div>
        <div className="mx-8">
          <a
            href={githubUrl}
            target="_blank"
            className=" hover:cursor-pointer flex items-center py-0 px-1 gap-1.5 w-full rounded-2xl my-0"
          >
            <div className="text-1s">View it on Github</div>
            <Image
              priority
              src={miniGitLogo}
              width={20}
              height={20}
              alt="Githubmarkwhite"
              className="my-0 w-5"
            />
          </a>
        </div>
      </div>

      <BranchBox data={data} />
    </div>
  );
}
