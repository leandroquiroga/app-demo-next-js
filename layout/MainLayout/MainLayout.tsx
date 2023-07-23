import Head from "next/head";
import { NavBar } from "@/components";
import { Poppins } from "next/font/google";

import styles from "./MainLayout.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
});

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[]
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Inicializacion de Ne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={`${styles.main} ${poppins.className}`}>
        { children }
      </main>
    </>
  );
};
