import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Queen Lwiindi | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Helllo! Iam Queen</h1>
        <div></div>
        {/* <Image
        alt="Queen"
        src="/queen1.jpeg"
        height={420}
        width="255"
        className={styles.img}
      /> */}
        <p className={styles.text}>
          A software developer who loves taking part in user interface / user
          experience (UI/UX) research and human centered design thereby using my
          skills to contribute to producing viable products across different
          projects. I have experience in javascript, react and am currently
          learning NEXTjs. My love for user experience research and design grew
          as I got to work on projeccts that allowed me to test platfoms with
          actual people therefore getting insights into how users behave and
          react to different parts of applications.
        </p>
        <br />
        <Link href="/works">
          <a className={styles.btn}>My works</a>
        </Link>
      </div>
    </>
  );
}
