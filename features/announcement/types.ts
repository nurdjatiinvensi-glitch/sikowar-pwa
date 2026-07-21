export type AnnouncementType =
  | "announcement"
  | "event"
  | "news";

export type AnnouncementItem = {
  id: number;

  title: string;

  description: string;

  date: string;

  time: string;

  location: string;

  image?: string;

  type: AnnouncementType;

  eventId?: number;
};