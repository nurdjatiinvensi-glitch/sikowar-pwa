export type DashboardRole =
  | "super_admin"
  | "pengurus"
  | "bendahara"
  | "warga"
  | "penyewa";

export type DashboardIcon =
  | "wallet"
  | "star"
  | "bill"
  | "approval";

export interface DashboardItem {
  id: string;

  title: string;

  value: string;

  icon: DashboardIcon;

  color:
    | "green"
    | "blue"
    | "yellow"
    | "purple"
    | "red"
    | "orange"
    | "teal"
    | "gray";

  roles: DashboardRole[];
}