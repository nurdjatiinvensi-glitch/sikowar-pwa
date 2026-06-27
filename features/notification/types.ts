export type NotificationType =
  | "announcement"
  | "event"
  | "payment"
  | "resident";

export interface NotificationItem {
  notificationId: string;

  targetType: NotificationType;

  targetId: string;

  createdAt: string;

  isRead: boolean;

  section: "today" | "yesterday";
}