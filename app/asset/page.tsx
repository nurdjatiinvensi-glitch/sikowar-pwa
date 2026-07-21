"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import AssetContent from "@/features/asset/AssetContent";
import { assetData } from "@/features/asset/assetData";

export default function AssetPage() {
  const available = assetData.filter(
    (item) => item.status === "available",
  ).length;

  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Asset"
          subtitle="Inventaris Komunitas"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <p className="text-sm font-medium text-green-700">Asset Tersedia</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {available} Item
          </h2>

          <p className="mt-2 text-gray-500">Siap dipinjam warga</p>
        </div>

        <AssetContent />
      </PageContent>
    </AppLayout>
  );
}
