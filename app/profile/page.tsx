"use client";

import SettingCard from "@/components/cards/SettingCard";
import NotificationButton from "@/components/common/NotificationButton";
import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";
import { profileData } from "@/data/profileData";

import { House, Info, Lock, LogOut, Shield, User, Users } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"account" | "resident">("account");

  return (
    <AppLayout activeMenu="profile">
      <div className="flex h-screen flex-col bg-white">
        {/* HEADER */}
        <HeaderBackground variant="default">
          <BackButton />

          <div
            className="
              shrink-0
              rounded-b-[40px]
              px-6
              pt-6
              pb-6
              text-white
            "
          >
            {/* Top Bar */}
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Profil Saya</h1>

              <NotificationButton />
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div
                  className="
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-white/40
                    bg-white/20
                    text-4xl
                    font-bold
                  "
                >
                  NT
                </div>

                <button
                  className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-gray-700
                    shadow-md
                  "
                >
                  📷
                </button>
              </div>

              <h2 className="mt-3 text-3xl font-bold">{profileData.name}</h2>

              <p className="mt-0.5 text-lg">Warga RT 02</p>

              <p className="text-sm text-white/80">{profileData.residence}</p>
            </div>
          </div>
        </HeaderBackground>

        {/* TAB */}
        <div className="shrink-0 border-b bg-white">
          <div className="flex">
            <button
              onClick={() => setActiveTab("account")}
              className={`flex-1 py-4 ${
                activeTab === "account"
                  ? "border-b-2 border-green-700 font-medium text-green-700"
                  : "text-gray-500"
              }`}
            >
              Akun
            </button>

            <button
              onClick={() => setActiveTab("resident")}
              className={`flex-1 py-4 ${
                activeTab === "resident"
                  ? "border-b-2 border-green-700 font-medium text-green-700"
                  : "text-gray-500"
              }`}
            >
              Data Warga
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-28">
          {activeTab === "account" && (
            <>
              <div className="space-y-4">
                <SettingCard
                  icon={<User size={22} />}
                  title="Informasi Akun"
                  description="Email, Nomor HP, Nama Login"
                />

                <SettingCard
                  icon={<Lock size={22} />}
                  title="PIN & Keamanan"
                  description="Atur PIN, Ubah Password, Biometrik"
                />

                <SettingCard
                  icon={<Info size={22} />}
                  title="Notifikasi"
                  description="Pengaturan notifikasi aplikasi"
                />

                <SettingCard
                  icon={<Info size={22} />}
                  title="Tentang Aplikasi"
                  description="Versi, Kebijakan, Bantuan"
                />
              </div>

              <button
                className="
                  mt-6
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-red-200
                  py-4
                  text-red-600
                "
              >
                <LogOut size={18} />
                Keluar
              </button>
            </>
          )}

          {activeTab === "resident" && (
            <div className="space-y-4">
              <SettingCard
                icon={<User size={22} />}
                title="Identitas"
                description="Nama Lengkap, NIK"
              />

              <SettingCard
                icon={<House size={22} />}
                title="Alamat Domisili"
                description="Data alamat rumah"
              />

              <SettingCard
                icon={<Shield size={22} />}
                title="Status Rumah"
                description="Pemilik / Kontrak"
              />

              <SettingCard
                icon={<Users size={22} />}
                title="Anggota Keluarga"
                description="Data anggota keluarga"
              />
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
