import { FeeCriminalRecords } from "../types/FeeCriminalRecordTypes";

function removeDuplicateResidences(records: FeeCriminalRecords[]): FeeCriminalRecords[] {
  const seenResidences = new Set<string>();
  const uniqueRecords: FeeCriminalRecords[] = [];

  if (records){
    for (const record of records) {
      if (!seenResidences.has(record.residence)) {
        seenResidences.add(record.residence);
        uniqueRecords.push(record);
      }
    }
  }


  return uniqueRecords;
}

export default removeDuplicateResidences;