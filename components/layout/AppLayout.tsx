"use client";

import { useState } from "react";

import PageContainer from "@/components/layout/PageContainer";
import BottomNav from "@/components/menus/BottomNav";
import EmergencySheet from "@/components/sheets/EmergencySheet";

type AppLayoutProps = {
  children: React.ReactNode;
  bottomNav?: boolean;
  hideBottomNav?: boolean;
  activeMenu?: "beranda" | "laporan" | "pengurus" | "profile";
};

export default function AppLayout({
  children,
  bottomNav = true,
  hideBottomNav = false,
  activeMenu = "beranda",
}: AppLayoutProps) {
  const [showEmergency, setShowEmergency] = useState(false);

  return (
    <PageContainer>
      <div className="relative flex h-full flex-col">
        {/* Main Content */}
        <main className="flex-1 overflow-hidden">{children}</main>

        {/* Bottom Navigation */}
        {bottomNav && !hideBottomNav && (
          <BottomNav
            active={activeMenu}
            onEmergencyClick={() => setShowEmergency(true)}
          />
        )}

        {/* Global Emergency Sheet */}
        <EmergencySheet
          isOpen={showEmergency}
          onClose={() => setShowEmergency(false)}
        />
      </div>
    </PageContainer>
  );
}
