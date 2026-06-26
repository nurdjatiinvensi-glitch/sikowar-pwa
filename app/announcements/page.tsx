"use client";

import { Calendar, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import { announcementData } from "@/data/announcementData";
import { eventData } from "@/data/eventData";

export default function AnnouncementsPage() {
  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">Pengumuman</h1>

          <p className="mt-2 text-white/90">Informasi dan kegiatan warga</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        {announcementData.map((item) => {
          const eventItem =
            item.type === "event"
              ? eventData.find((e) => e.id === item.eventId)
              : null;

          return (
            <Link
              key={item.id}
              href={
                item.type === "event"
                  ? `/event/${item.eventId}`
                  : `/announcements/${item.id}`
              }
              className="
                mb-4
                block
                rounded-2xl
                bg-white
                p-4
                shadow-sm
                transition
                hover:shadow-md
              "
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="font-semibold">
                    {eventItem?.title ?? item.title}
                  </h2>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{eventItem?.date ?? item.date}</span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span>{eventItem?.location ?? item.location}</span>
                  </div>
                </div>

                <ChevronRight size={20} className="mt-1 text-gray-400" />
              </div>
            </Link>
          );
        })}
      </div>
    </AppLayout>
  );
}
