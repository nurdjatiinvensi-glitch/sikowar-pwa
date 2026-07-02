"use client";

import { useRouter } from "next/navigation";

import { pengurusData } from "./pengurusData";

export default function PengurusContent() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Registrasi Menunggu Approval</h2>

      {pengurusData.map((item) => (
        <div key={item.id} className="rounded-3xl bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">{item.fullName}</h3>

          <p className="mt-1 text-sm text-gray-500">Rumah {item.houseCode}</p>

          <p className="mt-1 text-sm text-gray-500">{item.relationship}</p>

          <div className="mt-5 flex gap-3">
            <button
              onClick={() => router.push("/activation")}
              className="
                flex-1
                rounded-2xl
                bg-green-700
                py-3
                font-semibold
                text-white
              "
            >
              Approve
            </button>

            <button
              className="
                flex-1
                rounded-2xl
                bg-red-100
                py-3
                font-semibold
                text-red-600
              "
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
