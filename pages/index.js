import Head from "next/head";
import ContactWindow from "../components/ContactWindow";
import CoreTech from "../components/CoreTech";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Presentation from "../components/Presentation";
import Proyects from "../components/Proyects";
import Scope from "../components/Scope";
import Skillsets from "../components/Skillsets";
import WindowProyect from "../components/WindowProyect";

export default function Home() {
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
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content="Francesco Alterio | Portfolio" />
        <meta
          property="og:description"
          content="All projects and skills of Francesco Alterio"
        />
        <meta property="og:image" content="yo-blanco-modified.png" />
        <title>Francesco Alterio | Portfolio</title>
      </Head>

      <Nav />

      <Presentation />

      <Scope />

      <Proyects />

      <Skillsets />

      <CoreTech />

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
