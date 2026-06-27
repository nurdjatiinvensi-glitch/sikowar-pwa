import NotificationCard from "./NotificationCard";
import { notificationData } from "./notificationData";

export default function NotificationContent() {
  const today = notificationData.filter((item) => item.section === "today");

  const yesterday = notificationData.filter(
    (item) => item.section === "yesterday",
  );

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-700">Hari Ini</h2>

        <div className="space-y-3">
          {today.map((item) => (
            <NotificationCard
              key={item.id}
              type={item.type}
              title={item.title}
              message={item.message}
              time={item.time}
              unread={item.unread}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-700">Kemarin</h2>

        <div className="space-y-3">
          {yesterday.map((item) => (
            <NotificationCard
              key={item.id}
              type={item.type}
              title={item.title}
              message={item.message}
              time={item.time}
              unread={item.unread}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
