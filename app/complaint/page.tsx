"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import ComplaintContent from "@/features/complaint/ComplaintContent";
import { complaintData } from "@/features/complaint/complaintData";

export default function ComplaintPage() {
  const totalComplaint = complaintData.length;

  const newComplaint = complaintData.filter(
    (item) => item.status === "new",
  ).length;

  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Keluhan"
          subtitle="Aspirasi & Keluhan Warga"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <p className="text-sm font-medium text-green-700">Keluhan Baru</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {newComplaint}
          </h2>

          <p className="mt-2 text-gray-500">Total {totalComplaint} Laporan</p>
        </div>

        <ComplaintContent />
      </PageContent>
    </AppLayout>
  );
}
