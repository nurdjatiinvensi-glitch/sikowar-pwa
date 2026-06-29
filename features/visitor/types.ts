export type VisitorStatus = "waiting" | "checked-in" | "checked-out";

export interface VisitorItem {
  id: string;

  visitorName: string;

  destination: string;

  purpose: string;

  visitDate: string;

  status: VisitorStatus;
}
