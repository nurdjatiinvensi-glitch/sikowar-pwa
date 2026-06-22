"use client";

import MiniCalendar from "@/components/event/MiniCalendar";
import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

export default function EventPage() {
  return (
    <AppLayout activeMenu="home">
      <HeaderBackground variant="default">
        <BackButton />
        <div className="px-6 pt-8 pb-8 text-white">
          <h1 className="text-3xl font-bold">Event</h1>

          <p className="mt-2 text-white/90">Agenda kegiatan warga</p>
        </div>
      </HeaderBackground>

      <div className="px-4 py-6">
        <MiniCalendar />
      </div>
    </AppLayout>
  );
}
