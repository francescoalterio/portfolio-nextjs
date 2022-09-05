import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { languagesImgFile } from "../constants/languagesImgFile";

const Project = ({ name, language, framework, src, alt, id }) => {
  const router = useRouter();
  return (
    <>
      <div className="project-container">
        <div className="project">
          <Image
            src={src}
            width={330}
            height={185}
            alt={alt}
            className="img-proyecto"
          />
        </div>
        <div className="name-container">
          <h3>{name}</h3>
        </div>
        <div className="container-info">
          <div
            style={{
              borderRadius: "7px",
              overflow: "hidden",
              width: 50,
              height: 50,
            }}
          >
            <Image
              src={`/images/technologies/${languagesImgFile[language]}`}
              alt={`logo-${language}`}
              objectFit="cover"
              width={50}
              height={50}
            />
          </div>
          <div
            style={{
              borderRadius: "7px",
              overflow: "hidden",
              width: 50,
              height: 50,
              backgroundColor: "#383838",
            }}
          >
            <Image
              src={`/images/technologies/${languagesImgFile[framework]}`}
              width={50}
              height={50}
              alt={`logo-${framework}`}
            />
          </div>
        </div>
        <Link
          href={{
            pathname: !id ? "/projects" : `/projects/${id}`,
            query: { lastPage: router.pathname },
          }}
        >
          <a className="project-details-link">More details</a>
        </Link>
      </div>

      <style jsx>{`
        .project-container {
          background-color: rgb(240, 240, 240);
          width: 350px;
          border: 3px solid #6e52f5;
          box-shadow: 0px 0px 10px #7c7c7c;
          transition: 0.3s;
          padding: 20px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        .project-container:hover {
          transform: scale(1.1);
        }

        .project {
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
          margin-bottom: 15px;
        }

        .name-container {
          width: 100%;
          text-align: center;
          margin-bottom: 15px;
        }

        .tech-container {
          borderRadius: 7px,
          overflow: hidden,
          width: 50px,
          height: 50px,
        }

        .container-info {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-details-link {
          width: 100%;
          background-color: #6e52f5;
          text-decoration: none;
          color: white;
          font-weight: bold;
          padding: 7px;
          border-radius: 5px;
          text-align: center;
        }

        @media (max-width: 480px) {
          .img-coretech {
            width: 100vw;
          }

          .img-proyecto {
            width: 90vw;
          }
        }
      `}</style>
    </>
  );
};

export default Project;
9;
