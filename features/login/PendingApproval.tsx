"use client";

import { Clock3 } from "lucide-react";
import Link from "next/link";

export default function PendingApproval() {
  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white p-8 text-center shadow-lg">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
        <Clock3 size={40} className="text-yellow-600" />
      </div>

      <h1 className="mt-6 text-2xl font-bold text-gray-800">
        Registrasi Berhasil
      </h1>

      <p className="mt-4 leading-7 text-gray-500">
        Terima kasih telah mendaftar di
        <span className="font-semibold text-green-700"> SiKoWar</span>.
      </p>

      <p className="mt-3 leading-7 text-gray-500">
        Akun Anda sedang menunggu persetujuan Pengurus.
      </p>

      <div className="mt-8 rounded-2xl bg-green-50 p-4">
        <p className="text-sm text-green-700">Estimasi proses verifikasi</p>

        <p className="mt-1 text-lg font-semibold text-green-800">
          &lt; 1 x 24 Jam
        </p>
      </div>

      <Link
        href="/login"
        className="
          mt-8
          inline-flex
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
        Kembali ke Login
      </Link>
    </div>
  );
}
