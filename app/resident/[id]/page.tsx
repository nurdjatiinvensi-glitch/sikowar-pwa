import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import { residentData } from "@/features/resident/residentData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResidentDetailPage({ params }: Props) {
  const { id } = await params;

  const resident = residentData.find((item) => item.id === id);

  if (!resident) {
    return <div className="p-6">Data warga tidak ditemukan</div>;
  }

  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">{resident.name}</h1>

          <p className="mt-2 text-white/90">Detail Warga</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>NIK</span>
              <span className="font-semibold">{resident.nik}</span>
            </div>

            <div className="flex justify-between">
              <span>Alamat</span>
              <span className="font-semibold">{resident.address}</span>
            </div>

            <div className="flex justify-between">
              <span>No. HP</span>
              <span className="font-semibold">{resident.phone}</span>
            </div>

            <div className="flex justify-between">
              <span>Status Rumah</span>
              <span className="font-semibold">
                {resident.houseStatus === "owner" ? "Pemilik" : "Kontrak"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Anggota Keluarga</span>
              <span className="font-semibold">
                {resident.familyCount} Orang
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
            Lihat Kartu Keluarga
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
