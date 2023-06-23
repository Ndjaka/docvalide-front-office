import ChoiceEnum from "../enums/ChoiceEnum";
import { useEffect, useState } from "react";
import { extractData, legalizationData } from "../data/data";
import { array } from "yup";

const stepObject= {
  "legalization" : legalizationData ,
  "extract":  extractData
};
const useLayoutStepData = (choice : ChoiceEnum) => {
  console.log("choice", choice);
  const [layoutData, setLayoutData] = useState<Array<object>>(stepObject[choice]);

  useEffect(() => {
    setLayoutData(stepObject[choice]);
  }, [choice]);

  return layoutData;

}

export default useLayoutStepData;