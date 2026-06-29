export type ResidentStatus =
  | "active"
  | "inactive";

export type HouseStatus =
  | "owner"
  | "rent";

export interface ResidentItem {
  id: string;

  name: string;

  nik: string;

  address: string;

  phone: string;

  houseStatus: HouseStatus;

  residentStatus: ResidentStatus;

  familyCount: number;
}