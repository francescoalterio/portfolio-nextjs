import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { projectsDB } from "../../projects";
import Image from "next/image";
import Link from "next/link";

export default function project() {
  const [projectData, setProjectData] = useState();
  const router = useRouter();
  console.log("router", router.query);

  useEffect(() => {
    const data = projectsDB.find((x) => x.id === Number(router.query.project));
    setProjectData(data);
  }, [router.query]);

  useEffect(() => {
    console.log(projectData);
  }, [projectData]);
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content={projectData?.description} />
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
        <title>Francesco Alterio | Project | {projectData?.name}</title>
      </Head>

      <main>
        <div>
          {projectData && (
            <div className="background">
              <nav className="navegation">
                <Link href="/">
                  <a className="a-logo ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#6e52f5"
                      class="bi bi-arrow-left-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                  </a>
                </Link>
              </nav>

              <h1 className="project-name">{projectData.name}</h1>
              <div className="data-container">
                <div className="img-container">
                  <img className="img" src={projectData.src} />
                </div>
                <div className="data">
                  <h3 className="data-subtitle">Used technologies</h3>
                  <div className="box-technologies">
                    {projectData.techs.map((x) => x)}
                  </div>
                  <p style={{ fontSize: 15 }}>{projectData.description}</p>
                  <div className="btn-container">
                    <a
                      className="btn repo-btn"
                      href={projectData.repo}
                      target="__blank"
                    >
                      <svg
                        class="w-6 h-6 mr-2"
                        width="25"
                        height="25"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                      <span style={{ paddingLeft: 10 }}>Repository</span>
                    </a>
                    {projectData.app ? (
                      <a
                        href={projectData.app}
                        target="__black"
                        className="a-googleplay"
                      >
                        <img
                          className="img-googleplay"
                          src="./../../images/google-play-button.png"
                        />
                      </a>
                    ) : (
                      projectData.preview && (
                        <a
                          className="btn web-btn"
                          href={projectData.preview}
                          target="__blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-code-slash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                          </svg>
                          <span style={{ paddingLeft: 10 }}>Website</span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <style jsx>{`
        .navegation {
          background-color: rgb(240, 240, 240);
          width: 100%;
          height: 70px;
          position: sticky;
          top: 0;
          display: flex;
          /* box-shadow: 0 3px 10px #181818; */
          z-index: 20;
          align-items: center;
        }

        .box-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #6e52f5;
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }

        .a-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s;
        }

        .a-logo:hover {
          transform: scale(1.1);
        }

        .background {
          width: 100%;
          padding: 15px 350px 20px 350px;
          height: 100%;
          background-color: rgb(240, 240, 240);
          display: flex;
          flex-direction: column;
        }
        .img {
          width: 100%;
          border: 2px solid #6e52f5;
          border-radius: 5px;
        }
        .data-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .data {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .project-name {
          margin: 20px 0 20px 0;
          color: #2e2e2e;
        }
        .img-container {
          width: 100%;
        }
        .box-technologies {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20px;
          margin-left: -10px;
        }
        .data-subtitle {
          color: #2e2e2e;
          margin: 10px 0 5px 0;
        }
        p {
          color: #2e2e2e;
        }

        .btn-container {
          display: flex;
          margin: 20px 0 0 0;
          flex: 1;
          align-items: flex-end;
          padding-bottom: 7px;
        }

        .repo-btn {
          background-color: #242424;
        }

        .web-btn {
          background-color: #6e52f5;
          margin-left: 20px;
        }

        .btn {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0 15px;
          border-radius: 5px;
          transition: 0.2s;
          height: 49.45px;
          font-weight: bold;
          color: white;
        }

        .btn:hover {
          transform: scale(1.1);
        }
        .a-googleplay {
          width: 150px;
          height: 49.45px;
          margin-left: 20px;
          cursor: pointer;
          transition: 0.2s;
        }

        .a-googleplay:hover {
          transform: scale(1.1);
        }
        .img-googleplay {
          width: 100%;
        }

        @media (max-width: 1200px) {
          .background {
            padding: 15px 300px 20px 300px;
          }
        }

        @media (max-width: 1100px) {
          .background {
            padding: 15px 250px 20px 250px;
          }
        }

        @media (max-width: 992px) {
          .background {
            padding: 15px 150px 20px 150px;
          }
        }

        @media (max-width: 892px) {
          .background {
            padding: 15px 100px 20px 100px;
          }
        }

        @media (max-width: 700px) {
          .background {
            padding: 15px 50px 20px 50px;
          }
        }

        @media (max-width: 600px) {
          .background {
            padding: 15px 20px 20px 20px;
          }
        }
        @media (max-width: 360px) {
          .background {
            padding: 15px 10px 20px 10px;
          }
        }
      `}</style>
    </>
  );
}
