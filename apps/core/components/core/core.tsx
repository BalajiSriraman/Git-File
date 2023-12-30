"use client";
import React from "react";
import Folder from "./Folder";
import File from "./File";
interface Item {
  name: string;
  type: string;
  children?: Item[];
}

interface DataProps {
  props: Item[];
}

const Data: React.FC<DataProps> = (data) => {
  function getRootFilesAndFolders(data: Item[] | undefined) {
    return (
      data?.map((item) => {
        const itemsData = {
          label: item.name,
          type: item.type,
          children: item.children || [],
        };
        return itemsData;
      }) || []
    );
  }

  function handleClick(label: string, children: Item[]) {
    console.log(`Contents of ${label}:`);
    children.forEach((item) => {
      console.log(`- ${item.name}`);
    });
  }

  const rootFilesAndFolders = getRootFilesAndFolders(data.props);

  return (
    <div className="mx-3 my-6 grid gap-1.5 grid-cols-1fr">
      {rootFilesAndFolders.map((item, index) => (
        <div key={index} className="p-2 flex justify-center items-center">
          {item.type === "folder" ? (
            <div onClick={() => handleClick(item.label, item.children)}>
              <Folder label={item.label} />
            </div>
          ) : (
            <File label={item.label} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Data;
