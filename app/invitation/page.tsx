"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

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
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Invitation"
          subtitle="Undangan Aktivasi Warga"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">
                Belum Diundang
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                {pending}
              </h2>
            </div>

            <div className="text-right text-sm text-gray-600">
              <p>Terkirim : {sent}</p>
              <p>Aktif : {activated}</p>
            </div>
          </div>
        </div>

        <InvitationContent />
      </PageContent>
    </AppLayout>
  );
}
