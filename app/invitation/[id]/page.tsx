import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

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
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Detail Invitation"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <span className="text-sm font-medium text-green-700">
            Undangan Aktivasi
          </span>

          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {invitation.fullName}
          </h1>

          <p className="mt-2 text-gray-500">{invitation.phone}</p>
        </div>

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
      </PageContent>
    </AppLayout>
  );
}
