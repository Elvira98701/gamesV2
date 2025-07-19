import { BentoTilt } from "@/components/shared";

const LazyVideo = () => {
  return (
    <BentoTilt className="rounded-xl col-span-2 md:col-span-1">
      <video
        loop
        muted
        autoPlay
        playsInline
        className="size-full object-cover object-center"
      >
        <source src="/video/video.webm" type="video/webm" />
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
    </BentoTilt>
  );
};

export default LazyVideo;
