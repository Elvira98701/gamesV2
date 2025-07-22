import { useMedia } from "react-use";

import { Container } from "@/components/shared";

import { ContactDialog } from "./contact-dialog";

export const Contact = () => {
  const isWide = useMedia("(min-width: 1050px)");

  return (
    <section
      id="contact"
      className="min-h-[50vh] w-full text-background py-16 lg:py-32"
      aria-labelledby="contact-title"
    >
      <h2 className="visually-hidden" id="contact-title">
        Contact
      </h2>
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
