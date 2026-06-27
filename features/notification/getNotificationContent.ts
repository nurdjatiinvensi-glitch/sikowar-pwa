import { announcementData } from "@/data/announcementData";
import { eventData } from "@/data/eventData";

export function getNotificationContent(
  type: string,
  targetId: string,
) {
  switch (type) {
    case "announcement": {
      const item = announcementData.find(
        (item) => item.id === Number(targetId),
      );

      if (!item) return null;

      return {
        title: item.title,
        message: item.description,
      };
    }

    case "event": {
      const item = eventData.find(
        (item) => item.id === Number(targetId),
      );

      if (!item) return null;

      return {
        title: item.title,
        message: item.location,
      };
    }

    default:
      return null;
  }
}