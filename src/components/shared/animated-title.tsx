import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface AnimatedTitleProps {
  title: string;
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title }) => {
  useGSAP(() => {
    gsap.to(".animated-word", {
      opacity: 1,
      transform: "translate(0, 0)",
      ease: "power2.inOut",
      stagger: 0.04,
    });
  });

  return (
    <>
      {title.split("").map((word, idx) => (
        <span
          key={idx}
          className="animated-word inline-block"
          dangerouslySetInnerHTML={{ __html: word }}
        />
      ))}
    </>
  );
};
