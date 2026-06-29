"use client";

import { useState } from "react";

export default function ActivationForm() {
  const [invitationCode, setInvitationCode] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Kode Invitation
        </label>

        <input
          value={invitationCode}
          onChange={(e) => setInvitationCode(e.target.value)}
          className="w-full rounded-2xl border p-4"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-2xl border p-4"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Konfirmasi Password
        </label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-2xl border p-4"
        />
      </div>

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
        Aktivasi Akun
      </button>
    </div>
  );
}
