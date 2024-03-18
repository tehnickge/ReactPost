import Image from "next/image";
import styles from "./page.module.scss";
import { Typography } from "@mui/material";
import Link from "next/link";


const Home = () => {
  return (
    <main className={styles.main}>
      <Typography variant="h1">Welcome to task!</Typography>
      <Link href="/posts"><Typography variant="h2">visit page {`"Posts"`}</Typography></Link>
    </main>
  );
}

export default Home;
