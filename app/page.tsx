"use client";
import PageContainer from "@/components/layout/PageContainer";
import EmergencySheet from "@/components/sheets/EmergencySheet";
import { useState } from "react";

import Header from "@/components/layout/Header";

import AnnouncementCard from "@/components/cards/AnnouncementCard";
import BillingCard from "@/components/cards/BillingCard";
import HeroCard from "@/components/cards/HeroCard";

import BottomNav from "@/components/menus/BottomNav";
import ServiceMenu from "@/components/menus/ServiceMenu";

export default function Home() {
  const [showEmergency, setShowEmergency] = useState(false);

  return (
    <PageContainer>
      <div
        className="sticky top-0 z-50 bg-linear-to-b from-green-50 via-green-50 to-white pb-4
      "
      >
        <Header />

        <div className="px-4">
          <HeroCard />
        </div>
      </div>

      <div className="px-4">
        <BillingCard />

        <AnnouncementCard />

        <ServiceMenu />
      </div>

      <BottomNav onEmergencyClick={() => setShowEmergency(true)} />
      <EmergencySheet
        isOpen={showEmergency}
        onClose={() => setShowEmergency(false)}
      />
    </PageContainer>
  );
}
