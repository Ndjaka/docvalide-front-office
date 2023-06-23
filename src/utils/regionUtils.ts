import { Regions } from "../types/RegionTypes";

function generateOptions(departments: Regions): { region: string; id: string; label: string }[] {
  const options: { region: string; id: string; label: string }[] = [];

  for (const departement in departments) {
    // @ts-ignore
    departments[departement].forEach((city) => {
      options.push({
        region: departement,
        ...city,
      });
    });
  }

  return options;
}

export default generateOptions;