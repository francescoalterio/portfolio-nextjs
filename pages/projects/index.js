import Link from "next/link";
import React from "react";
import Projects from "../../components/Projects";
import { projectsDB } from "../../projects";

function projects() {
  const projectsReversed = [...projectsDB].reverse();
  return (
    <>
      <div className="vw">
        <main>
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
            <Projects projects={projectsReversed} isAll />
          </div>
        </main>
      </div>
      <style jsx>{`
        .vw {
          width: 100%;
          height: 100vh;
          background-color: rgb(240, 240, 240);
        }
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
          padding: 15px 100px 20px 100px;
          height: 100%;
          background-color: rgb(240, 240, 240);
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 1200px) {
          .background {
            padding: 15px 100px 20px 100px;
          }
        }

        @media (max-width: 1100px) {
          .background {
            padding: 15px 100px 20px 100px;
          }
        }

        @media (max-width: 992px) {
          .background {
            padding: 15px 100px 20px 100px;
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

export default projects;
