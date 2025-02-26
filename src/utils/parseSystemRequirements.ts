export const parseSystemRequirements = (
  text: string
): Record<string, string> => {
  text = text.replace(
    /(OS|Operating System|CPU|Processor|Memory|Graphics|Storage|Sound Card|Additional Notes):/g,
    "\n$1:"
  );

  const lines: string[] = text.split("\n").map((line) => line.trim());
  const requirements: Record<string, string> = {};

  lines.forEach((line) => {
    const [key, value] = line.split(/:(.+)/).map((str) => str.trim());
    if (key && value) {
      const formattedKey: string = key
        .toLowerCase()
        .replace(/ /g, "_")
        .replace(/[^a-z_]/g, "");
      requirements[formattedKey] = value;
    }
  });

  return requirements;
};
