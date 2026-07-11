export type PengurusColor =
  | "green"
  | "blue"
  | "purple"
  | "orange";

export type PengurusItem = {
  id: string;
  name: string;
  position: string;
  avatar?: string;
  color: PengurusColor;

  phone?: string;
  whatsapp?: string;

  isActive: boolean;
};