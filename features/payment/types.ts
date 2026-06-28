export type PaymentType =
  | "monthly"
  | "cash"
  | "donation";

export type PaymentStatus =
  | "unpaid"
  | "paid";

export interface PaymentItem {
  id: string;

  type: PaymentType;

  title: string;

  description: string;

  amount: number;

  dueDate?: string;

  status: PaymentStatus;
}