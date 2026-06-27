"use client";

import NotificationCard from "./NotificationCard";
import { getNotificationContent } from "./getNotificationContent";
import { NotificationItem } from "./types";

type Props = {
  notifications: NotificationItem[];
  onNotificationClick: (item: NotificationItem) => void;
};

export default function NotificationContent({
  notifications,
  onNotificationClick,
}: Props) {
  const renderSection = (title: string, section: "today" | "yesterday") => {
    const items = notifications.filter((item) => item.section === section);

    return (
      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-700">{title}</h2>

        <div className="space-y-3">
          {items.map((item) => {
            const content = getNotificationContent(
              item.targetType,
              item.targetId,
            );

            if (!content) return null;

            return (
              <NotificationCard
                key={item.notificationId}
                type={item.targetType}
                title={content.title}
                message={content.message}
                time={item.createdAt}
                unread={!item.isRead}
                onClick={() => onNotificationClick(item)}
              />
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-8">
      {renderSection("Hari Ini", "today")}
      {renderSection("Kemarin", "yesterday")}
    </div>
  );
}
