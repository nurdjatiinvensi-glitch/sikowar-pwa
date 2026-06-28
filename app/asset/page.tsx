"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import AssetContent from "@/features/asset/AssetContent";
import { assetData } from "@/features/asset/assetData";

export default function AssetPage() {
  const available = assetData.filter(
    (item) => item.status === "available",
  ).length;

  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Asset</h1>

            <p className="mt-1 text-white/90">Inventaris Komunitas</p>

            <div className="mt-6 rounded-3xl bg-white/20 p-5 backdrop-blur">
              <p className="text-sm text-white/80">Asset Tersedia</p>

              <h2 className="mt-2 text-3xl font-bold">{available} Item</h2>

              <p className="mt-2 text-sm text-white/90">Siap dipinjam warga</p>
            </div>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <AssetContent />
        </div>
      </div>
    </AppLayout>
  );
}
