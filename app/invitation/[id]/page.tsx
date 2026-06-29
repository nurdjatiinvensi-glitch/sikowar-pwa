import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import { invitationData } from "@/features/invitation/invitationData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function InvitationDetailPage({ params }: Props) {
  const { id } = await params;

  const invitation = invitationData.find((item) => item.id === id);

  if (!invitation) {
    return <div className="p-6">Invitation tidak ditemukan</div>;
  }

  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">{invitation.fullName}</h1>

          <p className="mt-2 text-white/90">Detail Invitation</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Nama</span>

              <span className="font-semibold">{invitation.fullName}</span>
            </div>

            <div className="flex justify-between">
              <span>Email</span>

              <span className="font-semibold">{invitation.email || "-"}</span>
            </div>

            <div className="flex justify-between">
              <span>Telepon</span>

              <span className="font-semibold">{invitation.phone}</span>
            </div>

            <div className="flex justify-between">
              <span>Kode</span>

              <span className="font-semibold">
                {invitation.invitationCode || "-"}
              </span>
            </div>
          </div>

          <button
            className="
              mt-8
              w-full
              rounded-2xl
              bg-green-700
              py-4
              font-semibold
              text-white
            "
          >
            Kirim Invitation
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
