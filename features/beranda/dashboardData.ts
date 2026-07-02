import { DashboardItem } from "./types";

export const dashboardData: DashboardItem[] = [
  {
    id: "saldo",
    title: "Saldo Cash",
    value: "Rp 250.000",
    icon: "wallet",
    color: "green",
    roles: ["warga", "pengurus", "bendahara"],
  },

  {
    id: "point",
    title: "Saldo Poin",
    value: "125",
    icon: "star",
    color: "yellow",
    roles: ["warga"],
  },

  {
    id: "bill",
    title: "Tagihan Aktif",
    value: "1",
    icon: "bill",
    color: "blue",
    roles: ["warga", "pengurus"],
  },

  {
    id: "approval",
    title: "Pending Approval",
    value: "2",
    icon: "approval",
    color: "purple",
    roles: ["pengurus"],
  },
];