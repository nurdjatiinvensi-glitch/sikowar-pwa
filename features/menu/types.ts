import { LucideIcon } from "lucide-react";

export type MenuItem = {
  id: string;
  title: string;
  desc?: string;
  href: string;
  icon: LucideIcon;

  color:
    | "green"
    | "red"
    | "purple"
    | "blue"
    | "yellow"
    | "teal";

  isShortcut: boolean;
};