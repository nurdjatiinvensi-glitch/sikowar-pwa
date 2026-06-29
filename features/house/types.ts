export type HouseStatus =
  | "owner"
  | "tenant"
  | "vacant";

export interface HouseItem {
  id: string;

  houseCode: string;

  address: string;

  ownerName: string;

  occupancyStatus: HouseStatus;

  residentCount: number;
}