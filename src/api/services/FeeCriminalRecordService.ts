import { feeCriminalRecordUrls } from "../index";
import { FeeCriminalRecordResult, FeeCriminalRecordParams } from "../../types/FeeCriminalRecordTypes";
import { AxiosResponse } from "axios";

class FeeCriminalRecordService {
  static getFeeCriminalRecords(params : FeeCriminalRecordParams) : Promise<AxiosResponse<FeeCriminalRecordResult>> {
    return  feeCriminalRecordUrls.getFeeCriminalRecord(params);
  }
}
export default FeeCriminalRecordService;
