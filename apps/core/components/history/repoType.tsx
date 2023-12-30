import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
// resove this file

type DataProps = {
  props: any;
};

const RepoType: React.FC<DataProps> = (data) => {
  return (
    <div className="bg-zinc-200 px-3 py-0 h-[25px] rounded-full flex justify-center items-center space-x-1 mr-8 border-[1.5px] border-solid border-red-600 text-black">
      {data.props === "true" ? (
        <>
          <p className="font-bold">Private</p>
          <LockClosedIcon className="h-5" />
        </>
      ) : (
        <>
          <p className="font-bold">Public</p>
          <LockOpenIcon className="h-5" />
        </>
      )}
    </div>
  );
};

export default RepoType;
