import React from "react";
import Proyect from "./Proyect";
import Video from "./Video";

const Youtube = ({ videos }) => {
  return (
    <>
      <section className="videos" id="videos">
        <div className="box-title">
          <h2 className="title">MY LAST VIDEOS</h2>
        </div>
        <hr className="separator" />
        <div className="box-videos">
          {videos?.map((video) => (
            <Video youtubeVideo={video} />
          ))}
        </div>
      </section>
      <style jsx>{`
        .videos {
          background-color: rgb(240, 240, 240);
          width: 100%;
          display: flex;
          flex-flow: column nowrap;
          scroll-behavior: smooth;
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

        .box-videos {
          background-color: #f0f0f0;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          padding: 40px 0 0 0;
          justify-content: space-evenly;
          align-items: center;
        }

        .comming {
          display: inline-block;
          color: rgb(128, 128, 128);
          font-size: 2vw;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .title {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Youtube;
