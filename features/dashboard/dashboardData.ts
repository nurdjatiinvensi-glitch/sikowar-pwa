import {
  FileText,
  Star,
  Users,
  Wallet,
} from "lucide-react";

import { DashboardItem } from "./types";

export const dashboardItems: DashboardItem[] = [
  {
  id: 1,
  title: "Saldo Cash",
  value: "Rp 250.000",
  icon: Wallet,
  color: "green",
  layout: "currency",
},

{
  id: 2,
  title: "Saldo Poin",
  value: "125",
  subtitle: "Poin",
  icon: Star,
  color: "yellow",
  clickable: true,
  layout: "inline"
},

{
  id: 3,
  title: "Tagihan Aktif",
  value: "1",
  subtitle: "Lihat Tagihan",
  icon: FileText,
  color: "blue",
  clickable: true,
  layout: "stack"
},

{
  id: 4,
  title: "Pending Approval",
  value: "2",
  subtitle: "Perlu Tindakan",
  icon: Users,
  color: "purple",
  layout: "stack"
},
];