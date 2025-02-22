import React from "react";
import { BentoTilt } from "./bento/bento-tilt";

const LazyVideo: React.FC = () => {
  return (
    <BentoTilt className="rounded-xl col-span-2 md:col-span-1">
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
