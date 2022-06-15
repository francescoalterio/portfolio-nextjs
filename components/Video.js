import React from "react";

const Video = ({ youtubeVideo }) => {
  React.useEffect(() => {
    console.log(youtubeVideo);
  }, []);
  return (
    <div className="box-video">
      <iframe
        title="youtube-video"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeVideo.id.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
