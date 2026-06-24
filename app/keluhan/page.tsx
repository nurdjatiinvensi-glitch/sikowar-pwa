"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";

import KeluhanCard from "@/components/cards/KeluhanCard";

import BackButton from "@/components/layout/BackButton";
import { keluhanData } from "@/data/keluhanData";

export default function KeluhanPage() {
  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <BackButton />
        <div className="px-6 pt-8 pb-8 text-white">
          <h1 className="text-3xl font-bold">Keluhan</h1>

          <p className="mt-2 text-white/90">Aspirasi dan Keluhan warga</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        {keluhanData.map((item) => (
          <KeluhanCard
            key={item.id}
            title={item.title}
            category={item.category}
            date={item.date}
            status={item.status}
          />
        ))}
      </div>
    </AppLayout>
  );
}
