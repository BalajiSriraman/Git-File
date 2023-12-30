"use client";
import folderIcon from "@images/icons/folder.svg";
import Image from "next/image";

type FolderProps = {
  label: string;
  onClick?: () => void; // Make onClick optional
};

const Folder: React.FC<FolderProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <Image
        src={folderIcon}
        height={10}
        width={10}
        alt="folder"
        className="w-auto h-20"
      />
      <div className="text-center text-2sm">{label}</div>
    </div>
  );
};

export default Folder;
