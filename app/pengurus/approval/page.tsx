"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import ApprovalList from "@/features/approval/ApprovalList";

export default function ApprovalPage() {
  return (
    <AppLayout activeMenu="pengurus">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Pusat Persetujuan</h1>

            <p className="mt-2 text-white/90">Registrasi Warga Baru</p>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <ApprovalList />
        </div>
      </div>
    </AppLayout>
  );
}
