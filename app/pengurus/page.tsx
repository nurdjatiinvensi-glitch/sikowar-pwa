"use client";

import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import PengurusContent from "@/features/pengurus/PengurusContent";
import PengurusDetailSheet from "@/features/pengurus/components/PengurusDetailSheet";
import type { PengurusItem } from "@/features/pengurus/types";

export default function PengurusPage() {
  const [selectedPengurus, setSelectedPengurus] = useState<PengurusItem | null>(
    null,
  );

  return (
    <AppLayout
      activeMenu="pengurus"
      hideBottomNav={selectedPengurus !== null}
      header={
        <HeaderBackground
          variant="page"
          title="Pengurus"
          subtitle="Daftar Pengurus"
          showBackButton
        />
      }
    >
      <PageContent className="pb-28">
        <PengurusContent onItemClick={(item) => setSelectedPengurus(item)} />
      </PageContent>

      <PengurusDetailSheet
        open={selectedPengurus !== null}
        item={selectedPengurus}
        onClose={() => setSelectedPengurus(null)}
      />
    </AppLayout>
  );
}
