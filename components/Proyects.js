import React from "react";
import Proyect from "./Proyect";

const Proyects = () => {
  return (
    <>
      <section className="portafolio" id="proyects">
        <div className="box-title">
          <h2 className="title">PROYECTS</h2>
        </div>
        <hr className="separator" />
        <div className="box-proyectos">
          <Proyect
            name="Project Manager"
            src="../images/proyects/project-manager.png"
            alt="img-project-manager"
            description="Program that allows you to manage all the tasks and versions of your projects with react native, react navigation and redux."
            preview="https://www.youtube.com/watch?v=YvWt-w5EJw4"
            repo="https://github.com/francescoalterio/project-manager"
          />
          <Proyect
            name="Dualsend"
            src="../images/proyects/dualsend.png"
            alt="img-dualsend"
            description="Program that allows you to send files of any type between a pc and a mobile with react native and expressjs"
            preview=""
            repo="https://github.com/francescoalterio/dualsend-mobileapp"
          />
          <Proyect
            name="Study Panel"
            src="../images/proyects/studypanel.png"
            alt="img-studypanel"
            description="Panel study on web technologies using React and Firebase"
            preview="https://studypanel.vercel.app/"
            repo="https://github.com/francescoalterio/react-study-panel"
          />
          <Proyect
            name="Francesco Pomodoro"
            src="../images/proyects/francescopomodoro.png"
            alt="img-francescopomodoro"
            description="Clock pomodoro to increase the productivity of your study using React"
            preview="https://francescopomodoro.netlify.app/"
            repo="https://github.com/francescoalterio/pomodoro-timer"
          />
          <Proyect
            name="Most Famous Cryptocurrencies"
            src="../images/proyects/cryptoproyect.png"
            alt="img-cryptoproyect"
            description="Web that shows the price of the 10 cryptocurrencies with the most volume in real time using React"
            preview="https://cryptocurrencylist.stackblitz.io/"
            repo="https://github.com/francescoalterio/react-cryptocurrencylist"
          />
          <Proyect
            name="Smite Filter"
            src="../images/proyects/smitefilter.png"
            alt="img-proyecto"
            description="
            Filter of gods for the video game Smite using Javscript vanilla"
            preview="https://francescoalterio.github.io/smitefilter/"
            repo="https://github.com/francescoalterio/smitefilter"
          />
        </div>
      </section>
      <style jsx>{`
        .portafolio {
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

        .box-proyectos {
          background-color: #f0f0f0;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          padding: 30px 0;
          justify-content: space-evenly;
          align-items: center;
        }

        .comming {
          display: inline-block;
          color: rgb(128, 128, 128);
          font-size: 2vw;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default Proyects;
