"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

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
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Data Rumah</h1>

            <p className="mt-1 text-white/90">Master Data Rumah</p>

            <div className="mt-6 rounded-3xl bg-white/20 p-5 backdrop-blur">
              <h2 className="text-3xl font-bold">{totalHouse}</h2>

              <div className="mt-3 flex gap-4 text-sm">
                <span>🏠 Owner {owner}</span>

                <span>🔑 Sewa {tenant}</span>

                <span>⬜ Kosong {vacant}</span>
              </div>
            </div>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <HouseContent />
        </div>
      </div>
    </AppLayout>
  );
}
