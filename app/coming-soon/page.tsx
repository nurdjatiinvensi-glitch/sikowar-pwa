"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

export default function ComingSoonPage() {
  return (
    <AppLayout activeMenu="home">
      <HeaderBackground variant="default">
        <div className="px-6 pt-4">
          <BackButton />

          <div className="mt-8 text-white">
            <h1 className="text-3xl font-bold">Dalam Pengembangan</h1>

            <p className="mt-2 text-white/90">
              Fitur ini sedang kami kembangkan dan akan segera tersedia.
            </p>
          </div>
        </div>
      </HeaderBackground>

      <div className="px-6 py-8">
        <div
          className="
            rounded-3xl
            bg-white
            p-8
            text-center
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
        >
          <div className="text-6xl">🚧</div>

          <h2 className="mt-4 text-xl font-bold text-gray-800">
            Fitur Belum Tersedia
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Tim SiKoWar sedang menyiapkan fitur ini. Terima kasih atas dukungan
            dan masukannya.
          </p>

          <div
            className="
              mt-6
              rounded-2xl
              bg-green-50
              p-4
              text-left
            "
          >
            <p className="font-semibold text-green-700">Status</p>

            <p className="mt-1 text-sm text-gray-600">
              🟡 Sedang dalam pengembangan
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
