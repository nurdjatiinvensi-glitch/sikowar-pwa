"use client";

import { useState } from "react";

import PageContainer from "@/components/layout/PageContainer";
import BottomNav from "@/components/menus/BottomNav";
import EmergencySheet from "@/components/sheets/EmergencySheet";

type AppLayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  bottomNav?: boolean;
  hideBottomNav?: boolean;
  activeMenu?: "beranda" | "laporan" | "pengurus" | "profile";
};

export default function AppLayout({
  children,
  header,
  bottomNav = true,
  hideBottomNav = false,
  activeMenu = "beranda",
}: AppLayoutProps) {
  const [showEmergency, setShowEmergency] = useState(false);

  return (
    <PageContainer>
      <div className="relative flex h-full flex-col">
        <main className="flex flex-1 flex-col overflow-hidden">
          {header}

          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              hide-scrollbar
            "
          >
            {children}
          </div>
        </main>

        {bottomNav && !hideBottomNav && (
          <BottomNav
            active={activeMenu}
            onEmergencyClick={() => setShowEmergency(true)}
          />
        )}

        <EmergencySheet
          isOpen={showEmergency}
          onClose={() => setShowEmergency(false)}
        />
      </div>
    </PageContainer>
  );
}
