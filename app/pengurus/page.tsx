"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";

import PengurusCard from "@/components/cards/PengurusCard";

import BackButton from "@/components/layout/BackButton";
import { pengurusData } from "@/data/pengurusData";

export default function PengurusPage() {
  return (
    <AppLayout activeMenu="pengurus">
      {/* HEADER */}
      <HeaderBackground variant="default">
        <BackButton />
        <div className="px-6 pt-8 pb-8 text-white">
          <h1 className="text-3xl font-bold">Pengurus RT</h1>

          <p className="mt-2 text-white/90">
            Struktur organisasi dan kontak pengurus
          </p>
        </div>
      </HeaderBackground>

      {/* CONTENT */}
      <div className="px-6 py-6">
        {pengurusData.map((item) => (
          <PengurusCard
            key={item.id}
            nama={item.nama}
            jabatan={item.jabatan}
            phone={item.phone}
          />
        ))}
      </div>
    </AppLayout>
  );
}
