import React, { useState } from "react";
import Project from "./Project";
import { useRouter } from "next/router";
import Link from "next/link";
import ProjectFilter from "./ProjectFilter";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiAbstract,
} from "react-icons/si";
import { IoStar, IoFileTrayFull } from "react-icons/io5";
import ButtonProjectFilter from "./ButtonProjectFilter";
import { filterProjectsByTech } from "../utils/filterProjectsByTech";

const Projects = ({ projects, isAll }) => {
  const [language, setLanguage] = useState(isAll ? "all" : "favorites");

  const projectsFiltered = filterProjectsByTech(projects, language);
    
  const router = useRouter();
  return (
    <>
      <section className="portafolio" id="projects">
        <div className="box-title">
          <h2 className="title">PROJECTS</h2>
        </div>
        <hr className="separator" />
        <div className="box-filter">
          <ProjectFilter>
            {isAll ? (
              <ButtonProjectFilter
                icon={<IoFileTrayFull size={30} />}
                name="all"
                language={language}
                setLanguage={setLanguage}
              />
            ) : (
              <ButtonProjectFilter
                icon={<IoStar size={30} />}
                name="favorites"
                language={language}
                setLanguage={setLanguage}
              />
            )}

            <ButtonProjectFilter
              icon={<SiJavascript size={30} />}
              name="javascript"
              language={language}
              setLanguage={setLanguage}
            />
            <ButtonProjectFilter
              icon={<SiTypescript size={30} />}
              name="typescript"
              language={language}
              setLanguage={setLanguage}
            />
            <ButtonProjectFilter
              icon={<SiPhp size={30} />}
              name="php"
              language={language}
              setLanguage={setLanguage}
            />
            <ButtonProjectFilter
              icon={<SiPython size={30} />}
              name="python"
              language={language}
              setLanguage={setLanguage}
            />
          </ProjectFilter>
        </div>
        <div className="box-proyectos">
          {projectsFiltered.map((x) => (
            <Project
              key={x.id}
              name={x.name}
              coreTechs={x.coreTechs}
              src={x.src}
              alt={x.alt}
              id={x.id}
            />
          ))}
        </div>
        {!isAll && (
          <div className="all-projects-container">
            <Link
              href={{
                pathname: "/projects",
                query: { lastPage: router.pathname },
              }}
            >
              <a className="all-projects-link">See all my projects</a>
            </Link>
          </div>
        )}
      </section>
      <style jsx>{`
        .portafolio {
          background-color: rgb(240, 240, 240);
          width: 100%;
          display: flex;
          flex-flow: column nowrap;
          scroll-behavior: smooth;
          padding: 0 10px;
        }

        .box-title {
          background-color: rgb(240, 240, 240);
          align-items: flex-end;
          display: flex;
          justify-content: center;
          height: 120px;
        }

        .title {
          font-weight: 700;
          font-size: 40px;
          color: rgb(34, 34, 34);
        }

        .separator {
          background-image: linear-gradient(
            to right,
            transparent,
            #f5f9fa,
            transparent
          );

          height: 0.1rem;
          max-width: 100%;
          border: 0;
          background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(transparent),
            color-stop(#5432ff),
            to(transparent)
          );
          background-image: -webkit-linear-gradient(
            left,
            transparent,
            #5432ff,
            transparent
          );
          background-image: -o-linear-gradient(
            left,
            transparent,
            #5432ff,
            transparent
          );
          background-image: linear-gradient(
            to right,
            transparent,
            #5432ff,
            transparent
          );

          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
        }

        .box-filter {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .box-proyectos {
          background-color: #f0f0f0;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          padding: 30px 30px;
          justify-content: space-evenly;
          align-items: center;
          gap: 30px 30px;
        }

        .all-projects-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 40px;
          gap: 10px;
        }

        .all-projects-link {
          background-color: #b0b0b0;
          text-decoration: none;
          color: #292929;
          width: 600px;
          text-align: center;
          padding: 13px 18px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 18px;
          transition: 0.3s;
        }

        .all-projects-link:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .all-projects-link {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
