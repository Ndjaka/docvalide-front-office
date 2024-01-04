import { FeeCriminalRecords } from "../types/FeeCriminalRecordTypes";

interface GroupedRecords {
  [region: string]: FeeCriminalRecords[];
}


function generateOptions(regions: GroupedRecords): { region: string; id: string; label: string }[] {
  const options: { region: string; id: string; label: string }[] = [];

  for (const region in regions) {
    // @ts-ignore
    regions[region].forEach((item) => {
      options.push({
        region: item.region,
        id: item.tribunal,
        label: item.tribunal
      });
    });
  }

  return removeDuplicatesOptions(options);
}

function groupRecordsByRegion(records: FeeCriminalRecords[]): GroupedRecords {
  const grouped: GroupedRecords = {};

  records?.forEach((record) => {
    const { region } = record;

    if (!grouped[region]) {
      grouped[region] = [];
    }

    grouped[region].push(record);
  });

  return grouped;
}

export { generateOptions, groupRecordsByRegion };

function removeDuplicatesOptions(options: { region: string; id: string; label: string }[]): { region: string; id: string; label: string }[] {
  const uniqueOptions: { region: string; id: string; label: string }[] = [];
  const seenOptions = new Set<string>();

  options.forEach((option) => {
    const key = option.id.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (!seenOptions.has(key)) {
      seenOptions.add(key);
      uniqueOptions.push(option);
    }
  });

  return uniqueOptions;
}