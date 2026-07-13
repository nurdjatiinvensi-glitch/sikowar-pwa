"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import ScrollContainer from "@/components/layout/ScrollContainer";
import PengurusContent from "@/features/pengurus/PengurusContent";
import PengurusDetailSheet from "@/features/pengurus/components/PengurusDetailSheet";
import type { PengurusItem } from "@/features/pengurus/types";
import { useState } from "react";

export default function PengurusPage() {
  const [selectedPengurus, setSelectedPengurus] = useState<PengurusItem | null>(
    null,
  );

  return (
    <AppLayout activeMenu="pengurus" hideBottomNav={selectedPengurus !== null}>
      <HeaderBackground variant="default" title="Pengurus" showBackButton />

      <ScrollContainer>
        <div className="px-4 py-6">
          <PengurusContent onItemClick={(item) => setSelectedPengurus(item)} />
        </div>
      </ScrollContainer>

      <PengurusDetailSheet
        open={selectedPengurus !== null}
        item={selectedPengurus}
        onClose={() => setSelectedPengurus(null)}
      />
    </AppLayout>
  );
}
