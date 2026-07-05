import { LucideIcon } from "lucide-react";

export type DashboardItem = {
  id: number;
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  color: "green" | "yellow" | "blue" | "purple";
  clickable?: boolean;
  layout: "stack" | "inline" | "currency";
};