export interface Announcement {
  id: number;

  type: "announcement" | "news" | "event";

  eventId?: number;

  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}