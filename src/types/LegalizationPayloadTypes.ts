export interface LegalizationRequest {
  motif: string;
  receiptMoment: string;
  userId?: string;
  legalizationDocs?: LegalizationDocRequest[];
}

export interface LegalizationDocRequest {
  quantity: number;
  fileUrl: string;
  fileName: string;
  designation: string;
}
