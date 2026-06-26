"use client";

import { useState } from "react";

import MiniCalendar from "@/components/event/MiniCalendar";
import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";
import { eventData } from "@/data/eventData";
import Link from "next/link";

export default function EventPage() {
  const [selectedDate, setSelectedDate] = useState("17");

  const selectedEvents = eventData.filter(
    (event) => event.date === `2026-08-${selectedDate.padStart(2, "0")}`,
  );

  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <BackButton />
        <div className="px-6 pt-8 pb-8 text-white">
          <h1 className="text-3xl font-bold">Event</h1>

          <p className="mt-2 text-white/90">Agenda kegiatan warga</p>
        </div>
      </HeaderBackground>
      <div className="px-4 py-6">
        <MiniCalendar
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />

        <h2 className="mt-6 mb-4 text-lg font-bold text-gray-800">
          Agenda {selectedDate} Agustus 2026
        </h2>

        {selectedEvents.length > 0 ? (
          <div className="space-y-3">
            {selectedEvents.map((event) => (
              <Link
                key={event.id}
                href={`/event/${event.id}`}
                className="block w-full rounded-3xl bg-white p-4 text-left shadow-smbuka"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {event.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {event.location}
                    </p>
                  </div>

                  <span
                    className="
              rounded-full
              bg-amber-100
              px-3
              py-1
              text-xs
              font-medium
              text-amber-700
            "
                  >
                    RSVP
                  </span>
                </div>

                <p className="mt-3 text-sm font-medium text-green-700">
                  {event.time} WIB
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div
            className="
      rounded-3xl
      bg-white
      p-8
      text-center
      shadow-sm
    "
          >
            <div className="text-4xl">📅</div>

            <p className="mt-3 font-medium text-gray-700">
              Tidak ada agenda kegiatan
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Pilih tanggal lain untuk melihat agenda warga
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
