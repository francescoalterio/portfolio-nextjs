import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Project = ({ name, src, alt, id }) => {
  const router = useRouter();
  return (
    <>
      <Link
        href={{
          pathname: !id ? "/projects" : `/projects/${id}`,
          query: { lastPage: router.pathname },
        }}
      >
        <a>
          <div className="proyecto">
            <img src={src} alt={alt} className="img-proyecto" />
          </div>
        </a>
      </Link>

      <style jsx>{`
        .proyecto {
          margin: 12px 0px;
          background-color: rgb(192, 192, 192);
          box-shadow: 0px 0px 10px #7c7c7c;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
          cursor: pointer;
          outline: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        .img-proyecto {
          width: 350px;
          border-radius: 5px;
          object-fit: cover;
        }

        .proyecto:hover {
          transform: scale(1.1);
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
