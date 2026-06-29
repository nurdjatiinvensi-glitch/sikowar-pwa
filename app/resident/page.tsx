"use client";

import { Suspense } from "react";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import ResidentPageContent from "@/features/resident/ResidentPageContent";

export default function ResidentPage() {
  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Data Warga</h1>

            <p className="mt-1 text-white/90">Master Data Warga</p>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <Suspense fallback={<div>Loading...</div>}>
            <ResidentPageContent />
          </Suspense>
        </div>
      </div>
    </AppLayout>
  );
}
