import Head from "next/head";
import React from "react";
import Repos from "../components/Repos";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";
import CV from "../components/CV";
import Skillsets from "../components/Skillsets";
import Youtube from "../components/Youtube";
import { projectsDB } from "../projects";

export default function Home({ youtubeData, repos }) {
  const projectsReversed = [...projectsDB].reverse();

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
          content="All projects and skills of Francesco Alterio | Portfolio"
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
        <CV />

        <Projects projects={projectsReversed} />

        <Skillsets />

        <Youtube videos={youtubeData} />

        <Repos repos={repos} />
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
  const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&channelId=UCgX7Wp7QOG0PSTuLh-MVN7Q&part=snippet,id&order=date&maxResults=3`;
  const res = await fetch(url);
  const data = await res.json();

  const githubURL = `https://api.github.com/user/repos?sort=author-date`;
  const resGithub = await fetch(githubURL, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  const repos = await resGithub.json();

  return { props: { youtubeData: data.items || null, repos: repos || null } };
}
