"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto mt-10 max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">SiKoWar</h1>

        <p className="mt-2 text-gray-500">Sistem Komunikasi Warga</p>
      </div>

      <input
        placeholder="Email / Nomor HP"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full rounded-2xl border p-4"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-2xl border p-4"
      />

      <button
        className="
          w-full
          rounded-2xl
          bg-green-700
          py-4
          font-semibold
          text-white
        "
      >
        Masuk
      </button>

      <Link
        href="/activation"
        className="
          block
          text-center
          text-sm
          text-green-700
        "
      >
        Belum punya akun? Aktivasi
      </Link>
    </div>
  );
}
