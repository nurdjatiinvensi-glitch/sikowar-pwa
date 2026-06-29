import { HouseItem } from "./types";

export const houseData: HouseItem[] = [
  {
    id: "house-001",
    houseCode: "A-01",
    address: "Blok A No.1",
    ownerName: "Nurdjati Trihanggono",
    occupancyStatus: "owner",
    residentCount: 4,
  },

  {
    id: "house-002",
    houseCode: "A-02",
    address: "Blok A No.2",
    ownerName: "Budi Santoso",
    occupancyStatus: "tenant",
    residentCount: 3,
  },

  {
    id: "house-003",
    houseCode: "B-01",
    address: "Blok B No.1",
    ownerName: "-",
    occupancyStatus: "vacant",
    residentCount: 0,
  },
];