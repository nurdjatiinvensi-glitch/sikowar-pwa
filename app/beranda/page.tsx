"use client";

import AnnouncementCard from "@/components/cards/AnnouncementCard";
import BillingCard from "@/components/cards/BillingCard";

import AppLayout from "@/components/layout/AppLayout";
import HomeHeaderSection from "@/components/layout/HomeHeaderSection";
import ServiceMenu from "@/components/menus/ServiceMenu";

export default function Home() {
  return (
    <AppLayout activeMenu="beranda">
      {/* HEADER */}
      <HomeHeaderSection />

      {/* CONTENT */}
      <div className="mt-4 px-4">
        <BillingCard />

        <AnnouncementCard />

        <ServiceMenu />
      </div>
    </AppLayout>
  );
}
