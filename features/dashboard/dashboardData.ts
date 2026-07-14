import {
  FileText,
  Star,
  Users,
  Wallet,
} from "lucide-react";

import type { DashboardItem } from "./types";

export const dashboardItems: DashboardItem[] = [
  {
    id: 1,
    title: "Saldo Cash",
    value: "Rp 250.000",
    icon: Wallet,
    color: "green",
    href: "/wallet",
  },

  {
    id: 2,
    title: "Saldo Poin",
    value: "125 Poin",
    icon: Star,
    color: "yellow",
    href: "/reward",
  },

  {
    id: 3,
    title: "Tagihan",
    value: "1",
    icon: FileText,
    color: "blue",
    href: "/payment",
  },

  {
    id: 4,
    title: "Approval",
    value: "2",
    icon: Users,
    color: "purple",
    href: "/pengurus/approval",
  },
];