"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import ResidentContent from "@/features/resident/ResidentContent";
import { residentData } from "@/features/resident/residentData";

export default function ResidentPage() {
  const totalResident = residentData.length;

  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Data Warga</h1>

            <p className="mt-1 text-white/90">Daftar Warga Komunitas</p>

            <div className="mt-6 rounded-3xl bg-white/20 p-5 backdrop-blur">
              <p className="text-sm text-white/80">Total Warga</p>

              <h2 className="mt-2 text-3xl font-bold">{totalResident} Orang</h2>

              <p className="mt-2 text-sm text-white/90">Warga terdaftar</p>
            </div>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <ResidentContent />
        </div>
      </div>
    </AppLayout>
  );
}
