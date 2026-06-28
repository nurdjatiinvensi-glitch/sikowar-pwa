import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import { assetData } from "@/features/asset/assetData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AssetDetailPage({ params }: Props) {
  const { id } = await params;

  const asset = assetData.find((item) => item.id === id);

  if (!asset) {
    return <div className="p-6">Asset tidak ditemukan</div>;
  }

  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">{asset.name}</h1>

          <p className="mt-2 text-white/90">Detail Asset</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{asset.category}</h2>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between">
              <span>Total Unit</span>
              <span className="font-semibold">{asset.total}</span>
            </div>

            <div className="flex justify-between">
              <span>Tersedia</span>
              <span className="font-semibold text-green-700">
                {asset.available}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <span className="font-semibold">{asset.status}</span>
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
            Pinjam Asset
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
