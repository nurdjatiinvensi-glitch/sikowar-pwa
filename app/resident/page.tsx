"use client";

import { Suspense } from "react";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import ResidentPageContent from "@/features/resident/ResidentPageContent";

export default function ResidentPage() {
  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Data Warga"
          subtitle="Master Data Warga"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        <Suspense fallback={<div>Loading...</div>}>
          <ResidentPageContent />
        </Suspense>
      </PageContent>
    </AppLayout>
  );
}
