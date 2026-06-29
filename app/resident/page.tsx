"use client";

import { useSearchParams } from "next/navigation";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import ResidentCard from "@/features/resident/ResidentCard";
import { residentData } from "@/features/resident/residentData";

export default function ResidentPage() {
  const searchParams = useSearchParams();

  const houseId = searchParams.get("houseId");

  const residents = houseId
    ? residentData.filter((item) => item.houseId === houseId)
    : residentData;

  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Data Warga</h1>

            <p className="mt-1 text-white/90">
              {houseId ? "Warga pada Rumah" : "Master Data Warga"}
            </p>
          </div>
        </HeaderBackground>

        <div className="flex-1 space-y-4 overflow-y-auto px-4 py-6 pb-28">
          {residents.map((item) => (
            <ResidentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
