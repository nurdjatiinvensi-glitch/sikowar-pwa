"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import ActivationForm from "@/features/activation/ActivationForm";

export default function ActivationPage() {
  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Aktivasi Akun</h1>

            <p className="mt-2 text-white/90">Aktivasi akun warga</p>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-6 py-6 pb-28">
          <ActivationForm />
        </div>
      </div>
    </AppLayout>
  );
}
