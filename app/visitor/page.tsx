"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import VisitorContent from "@/features/visitor/VisitorContent";
import { visitorData } from "@/features/visitor/visitorData";

export default function VisitorPage() {
  const waiting = visitorData.filter(
    (item) => item.status === "waiting",
  ).length;

  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Visitor"
          subtitle="Tamu Komunitas"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <p className="text-sm font-medium text-green-700">
            Menunggu Persetujuan
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">{waiting}</h2>

          <p className="mt-2 text-gray-500">Visitor Hari Ini</p>
        </div>

        <VisitorContent />
      </PageContent>
    </AppLayout>
  );
}
