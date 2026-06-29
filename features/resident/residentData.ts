import { ResidentItem } from "./types";

export const residentData: ResidentItem[] = [
  {
    id: "resident-001",
    houseId: "house-001",
    fullName: "Nurdjati Trihanggono",
    nik: "3276010101010001",
    phone: "081234567890",
    houseRole: "owner",
    relationship: "father",
    isLoginActive: true,
  },

  {
    id: "resident-002",
    houseId: "house-001",
    fullName: "Dewi Lestari",
    nik: "3276010101010002",
    phone: "081234567891",
    houseRole: "family",
    relationship: "mother",
    isLoginActive: true,
  },

  {
    id: "resident-003",
    houseId: "house-002",
    fullName: "Budi Santoso",
    nik: "3276010101010003",
    phone: "081234567892",
    houseRole: "tenant",
    relationship: "father",
    isLoginActive: false,
  },
];