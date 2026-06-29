import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

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
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">{visitor.visitorName}</h1>

          <p className="mt-2 text-white/90">Detail Visitor</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
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
      </div>
    </AppLayout>
  );
}
