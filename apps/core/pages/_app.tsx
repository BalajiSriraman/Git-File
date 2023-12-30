// issue fix alias imports
import "@styles/globals.css";
import { DM_Sans } from "next/font/google";

import type { AppProps } from "next/app";

const DmSans = DM_Sans({
  display: "auto",
  preload: false,
  weight: "500",
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={DmSans.className}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
