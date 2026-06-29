"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import ComplaintContent from "@/features/complaint/ComplaintContent";
import { complaintData } from "@/features/complaint/complaintData";

export default function ComplaintPage() {
  const totalComplaint = complaintData.length;

  const newComplaint = complaintData.filter(
    (item) => item.status === "new",
  ).length;

  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Keluhan</h1>

            <p className="mt-1 text-white/90">Aspirasi & Keluhan Warga</p>

            <div className="mt-6 rounded-3xl bg-white/20 p-5 backdrop-blur">
              <p className="text-sm text-white/80">Keluhan Baru</p>

              <h2 className="mt-2 text-3xl font-bold">{newComplaint}</h2>

              <p className="mt-2 text-sm text-white/90">
                Total {totalComplaint} Laporan
              </p>
            </div>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <ComplaintContent />
        </div>
      </div>
    </AppLayout>
  );
}
