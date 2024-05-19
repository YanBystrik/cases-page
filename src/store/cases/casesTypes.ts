export interface Case {
  Id: string;
  Image: string;
  Title: string;
  CaseColor: string;
  FeaturesTitle?: string;
  FriendlyURL: string;
  Filters: Filter[];
}

export interface Filter {
  Id: string;
  Name: string;
}
