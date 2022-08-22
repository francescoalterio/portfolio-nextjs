import Head from "next/head";
import React from "react";
import ContactWindow from "../components/ContactWindow";
import CoreTech from "../components/CoreTech";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";
import Scope from "../components/Scope";
import Skillsets from "../components/Skillsets";
import Youtube from "../components/Youtube";
import { projectsDB } from "../projects";

export default function Home({ youtubeData }) {
  const projectsReversed = [...projectsDB].reverse();
  const favoriteProjects = projectsReversed.filter((x) => x.isFavorite);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="All projects and skills of Francesco Alterio"
        />
        <meta property="og:title" content="Francesco Alterio | Portfolio" />
        <meta
          property="og:description"
          content="All projects and skills of Francesco Alterio"
        />
        <meta
          property="og:url"
          content="https://francescoalterio.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://francescoalterio.vercel.app/yocirculo.png"
        />
        <title>Francesco Alterio | Portfolio</title>
      </Head>

      <Nav />

      <Presentation />

      <main>
        <Scope />

        <Projects projects={favoriteProjects} isFavorites />

        <Skillsets />

        <Youtube videos={youtubeData} />

        <CoreTech />
      </main>

      <Footer />

      <style global jsx>{`
        html {
          overflow-y: scroll;
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const url =
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDrf8_IRsNtBVNvnkMUvLRw0YEKn5s_pAg&channelId=UCgX7Wp7QOG0PSTuLh-MVN7Q&part=snippet,id&order=date&maxResults=3";
  const res = await fetch(url);
  const data = await res.json();
  return { props: { youtubeData: data.items || null } };
}
