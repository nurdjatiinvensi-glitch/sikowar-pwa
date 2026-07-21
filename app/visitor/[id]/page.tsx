import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import { visitorData } from "@/features/visitor/visitorData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VisitorDetailPage({ params }: Props) {
  const { id } = await params;

  const visitor = visitorData.find((item) => item.id === id);

  if (!visitor) {
    return <div className="p-6">Visitor tidak ditemukan</div>;
  }

  const statusLabel = {
    waiting: "Menunggu",
    "checked-in": "Sudah Masuk",
    "checked-out": "Sudah Keluar",
  };

  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Detail Visitor"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <span className="text-sm font-medium text-green-700">Visitor</span>

          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {visitor.visitorName}
          </h1>

          <p className="mt-2 text-gray-500">{visitor.destination}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Nama</span>
              <span className="font-semibold">{visitor.visitorName}</span>
            </div>

            <div className="flex justify-between">
              <span>Tujuan</span>
              <span className="font-semibold">{visitor.destination}</span>
            </div>

            <div className="flex justify-between">
              <span>Keperluan</span>
              <span className="font-semibold">{visitor.purpose}</span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <span className="font-semibold">
                {statusLabel[visitor.status]}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Tanggal</span>
              <span className="font-semibold">{visitor.visitDate}</span>
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
            Setujui Visitor
          </button>
        </div>
      </PageContent>
    </AppLayout>
  );
}
