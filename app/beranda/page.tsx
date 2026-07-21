"use client";

import AnnouncementCard from "@/components/cards/AnnouncementCarousel.tsx";
import AppLayout from "@/components/layout/AppLayout";
import ScrollContainer from "@/components/layout/ScrollContainer";
import BerandaHeaderSection from "@/components/layout/sections/BerandaHeaderSection";
import ServiceMenu from "@/components/menus/ServiceMenu";
import DashboardCard from "@/features/dashboard/components/DashboardCard";
import TodayAgendaCard from "@/features/event/components/TodayAgendaCard";

export default function Home() {
  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-full flex-col">
        <BerandaHeaderSection />

        <ScrollContainer>
          {/* Dashboard */}
          <div className="px-4">
            <DashboardCard />
          </div>

          {/* Content */}
          <div className="mt-4 px-4">
            <AnnouncementCard />

            <ServiceMenu />

            <TodayAgendaCard />
          </div>
        </ScrollContainer>
      </div>
    </AppLayout>
  );
}
