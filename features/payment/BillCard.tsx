"use client";

import { AlertCircle, CreditCard, Heart, Wallet } from "lucide-react";

import { PaymentItem } from "./types";

type Props = {
  item: PaymentItem;
  onClick?: () => void;
};

export default function BillCard({ item, onClick }: Props) {
  const getIcon = () => {
    switch (item.type) {
      case "monthly":
        return <CreditCard size={24} className="text-green-700" />;

      case "cash":
        return <Wallet size={24} className="text-blue-600" />;

      case "donation":
        return <Heart size={24} className="text-pink-500" />;

      default:
        return <AlertCircle size={24} className="text-gray-500" />;
    }
  };

  const getBadge = () => {
    if (item.status === "paid") {
      return (
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          Lunas
        </span>
      );
    }

    return (
      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
        Belum Bayar
      </span>
    );
  };

  return (
    <button
      onClick={onClick}
      className="
        flex
        w-full
        items-center
        gap-4
        rounded-3xl
        bg-white
        p-5
        text-left
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gray-100
        "
      >
        {getIcon()}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-lg font-semibold">{item.title}</h3>

        <p className="mt-1 text-sm text-gray-500">Jatuh Tempo {item.dueDate}</p>
      </div>

      {/* Amount */}
      <div className="text-right">
        <p className="text-xl font-bold text-green-700">
          Rp {item.amount.toLocaleString("id-ID")}
        </p>

        <div className="mt-2">{getBadge()}</div>
      </div>
    </button>
  );
}
