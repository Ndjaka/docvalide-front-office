import { FeeCriminalRecords } from "../types/FeeCriminalRecordTypes";

function removeDuplicateResidences(records: FeeCriminalRecords[]): FeeCriminalRecords[] {
  const seenResidences = new Set<string>();
  const uniqueRecords: FeeCriminalRecords[] = [];

  if (records) {
    for (const record of records) {

      const residenceKey = record.residence.toLowerCase().trim();

      if (!seenResidences.has(residenceKey)) {
        seenResidences.add(residenceKey);
        uniqueRecords.push(record);
      }
    }
  }

  return uniqueRecords;
}


export default removeDuplicateResidences;