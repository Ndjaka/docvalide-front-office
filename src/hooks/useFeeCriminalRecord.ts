import { FeeCriminalRecordParams } from "../types/FeeCriminalRecordTypes";
import { useQuery } from "@tanstack/react-query";
import feeCriminalRecordService from "../api/services/FeeCriminalRecordService";

const useFeeCriminalRecord =  (params: FeeCriminalRecordParams) => {

  return  useQuery(['fee-criminal-record', params], async () => feeCriminalRecordService.getFeeCriminalRecords(params), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
}

export default useFeeCriminalRecord;