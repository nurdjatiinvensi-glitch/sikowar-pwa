"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import HouseContent from "@/features/house/HouseContent";
import { houseData } from "@/features/house/houseData";

export default function HousePage() {
  const totalHouse = houseData.length;

  const owner = houseData.filter(
    (item) => item.occupancyStatus === "owner",
  ).length;

  const tenant = houseData.filter(
    (item) => item.occupancyStatus === "tenant",
  ).length;

  const vacant = houseData.filter(
    (item) => item.occupancyStatus === "vacant",
  ).length;

  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Data Rumah"
          subtitle="Master Data Rumah"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <p className="text-sm font-medium text-green-700">Total Rumah</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {totalHouse}
          </h2>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>🏠 Owner {owner}</span>
            <span>🔑 Sewa {tenant}</span>
            <span>⬜ Kosong {vacant}</span>
          </div>
        </div>

        <HouseContent />
      </PageContent>
    </AppLayout>
  );
}
