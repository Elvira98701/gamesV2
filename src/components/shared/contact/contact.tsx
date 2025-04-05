import gsap from "gsap";
import { useRef } from "react";
import { useMedia } from "react-use";
import { Container } from "../container";
import { ContactDialog } from "./contact-dialog";

export const Contact = () => {
  const frameRef = useRef<HTMLImageElement>(null);
  const isWide = useMedia("(min-width: 1050px)");

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isWide) return;

    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    if (!isWide) return;

    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[50vh] w-full text-background py-16 lg:py-32"
    >
      <h2 className="visually-hidden">Contact</h2>
      <Container className="flex flex-col items-center">
        <p className="text-sm uppercase md:text-[10px]">
          Make our service better
        </p>

        <div className="relative size-full">
          <h3 className="mt-5 mix-blend-difference relative z-10 text-center">
            We will be glad <br /> to hear your <br /> opinion.
          </h3>

          {isWide ? (
            <div className="contact-img-container">
              <div className="contact-img-mask">
                <div className="contact-img-content">
                  <img
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    src="/images/contact.avif"
                    alt=""
                    className="object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
              <svg
                className="invisible absolute size-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="flt_tag">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="8"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="flt_tag"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="flt_tag"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          ) : (
            <img
              src="/images/contact.avif"
              className="rounded-xl my-5"
              loading="lazy"
              alt=""
            />
          )}
        </div>
        <div className="lg:-mt-32 ml-auto max-w-96 relative z-10">
          <p className="pb-5 text-sm">
            Do you have any questions, suggestions, or ideas to improve the
            service? We are always in touch!
          </p>
          <ContactDialog />
        </div>
      </Container>
    </section>
  );
};
