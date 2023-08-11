interface FileUrls {
  frontUrl: string;
  backUrl: string;
  fileName?: string;
}

interface CriminalRecordPayloadTypes {
  motherName: string;
  birthDepartment: string;
  fileUrl?: FileUrls;
  userId: string;
}

export default CriminalRecordPayloadTypes;