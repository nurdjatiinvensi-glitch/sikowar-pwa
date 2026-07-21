"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import AnnouncementContent from "@/features/announcement/AnnouncementContent";

export default function AnnouncementsPage() {
  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Pengumuman"
          subtitle="Pengumuman Terkini"
          showBackButton
        />
      }
    >
      <PageContent className=" px-4 pt-4 pb-28">
        <AnnouncementContent />
      </PageContent>
    </AppLayout>
  );
}
