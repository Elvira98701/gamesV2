import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface AnimatedTitleProps {
  title: string;
  className?: string;
}

export const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
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
