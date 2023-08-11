import CriminalRecordPayloadTypes from "../../types/CriminalRecordPayloadTypes";
import { criminalRecordUrls } from "../index";

class CriminalRecordService {

  static addCriminalRecord = async (criminalRecord: CriminalRecordPayloadTypes) => {
    return criminalRecordUrls.addCriminalRecord(criminalRecord);
  }
}

export default CriminalRecordService;