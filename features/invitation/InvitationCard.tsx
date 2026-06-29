"use client";

import { MailPlus } from "lucide-react";

import { InvitationItem } from "./types";

type Props = {
  item: InvitationItem;
  onClick?: () => void;
};

export default function InvitationCard({ item, onClick }: Props) {
  const badge = {
    pending: {
      label: "Belum Diundang",
      color: "bg-gray-100 text-gray-700",
    },

    sent: {
      label: "Sudah Dikirim",
      color: "bg-orange-100 text-orange-700",
    },

    activated: {
      label: "Aktif",
      color: "bg-green-100 text-green-700",
    },
  };

  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-3xl bg-white p-5 text-left shadow-sm"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
        <MailPlus size={28} className="text-green-700" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{item.fullName}</h3>

        <p className="text-sm text-gray-500">{item.phone}</p>

        <p className="mt-1 text-xs text-gray-400">{item.sentAt}</p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs ${badge[item.status].color}`}
      >
        {badge[item.status].label}
      </span>
    </button>
  );
}
