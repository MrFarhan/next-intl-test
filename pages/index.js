import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTranslations } from "next-intl";
import { translationJson } from "../public/translation.tsx";

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: translationJson(locale),
    },
  };
}

export default function Home() {
  const t = useTranslations("Login");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Hello world {t("login")}</h2>
      </main>
    </div>
  );
}