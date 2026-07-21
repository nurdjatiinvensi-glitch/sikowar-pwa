"use client";

type Props = {
  total: number;
};

export default function PaymentSummary({ total }: Props) {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-6
        shadow-sm
      "
    >
      <p className="text-sm font-medium text-green-700">Total Tagihan</p>

      <h2 className="mt-2 text-4xl font-bold text-gray-900">
        Rp {total.toLocaleString("id-ID")}
      </h2>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-sm text-gray-500">Jatuh Tempo</p>

          <p className="mt-1 font-semibold text-gray-800">31 Agustus 2026</p>
        </div>

        <button
          className="
            rounded-2xl
            bg-green-700
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-green-800
          "
        >
          Bayar
        </button>
      </div>
    </div>
  );
}
