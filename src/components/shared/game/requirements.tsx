import { Container } from "@/components/shared";
import { parseSystemRequirements } from "@/utils";

interface Requirements {
  minimum?: string;
  recommended?: string;
}

interface RequirementsProps {
  requirements: Requirements;
}

export const Requirements = ({ requirements }: RequirementsProps) => {
  const parsedMinimum = requirements.minimum
    ? parseSystemRequirements(requirements.minimum)
    : null;
  const parsedRecommended = requirements.recommended
    ? parseSystemRequirements(requirements.recommended)
    : null;

  return (
    <section className="pt-8 lg:pt-14">
      <Container>
        <h2 className="middle-text mb-5 lg:mb-10 capitalize">
          System requirements for PC
        </h2>
        <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
          {parsedMinimum && (
            <div className="flex-1">
              <h3 className="text-xl mb-2">Minimum:</h3>
              <ul className="list-disc list-inside">
                {Object.entries(parsedMinimum).map(([key, value]) => (
                  <li key={key}>
                    <b className="capitalize text-primary">
                      {key.replace(/_/g, " ")}:
                    </b>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {parsedRecommended && (
            <div className="flex-1">
              <h3 className="text-xl mb-2">Recommended:</h3>
              <ul className="list-disc list-inside">
                {Object.entries(parsedRecommended).map(([key, value]) => (
                  <li key={key}>
                    <b className="capitalize text-primary">
                      {key.replace(/_/g, " ")}:
                    </b>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
