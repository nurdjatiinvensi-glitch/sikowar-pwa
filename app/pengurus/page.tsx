"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PengurusContent from "@/features/pengurus/PengurusContent";
import Link from "next/link";

export default function PengurusPage() {
  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />
          <div className="px-6 pt-8 pb-8 text-white">
            <h1 className="text-3xl font-bold">Dashboard Pengurus</h1>

            <p className="mt-2 text-white/90">Kelola Komunitas dengan mudah</p>

            <Link href="/pengurus/approval">
              <div className="mt-6 rounded-3xl bg-white/20 p-5 backdrop-blur">
                <p className="text-sm text-white/80">Pending Registrasi</p>

                <h2 className="mt-2 text-4xl font-bold">2</h2>

                <p className="mt-2 text-sm">Klik untuk melihat daftar</p>
              </div>
            </Link>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <PengurusContent />
        </div>
      </div>
    </AppLayout>
  );
}
