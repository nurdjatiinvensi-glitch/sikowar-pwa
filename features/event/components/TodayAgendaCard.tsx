"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { eventData } from "@/data/eventData";

export default function TodayAgendaCard() {
  // sementara ambil event pertama
  const event = eventData[0];

  if (!event) return null;

  return (
    <div
      className="
        mt-5
        rounded-3xl
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">Agenda Hari Ini</h3>

        <Link
          href="/event"
          className="flex items-center gap-1 text-sm text-green-600"
        >
          Lihat Semua
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Card */}
      <Link
        href={`/event/${event.id}`}
        className="
          flex
          items-center
          rounded-2xl
          border
          border-gray-200
          bg-white
          px-5
          py-4
          transition
          hover:shadow-md
        "
      >
        {/* Jam */}
        <div className="w-16 shrink-0">
          <p className="text-3xl font-bold text-green-700">
            {event.time.substring(0, 5)}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-4 h-12 w-px bg-gray-200" />

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h4 className="truncate font-bold text-gray-800">{event.title}</h4>

          <p className="truncate text-sm text-gray-500">{event.location}</p>
        </div>

        {/* Arrow */}
        <ChevronRight size={20} className="ml-3 text-gray-400" />
      </Link>
    </div>
  );
}
