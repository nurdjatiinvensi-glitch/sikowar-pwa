"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { announcementData } from "@/data/announcementData";
import { eventData } from "@/data/eventData";
import { CalendarDays, ChevronRight, MapPin, Megaphone } from "lucide-react";

export default function AnnouncementCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % announcementData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const item = announcementData[activeIndex];

  const eventItem =
    item.type === "event" ? eventData.find((e) => e.id === item.eventId) : null;

  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;

    if (touchStart - touchEnd > 50) {
      setActiveIndex((prev) => (prev + 1) % announcementData.length);
    }

    if (touchEnd - touchStart > 50) {
      setActiveIndex((prev) =>
        prev === 0 ? announcementData.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div
      className="
    mt-5
    rounded-3xl
    bg-white
    pt-5
    pb-5
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
  "
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between px-5">
        <h3 className="text-lg font-bold text-gray-800">Pengumuman Terbaru</h3>

        <Link
          href="/announcements"
          className="flex items-center gap-1 text-sm text-green-600"
        >
          Lihat Semua
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Card */}
      <Link
        href={
          item.type === "event"
            ? `/event/${item.eventId}`
            : `/announcements/${item.id}`
        }
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="
    relative
    block
    mx-2
    overflow-hidden
    rounded-3xl
    p-6
  "
        style={{
          backgroundImage: "url('/images/announcement-bg.png')",
          backgroundSize: "106% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex items-center gap-4">
          {/* Thumbnail */}
          <div
            className="
              flex h-20 w-20 shrink-0
              items-center justify-center
              rounded-2xl
              bg-green-100/80
            "
          >
            <Megaphone size={36} className="text-green-700" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h4 className="font-bold text-gray-800">
              {eventItem?.title ?? item.title}
            </h4>

            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
              <CalendarDays size={14} />
              <span>
                {eventItem?.date ?? item.date} | {eventItem?.time ?? item.time}
              </span>
            </div>

            <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
              <MapPin size={14} />
              <span>{eventItem?.location ?? item.location}</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Indicator */}
      <div className="mt-3 flex items-center justify-center gap-2 px-5">
        {announcementData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={
              index === activeIndex
                ? "h-2 w-6 rounded-full bg-green-700"
                : " h-2 w-2 rounded-full bg-gray-300"
            }
          />
        ))}
      </div>
    </div>
  );
}
