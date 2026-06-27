export type NotificationType =
  | "announcement"
  | "event"
  | "payment"
  | "resident";

export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  section: "today" | "yesterday";
}