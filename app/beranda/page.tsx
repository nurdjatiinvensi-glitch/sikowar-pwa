"use client";

import AnnouncementCard from "@/components/cards/AnnouncementCard";
import DashboardCard from "@/components/cards/DashboardCard";
import TodayAgendaCard from "@/components/event/TodayAgendaCard";
import AppLayout from "@/components/layout/AppLayout";
import BerandaHeaderSection from "@/components/layout/sections/BerandaHeaderSection";
import ServiceMenu from "@/components/menus/ServiceMenu";

export default function Home() {
  return (
    <AppLayout activeMenu="beranda">
      <BerandaHeaderSection />

      {/* Dashboard Full */}
      <div className="-mt-4">
        <DashboardCard />
      </div>

      {/* Content */}
      <div className="mt-4 px-4">
        <AnnouncementCard />

        <ServiceMenu />
        <TodayAgendaCard />
      </div>
    </AppLayout>
  );
}
