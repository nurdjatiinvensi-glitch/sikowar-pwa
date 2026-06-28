"use client";

import { CreditCard, Heart, Wallet } from "lucide-react";

import { PaymentItem } from "./types";

type Props = {
  item: PaymentItem;
  onClick?: () => void;
};

function getIcon(type: PaymentItem["type"]) {
  switch (type) {
    case "monthly":
      return <CreditCard size={22} className="text-green-700" />;

    case "cash":
      return <Wallet size={22} className="text-blue-600" />;

    case "donation":
      return <Heart size={22} className="text-red-500" />;
  }
}

export default function PaymentCard({ item, onClick }: Props) {
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
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gray-100
        "
      >
        {getIcon(item.type)}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>

        <p className="mt-1 text-sm text-gray-500">{item.description}</p>

        {item.dueDate && (
          <p className="mt-2 text-xs text-orange-600">
            Jatuh Tempo {item.dueDate}
          </p>
        )}
      </div>

      <div className="text-right">
        <p className="font-bold text-green-700">
          Rp {item.amount.toLocaleString("id-ID")}
        </p>

        <span
          className={`mt-2 inline-block rounded-full px-3 py-1 text-xs ${
            item.status === "paid"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {item.status === "paid" ? "Lunas" : "Belum"}
        </span>
      </div>
    </button>
  );
}
