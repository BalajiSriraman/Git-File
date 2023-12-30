"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/shadeCnUI/Select";
import { useRef } from "react";
import { useRouter, useParams } from "next/navigation";

type RepositoryInfo = {
  defaultBranch: string;
  branches: string[];
  ownerName: string;
  repoName: string;
};

export function ListboxComp({ props }: { props: RepositoryInfo }) {
  const searchParams = useParams();
  const router = useRouter();

  let selectedValue = useRef();
  // type narroe searchParams to Record<string, string | string[]> not null by if conoition
  if (searchParams === null) {
    return null;
  }

  const chend = (value: any) => {
    selectedValue.current = value;
    const URL = `/file/${props.ownerName}/${
      props.repoName
    }/${encodeURIComponent(selectedValue.current ?? props.defaultBranch)}`;

    router.push(URL);
  };

  return (
    <Select onValueChange={chend}>
      <SelectTrigger className="bg-black h-9  ">
        <SelectValue
          className="text-black h-9"
          placeholder={decodeURIComponent(searchParams?.slug[2])}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {props.branches.map((branch) => (
            <SelectItem key={branch} value={branch}>
              {branch}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
