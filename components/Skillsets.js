import React from "react";
import Skill from "./Skill";

const Skillsets = () => {
  return (
    <>
      <section className="skillset" id="skillset">
        <div className="box-title-skillset">
          <h2 className="title-skillset">SKILLSET</h2>
        </div>
        <hr className="separator-skillset" />
        <div className="box-skillset">
          <Skill
            src={"/images/technologies/html.svg"}
            href={
              "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            }
            alt={"img-html5-logo"}
            technology="HTML"
          />
          <Skill
            src={"/images/technologies/css.svg"}
            href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            alt={"img-css3-logo"}
            technology="CSS"
          />
          <Skill
            src={"/images/technologies/javascript-2752148-2284965.png"}
            href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
            alt={"img-javascript-logo"}
            technology="Javascript"
          />
          <Skill
            src={"/images/technologies/react-logo.png"}
            href={"https://reactjs.org/"}
            alt={"img-react-logo"}
            technology="React"
          />
          <Skill
            src={"/images/technologies/tailwind-logo.png"}
            href={"https://tailwindcss.com/"}
            alt={"img-tailwind-logo"}
            technology="Tailwindcss"
          />
          <Skill
            src={"/images/technologies/git.webp"}
            href={"https://git-scm.com/"}
            alt={"img-git-logo"}
            technology="Git"
          />
          <Skill
            src={"/images/technologies/next.png"}
            href={"https://nextjs.org/"}
            alt={"img-nextjs-logo"}
            technology="Next.js"
          />
        </div>
      </section>
      <style jsx>{`
        .skillset {
          background-color: #6e52f5;
          width: 100%;
          min-height: 420px;
        }

        .box-title-skillset {
          background-color: #6e52f5;
          align-items: flex-end;
          display: flex;
          justify-content: center;
          height: 120px;
        }

        .title-skillset {
          color: rgb(240, 240, 240);
          font-weight: 700;
          font-size: 40px;
        }

        .separator-skillset {
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
            color-stop(#f0f0f0),
            to(transparent)
          );
          background-image: -webkit-linear-gradient(
            left,
            transparent,
            #f0f0f0,
            transparent
          );
          background-image: -o-linear-gradient(
            left,
            transparent,
            #f0f0f0,
            transparent
          );
          background-image: linear-gradient(
            to right,
            transparent,
            #f0f0f0,
            transparent
          );
        }

        .box-skillset {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          min-height: 300px;
          padding: 40px 0;
        }
      `}</style>
    </>
  );
};

export default Skillsets;
