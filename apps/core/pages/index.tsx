import React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
// src:
import { Analytics } from "@vercel/analytics/react";
import Mainlogo from "@images/mainLogo.svg";
import style from "@styles/home.module.css";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export async function getServerSideProps() {
  const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo`;
  return { props: { url } };
}

export default function Home({ url }: { url: string }) {
  return (
    <div
      className={`bg-black h-screen w-screen flex flex-col items-center justify-evenly`}
    >
      <NextSeo
        title="GitHub File Manager"
        description="Finally: View your GitHub repositories with a file explorer and interactive utilities."
        openGraph={{
          title: "Your File Manager Experience",
          description:
            "Finally: View your GitHub repositories with a file explorer and interactive utilities.",
          site_name: "Git_File",
        }}
      />
      <Analytics />
      <div>
        <Image
          priority
          width={300}
          height={150}
          src={Mainlogo}
          alt="main-website-logo"
        />
      </div>
      <div className="text-white text-center mt-4">
        <h1 className="text-[45px] font-medium">
          Get Your File Manager Experience Instantly
        </h1>
        <p className="mt-2 px-36">
          Finally: View your GitHub repositories with a file explorer and
          interactive utilities.
        </p>
      </div>

      <div>
        <div
          className={`relative mx-2 ${style.outer} ${style.button} rounded-lg h-[52px] w-[180px]`}
        >
          {/* <a href={url}> */}
          <button
            onClick={() => window.location.assign(url)}
            className="bg-white text-black hover:bg-zinc-900 hover:text-white outline-none border-none text-lg font-semibold text-opacity-100 z-10 tracking-wide cursor-pointer h-12 w-44  flex justify-center items-center space-x-2 rounded-lg "
          >
            <p>Get Started</p>
            <ArrowRightIcon className="h-7 w-5" aria-hidden="true" />
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}
