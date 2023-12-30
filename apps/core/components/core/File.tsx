import fileIcon from "@images/icons/file.svg";
import Image from "next/image";

type FileProps = {
  label: string;
};

const File: React.FC<FileProps> = ({ label }) => {
  return (
    <div>
      <Image className="mt-1.5" src={fileIcon} alt="file" />
      <div className="text-center mt-3 text-2sm">{label}</div>
    </div>
  );
};

export default File;
