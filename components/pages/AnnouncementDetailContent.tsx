"use client";

import { Announcement } from "@/app/types/announcement";
import { useState } from "react";

type Props = {
  announcement: Announcement;
};

export default function AnnouncementDetailContent({ announcement }: Props) {
  const [rsvp, setRsvp] = useState<"hadir" | "tentatif" | "berhalangan" | null>(
    null,
  );

  return (
    <>
      {announcement.category.includes("event") && (
        <div className="mt-8">
          <h2 className="mb-3 font-semibold">Status Kehadiran</h2>

          <div className="flex gap-2">
            <button
              onClick={() => setRsvp("hadir")}
              className={
                rsvp === "hadir"
                  ? "rounded-xl bg-green-700 px-4 py-2 text-white"
                  : "rounded-xl bg-gray-100 px-4 py-2"
              }
            >
              ✓ Hadir
            </button>

            <button
              onClick={() => setRsvp("tentatif")}
              className={
                rsvp === "tentatif"
                  ? "rounded-xl bg-amber-500 px-4 py-2 text-white"
                  : "rounded-xl bg-gray-100 px-4 py-2"
              }
            >
              ? Tentatif
            </button>

            <button
              onClick={() => setRsvp("berhalangan")}
              className={
                rsvp === "berhalangan"
                  ? "rounded-xl bg-gray-700 px-4 py-2 text-white"
                  : "rounded-xl bg-gray-100 px-4 py-2"
              }
            >
              ○ Berhalangan
            </button>
          </div>
        </div>
      )}
    </>
  );
}
