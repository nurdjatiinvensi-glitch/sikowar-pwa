import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import { complaintData } from "@/features/complaint/complaintData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ComplaintDetailPage({ params }: Props) {
  const { id } = await params;

  const complaint = complaintData.find((item) => item.id === id);

  if (!complaint) {
    return <div className="p-6">Keluhan tidak ditemukan</div>;
  }

  const statusLabel = {
    new: "Baru",
    process: "Sedang Diproses",
    done: "Selesai",
  };

  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">{complaint.title}</h1>

          <p className="mt-2 text-white/90">Detail Keluhan</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Kategori</span>
              <span className="font-semibold">{complaint.category}</span>
            </div>

            <div className="flex justify-between">
              <span>Pelapor</span>
              <span className="font-semibold">{complaint.reporter}</span>
            </div>

            <div className="flex justify-between">
              <span>Tanggal</span>
              <span className="font-semibold">{complaint.date}</span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <span className="font-semibold">
                {statusLabel[complaint.status]}
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
            Lihat Progress
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
