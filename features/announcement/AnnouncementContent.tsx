"use client";

import { eventData } from "@/data/eventData";

import AnnouncementCard from "./components/AnnouncementCard";
import { announcementData } from "./data";

export default function AnnouncementContent() {
  return (
    <div className="space-y-4">
      {announcementData.map((item) => {
        const eventItem =
          item.type === "event"
            ? eventData.find((e) => e.id === item.eventId)
            : null;

        return (
          <AnnouncementCard
            key={item.id}
            item={{
              ...item,
              title: eventItem?.title ?? item.title,
              date: eventItem?.date ?? item.date,
              location: eventItem?.location ?? item.location,
            }}
            href={
              item.type === "event"
                ? `/event/${item.eventId}`
                : `/announcements/${item.id}`
            }
          />
        );
      })}
    </div>
  );
}
