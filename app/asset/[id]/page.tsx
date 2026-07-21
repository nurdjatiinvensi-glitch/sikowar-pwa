import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

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
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground variant="page" title="Detail Asset" showBackButton />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <span className="text-sm font-medium text-green-700">
            Asset Komunitas
          </span>

          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {asset.name}
          </h1>

          <p className="mt-2 text-gray-500">{asset.category}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="space-y-3">
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
      </PageContent>
    </AppLayout>
  );
}
