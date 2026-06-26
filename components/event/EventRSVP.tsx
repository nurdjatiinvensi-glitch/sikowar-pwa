"use client";

import type { RSVPStatus } from "@/data/eventData";
import { useState } from "react";

type EventRSVPProps = {
  defaultStatus?: RSVPStatus;
  totalAttendees?: number;
};

export default function EventRSVP({
  defaultStatus = null,
  totalAttendees = 45,
}: EventRSVPProps) {
  const [status, setStatus] = useState<RSVPStatus>(defaultStatus);

  const options = [
    {
      value: "hadir",
      label: "Hadir",
      color: "text-green-600",
    },
    {
      value: "tentatif",
      label: "Tentatif",
      color: "text-amber-500",
    },
    {
      value: "berhalangan",
      label: "Berhalangan",
      color: "text-gray-600",
    },
  ] as const;

  const statusInfo =
    status === null
      ? {
          label: "Menunggu Konfirmasi",
          text: "text-amber-700",
          dot: "bg-amber-700",
        }
      : status === "hadir"
        ? {
            label: "Hadir",
            text: "text-green-600",
            dot: "bg-green-500",
          }
        : status === "tentatif"
          ? {
              label: "Tentatif",
              text: "text-amber-500",
              dot: "bg-amber-500",
            }
          : {
              label: "Berhalangan",
              text: "text-gray-500",
              dot: "bg-gray-500",
            };

  return (
    <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
      {/* Judul */}
      <h2 className="mb-3 text-lg font-bold text-gray-800">Status Kehadiran</h2>

      {/* Status Saat Ini */}
      <div className="rounded-2xl bg-gray-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className={`h-3 w-3 rounded-full ${statusInfo.dot}`} />

          <span className={`text-lg font-semibold ${statusInfo.text}`}>
            {statusInfo.label}
          </span>
        </div>
      </div>

      {/* Pilihan */}
      <div className="mt-5 flex items-center justify-between">
        {options.map((item) => (
          <label
            key={item.value}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="radio"
              name="rsvp"
              checked={status === item.value}
              onChange={() => setStatus(item.value)}
              className="h-4 w-4 accent-green-600"
            />

            <span className={item.color}>{item.label}</span>
          </label>
        ))}
      </div>

      {/* Reset */}
      {status !== null && (
        <button
          onClick={() => setStatus(null)}
          className="mt-4 text-sm text-gray-300 hover:text-blue-600"
        >
          Reset ke Menunggu Konfirmasi
        </button>
      )}

      {/* Footer */}
      <div className="mt-5 border-t pt-4">
        <p className="text-sm text-gray-600">
          👥 <span className="font-semibold">{totalAttendees}</span> warga telah
          memberikan RSVP.
        </p>
      </div>
    </div>
  );
}
