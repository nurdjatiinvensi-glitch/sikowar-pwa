"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function BerandaHeader() {
  return (
    <header className="relative h-36 w-full overflow-hidden rounded-b-[28px]">
      {/* Background */}
      <Image
        src="/images/header-beranda.png"
        alt="Header Beranda"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Header Content */}
      <div
        className="
          absolute
          inset-x-0
          top-5
          flex
          items-center
          gap-4
          px-5
        "
      >
        {/* Logo */}
        <button
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-md
          "
        >
          <span className="text-2xl font-bold text-green-700">SK</span>
        </button>

        {/* Search */}
        <button
          className="
            flex
            h-14
            flex-1
            items-center
            gap-3
            rounded-full
            bg-white
            px-5
            text-left
            shadow-md
          "
        >
          <Search size={22} className="text-gray-400" />

          <span className="text-lg text-gray-500">Cari menu, info, dll</span>
        </button>

        {/* Notification */}
        <button
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white/20
            backdrop-blur-sm
          "
        >
          <Bell size={24} className="text-white" />

          <span
            className="
              absolute
              right-2
              top-2
              h-3
              w-3
              rounded-full
              bg-red-500
              ring-2
              ring-white
            "
          />
        </button>
      </div>
    </header>
  );
}
