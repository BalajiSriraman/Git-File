import { Skeleton } from "@components/shadeCnUI/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-2">
      <Skeleton className="h-16 bg-gray-800 -600 w-full " />
      <Skeleton className="h-16 bg-gray-800 -600 w-full " />
      <Skeleton className="h-16 bg-gray-800 -600 w-full " />
    </div>
  );
}
