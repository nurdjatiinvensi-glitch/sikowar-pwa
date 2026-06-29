"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import InvitationContent from "@/features/invitation/InvitationContent";
import { invitationData } from "@/features/invitation/invitationData";

export default function InvitationPage() {
  const pending = invitationData.filter(
    (item) => item.status === "pending",
  ).length;

  const sent = invitationData.filter((item) => item.status === "sent").length;

  const activated = invitationData.filter(
    (item) => item.status === "activated",
  ).length;

  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Invitation</h1>

            <p className="mt-1 text-white/90">Undangan Aktivasi Warga</p>

            <div className="mt-6 rounded-3xl bg-white/20 p-5 backdrop-blur">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-white/80">Belum Diundang</p>

                  <h2 className="text-3xl font-bold">{pending}</h2>
                </div>

                <div className="text-right text-sm">
                  <p>Terkirim : {sent}</p>

                  <p>Aktif : {activated}</p>
                </div>
              </div>
            </div>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <InvitationContent />
        </div>
      </div>
    </AppLayout>
  );
}
