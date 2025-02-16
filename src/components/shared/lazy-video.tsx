import React from "react";
import { BentoTilt } from "./bento-tilt";

const LazyVideo: React.FC = () => {
  return (
    <BentoTilt className="rounded-xl">
      <video
        src="video/video.webm"
        loop
        muted
        autoPlay
        playsInline
        className="size-full object-cover object-center"
      />
    </BentoTilt>
  );
};

export default LazyVideo;
