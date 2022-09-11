import React from "react";
import RepoCard from "react-repo-card";

const Repos = ({ repos }) => {
  const repostWithLanguage = repos.filter((repo) => repo.language);
  const repostNoForked = repostWithLanguage.filter((repo) => !repo.fork);
  const latestRepos = repostNoForked.slice(0, 6);
  console.log(latestRepos);
  return (
    <>
      <section className="repos" id="repositories">
        <div className="box-title">
          <h2 className="title">LATEST REPOS</h2>
        </div>
        <hr className="separator" />
        <div className="box-repos">
          {latestRepos.map((repo) => (
            <div key={repo.id} className="box-repo">
              <RepoCard username="francescoalterio" repository={repo.name} />
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        .title {
          font-weight: 700;
          font-size: 40px;
          color: rgb(34, 34, 34);
          margin: 0 10px;
        }
        .repos {
          background-color: rgb(240, 240, 240);
          width: 100%;
        }

        .box-title {
          background-color: rgb(240, 240, 240);
          align-items: flex-end;
          display: flex;
          justify-content: center;
          height: 120px;
        }

        .title-coretech {
          color: rgb(240, 240, 240);
          font-weight: 700;
          font-size: 40px;
        }

        .box-repos {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 30px 50px;
          gap: 20px;
        }

        .box-repo {
          min-width: 300px;
          flex: 1;
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
      `}</style>
    </>
  );
};

export default Repos;
