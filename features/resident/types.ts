export type HouseRole =
  | "owner"
  | "tenant"
  | "family"
  | "helper";

export type Relationship =
  | "father"
  | "mother"
  | "child"
  | "parent"
  | "sibling"
  | "helper";

export interface ResidentItem {
  id: string;

  houseId: string;

  fullName: string;

  nik: string;

  phone: string;

  houseRole: HouseRole;

  relationship: Relationship;

  isLoginActive: boolean;
}