"use client";

import { useRouter } from "next/navigation";
import { approvalData } from "./approvalData";

export default function ApprovalContent() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-8 text-3xl font-bold">Approval Registrasi</h1>

      <div className="space-y-4">
        {approvalData.map((item) => (
          <div key={item.id} className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-xs text-gray-400">{item.id}</p>

            <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>

            <p className="mt-1 text-gray-500">Rumah {item.houseCode}</p>

            <p className="mt-1 text-gray-500">{item.relationship}</p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => router.push("/activation")}
                className="
                  flex-1
                  rounded-xl
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
                  rounded-xl
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
    </div>
  );
}
