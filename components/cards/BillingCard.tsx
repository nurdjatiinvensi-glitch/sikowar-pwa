import { billingData } from "@/data/mockData";
import { ChevronRight, ReceiptText } from "lucide-react";

export default function BillingCard() {
  return (
    <div className="mt-5 rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-gray-800">Tagihan Bulan Ini</p>

        <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:underline">
          Lihat Detail
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="mt-3 flex items-center gap-4">
        <div
          className="
        flex h-14 w-14 shrink-0
        items-center justify-center
        rounded-2xl bg-green-50
      "
        >
          <ReceiptText size={28} className="text-green-700" />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-green-700">
            Rp {billingData.amount.toLocaleString("id-ID")}
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            {billingData.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <div
          className="
            rounded-full
            bg-orange-50
            px-3 py-1
            text-xs
            font-medium
            text-orange-700
          "
        >
          Jatuh Tempo {billingData.dueDate}
        </div>

        <button
          className="
            rounded-xl
            bg-green-700
            px-5 py-2
            font-medium
            text-white
            transition
            hover:bg-green-800
          "
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}
