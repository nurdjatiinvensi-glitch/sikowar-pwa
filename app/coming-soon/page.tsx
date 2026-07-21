"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

export default function ComingSoonPage() {
  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Dalam Pengembangan"
          subtitle="Fitur Sedang Kami Kembangkan"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        <div
          className="
            -mt-2
            rounded-3xl
            bg-white
            p-6
            text-center
            shadow-sm
          "
        >
          <div className="text-6xl">🚧</div>

          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            Fitur Belum Tersedia
          </h2>

          <p className="mt-3 leading-7 text-gray-500">
            Fitur ini sedang kami kembangkan dan akan segera tersedia. Terima
            kasih atas dukungan dan masukannya untuk SiKoWar.
          </p>

          <div className="mt-6 rounded-2xl bg-green-50 p-4 text-left">
            <p className="font-semibold text-green-700">Status Pengembangan</p>

            <p className="mt-1 text-sm text-gray-600">
              🟡 Sedang dalam pengembangan
            </p>
          </div>
        </div>
      </PageContent>
    </AppLayout>
  );
}
