import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ data, countries }) {
  const updateDate = data.Date.split("T")[0];

  return (
    <div className={styles.container}>
      <Head>
        <title>Covid19-DataMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" sizes="any" type="image/svg+xml" />
      </Head>
      <div className={styles.header_info}>
        <p>Lastest Update: {updateDate}</p>
        <p>
          Total <span>{countries.length}</span> Countries of Total Confirmed
          Cases over 3,000,000
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  const countries = await data.Countries.filter(
    (country) => country.TotalConfirmed > 3000000
  ).sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed ? 1 : -1));
  return {
    props: { data, countries }, // will be passed to the page component as props
  };
}
