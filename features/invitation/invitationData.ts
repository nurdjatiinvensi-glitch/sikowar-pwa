import { InvitationItem } from "./types";

export const invitationData: InvitationItem[] = [
  {
    id: "inv-001",
    residentId: "resident-001",
    fullName: "Nurdjati Trihanggono",
    phone: "081234567890",
    email: "nurdjati@mail.com",
    invitationCode: "SKW-001",
    status: "activated",
    sentAt: "20 Juni 2026",
  },

  {
    id: "inv-002",
    residentId: "resident-002",
    fullName: "Dewi Lestari",
    phone: "081234567891",
    email: "dewi@mail.com",
    invitationCode: "SKW-002",
    status: "sent",
    sentAt: "21 Juni 2026",
  },

  {
    id: "inv-003",
    residentId: "resident-003",
    fullName: "Budi Santoso",
    phone: "081234567892",
    email: "",
    invitationCode: "",
    status: "pending",
    sentAt: "-",
  },
];