

export interface FeeCriminalRecordResult{
  results:    FeeCriminalRecords[];
  page:       number;
  totalPages: number;
}

export interface FeeCriminalRecords{
  id:        string;
  residence: string;
  tribunal:  string;
  fees:      number;
  status:    boolean;
  region:    string;
}

export interface FeeCriminalRecordParams{
  city: string;
  tribunal: string;
  page?: number;
  resultsPerPage?: number;
  withLimit?: boolean;
}

