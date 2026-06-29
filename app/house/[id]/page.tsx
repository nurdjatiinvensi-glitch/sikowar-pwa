import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import { houseData } from "@/features/house/houseData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function HouseDetailPage({ params }: Props) {
  const { id } = await params;

  const house = houseData.find((item) => item.id === id);

  if (!house) {
    return <div className="p-6">Rumah tidak ditemukan</div>;
  }

  const status = {
    owner: "Owner Occupied",
    tenant: "Tenant Occupied",
    vacant: "Vacant",
  };

  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">{house.houseCode}</h1>

          <p className="mt-2 text-white/90">Detail Rumah</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Kode Rumah</span>

              <span className="font-semibold">{house.houseCode}</span>
            </div>

            <div className="flex justify-between">
              <span>Alamat</span>

              <span className="font-semibold">{house.address}</span>
            </div>

            <div className="flex justify-between">
              <span>Owner</span>

              <span className="font-semibold">{house.ownerName}</span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>

              <span className="font-semibold">
                {status[house.occupancyStatus]}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Penghuni</span>

              <span className="font-semibold">{house.residentCount}</span>
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
            Lihat Data Warga
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
