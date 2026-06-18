import { profileData } from "@/data/profileData";

import { ChevronRight, Lock, LogOut, Mail, Phone, Shield } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div
        className="
    -mx-6
    -mt-6
    rounded-b-[40px]
bg-red-600
    px-6
    pt-8
    pb-10
    text-white
  "
      >
        <div className="flex flex-col items-center">
          <div
            className="
        flex h-24 w-24 items-center justify-center
        rounded-full
        border-4 border-white/40
        bg-white/20
        text-3xl font-bold
      "
          >
            DJ
          </div>

          <h1 className="mt-4 text-2xl font-bold">{profileData.name}</h1>

          <p>{profileData.role}</p>

          <p className="text-sm text-green-100">{profileData.residence}</p>
        </div>
      </div>

      <div className="mt-4 flex border-b">
        <button className="flex-1 border-b-2 border-green-700 py-3 font-medium text-green-700">
          Akun
        </button>

        <button className="flex-1 py-3 text-gray-500">Data Warga</button>
      </div>

      {/* Akun */}
      <div className="mt-8 rounded-2xl bg-white p-4 shadow">
        <h2 className="mb-4 font-semibold">Akun Saya</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-green-700" />

            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p>{profileData.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={18} className="text-green-700" />

            <div>
              <p className="text-xs text-gray-500">No HP</p>
              <p>{profileData.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield size={18} className="text-green-700" />

            <div>
              <p className="text-xs text-gray-500">Role</p>
              <p>{profileData.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Keamanan */}
      <div className="mt-4 rounded-2xl bg-white p-4 shadow">
        <button className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock size={18} className="text-green-700" />
            <span>Ubah Password</span>
          </div>

          <ChevronRight size={18} />
        </button>
      </div>

      {/* Aplikasi */}
      <div className="mt-4 rounded-2xl bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <span>Versi Aplikasi</span>

          <span className="text-gray-500">{profileData.version}</span>
        </div>
      </div>

      {/* Logout */}
      <button
        className="
          mt-6 flex w-full items-center justify-center gap-2
          rounded-2xl border border-red-200
          py-3 text-red-600
        "
      >
        <LogOut size={18} />
        Keluar
      </button>
    </div>
  );
}
