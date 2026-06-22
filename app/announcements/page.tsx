"use client";

import Link from "next/link";

import { Calendar, ChevronRight, MapPin } from "lucide-react";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";

import BackButton from "@/components/layout/BackButton";
import { announcementData } from "@/data/announcementData";

export default function AnnouncementsPage() {
  return (
    <AppLayout activeMenu="home">
      {/* HEADER */}
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">Pengumuman</h1>

          <p className="mt-2 text-white/90">Informasi dan kegiatan warga</p>
        </div>
      </HeaderBackground>

      {/* CONTENT */}
      <div className="px-6 py-6">
        {announcementData.map((item) => (
          <Link
            key={item.id}
            href={`/announcements/${item.id}`}
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
                <h2 className="font-semibold">{item.title}</h2>

                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
              </div>

              <ChevronRight size={20} className="mt-1 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>
    </AppLayout>
  );
}
