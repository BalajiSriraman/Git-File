import Header from "@components/header/logo";
import Auth from "@components/header/auth";
import { Suspense } from "react";
import Image from "next/image";
import noLoginStateLogo from "@images/nil_login.png";
import { Skeleton } from "@components/shadeCnUI/skeleton";

export default function AuthLayout() {
  return (
    <div className="mx-5 my-4 flex items-center justify-between">
      <Header />
      {/* https://nextjs.org/docs/app/building-your-application/routing/parallel-routes */}
      {/* //TODO: manage BROWSER REPO's accoring to various pages */}

      <Suspense
        fallback={
          <Skeleton className="h-10 w-10 bg-gray-600 rounded-full mr-4" />
        }
      >
        <Auth />
      </Suspense>
    </div>
  );
}
