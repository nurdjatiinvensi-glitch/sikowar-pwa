"use client";

import { useState } from "react";

import PageContainer from "@/components/layout/PageContainer";
import BottomNav from "@/components/menus/BottomNav";
import EmergencySheet from "@/components/sheets/EmergencySheet";

type AppLayoutProps = {
  children: React.ReactNode;
  bottomNav?: boolean;
};

export default function AppLayout({
  children,
  bottomNav = true,
}: AppLayoutProps) {
  const [showEmergency, setShowEmergency] = useState(false);

  return (
    <PageContainer>
      {children}

      {bottomNav && (
        <BottomNav onEmergencyClick={() => setShowEmergency(true)} />
      )}

      <EmergencySheet
        isOpen={showEmergency}
        onClose={() => setShowEmergency(false)}
      />
    </PageContainer>
  );
}
