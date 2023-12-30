import { Skeleton } from "@components/shadeCnUI/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col gap-4 pt-5 px-[1px]">
      <Skeleton className="relative group bg-gray-500 flex mx-6 justify-between items-center h-24 pl-4 rounded border-black border-[0.1px] hover:cursor-pointer" />
      <Skeleton className="relative group bg-gray-500 flex mx-6 justify-between items-center h-24 pl-4 rounded border-black border-[0.1px] hover:cursor-pointer" />
      <Skeleton className="relative group bg-gray-500 flex mx-6 justify-between items-center h-24 pl-4 rounded border-black border-[0.1px] hover:cursor-pointer" />
    </div>
  );
}
