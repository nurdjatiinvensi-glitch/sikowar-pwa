import { PaymentItem } from "./types";

export const paymentData: PaymentItem[] = [
  {
    id: "pay-001",
    type: "monthly",
    title: "Iuran Bulanan",
    description: "Iuran Warga Bulan Agustus 2026",
    amount: 150000,
    dueDate: "31 Agustus 2026",
    status: "unpaid",
  },

  {
    id: "pay-002",
    type: "cash",
    title: "Kas RT",
    description: "Kontribusi Kas Warga",
    amount: 50000,
    status: "unpaid",
  },

  {
    id: "pay-003",
    type: "donation",
    title: "Donasi",
    description: "Bantuan Sosial Warga",
    amount: 50000,
    status: "paid",
  },
];