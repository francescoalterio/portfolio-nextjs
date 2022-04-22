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
        <title>Portfolio</title>
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
