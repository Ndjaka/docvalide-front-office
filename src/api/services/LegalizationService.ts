import { legalizationUrls } from "../index";
import { LegalizationRequest } from "../../types/LegalizationPayloadTypes";

class LegalizationService {
  static  addLegalization(params:LegalizationRequest) {
    return legalizationUrls.addLegalization(params);
  }
}

export default LegalizationService;