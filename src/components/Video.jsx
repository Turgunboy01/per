import React from "react";
import VentionVideo from "../assets/video.mp4";
const Video = () => {
  return (
    <div className="border-b w-full p-[30px]">
      <video loop muted controls className="h-[800px] w-full ">
        <source src={VentionVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
