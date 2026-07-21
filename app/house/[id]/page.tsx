import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import { houseData } from "@/features/house/houseData";

import Link from "next/link";

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
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground variant="page" title="Detail Rumah" showBackButton />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <span className="text-sm font-medium text-green-700">Rumah</span>

          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {house.houseCode}
          </h1>

          <p className="mt-2 text-gray-500">{house.address}</p>
        </div>

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

          <Link
            href={`/resident?houseId=${house.id}`}
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              rounded-2xl
              bg-green-700
              py-4
              font-semibold
              text-white
            "
          >
            Lihat Data Warga
          </Link>
        </div>
      </PageContent>
    </AppLayout>
  );
}
