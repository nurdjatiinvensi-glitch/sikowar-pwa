import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

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
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Detail Keluhan"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <span className="text-sm font-medium text-green-700">
            Keluhan Warga
          </span>

          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {complaint.title}
          </h1>

          <p className="mt-2 text-gray-500">{complaint.category}</p>
        </div>

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
      </PageContent>
    </AppLayout>
  );
}
