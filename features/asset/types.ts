export type AssetStatus =
  | "available"
  | "borrowed"
  | "maintenance";

export interface AssetItem {
  id: string;

  name: string;

  category: string;

  total: number;

  available: number;

  status: AssetStatus;
}