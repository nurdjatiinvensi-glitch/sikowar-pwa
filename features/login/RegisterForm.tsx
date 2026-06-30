"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();

  const [houseCode, setHouseCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("owner");

  const handleRegister = () => {
    // TODO:
    // Validasi MD Rumah
    // Simpan Registrasi
    router.push("/pending-approval");
  };

  return (
    <div className="mx-auto mt-10 max-w-md space-y-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">Daftar</h1>

        <p className="mt-2 text-gray-500">Bergabung dengan Komunitas</p>
      </div>

      <input
        placeholder="Nomor Rumah"
        value={houseCode}
        onChange={(e) => setHouseCode(e.target.value)}
        className="w-full rounded-2xl border p-4"
      />

      <input
        placeholder="Nama Lengkap"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full rounded-2xl border p-4"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-2xl border p-4"
      />

      <input
        placeholder="Nomor HP"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-2xl border p-4"
      />

      <select
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
        className="w-full rounded-2xl border p-4"
      >
        <option value="owner">Pemilik Rumah</option>
        <option value="family">Anggota Keluarga</option>
        <option value="tenant">Penyewa / Kontrak</option>
      </select>

      <button
        type="button"
        onClick={handleRegister}
        className="
          w-full
          rounded-2xl
          bg-green-700
          py-4
          font-semibold
          text-white
        "
      >
        Daftar
      </button>

      <Link
        href="/login"
        className="
          block
          text-center
          text-sm
          text-green-700
        "
      >
        Sudah punya akun? Masuk
      </Link>
    </div>
  );
}
