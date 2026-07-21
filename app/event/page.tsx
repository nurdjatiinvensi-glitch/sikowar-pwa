"use client";

import Link from "next/link";
import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import { eventData } from "@/data/eventData";
import MiniCalendar from "@/features/event/components/MiniCalendar";

export default function EventPage() {
  const [selectedDate, setSelectedDate] = useState("17");

  const selectedEvents = eventData.filter(
    (event) => event.date === `2026-08-${selectedDate.padStart(2, "0")}`,
  );

  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Event"
          showBackButton
          subtitle="Agenda Kegiatan Warga"
        />
      }
    >
      <PageContent className=" px-4 pt-4 pb-28">
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
                className="block w-full rounded-3xl bg-white p-4 text-left shadow-sm"
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
      </PageContent>
    </AppLayout>
  );
}
