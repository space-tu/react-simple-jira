export type Person = {
  id: string;
  name: string;
};

export type Project = {
  id: string;
  name: string;
  personId: string;
  oraganization: string;
  created: number;
};
