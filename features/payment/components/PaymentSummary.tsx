"use client";

type Props = {
  total: number;
};

export default function PaymentSummary({ total }: Props) {
  return (
    <div
      className="
      rounded-3xl
    bg-white/20
      backdrop-blur-md
      border border-white/20
      p-6
    text-white
      shadow-lg
      "
    >
      {/* Label */}
      <p className="text-sm text-green-100">Total Tagihan</p>

      {/* Nominal */}
      <h2 className="mt-2 text-4xl font-bold">
        Rp {total.toLocaleString("id-ID")}
      </h2>

      {/* Due Date */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-green-100">Jatuh Tempo</p>

          <p className="mt-1 text-lg font-semibold">31 Agustus 2026</p>
        </div>

        <button
          className="
            rounded-2xl
            bg-white
            px-6
            py-3
            font-semibold
            text-green-700
            transition
            hover:bg-green-50
          "
        >
          Bayar
        </button>
      </div>
    </div>
  );
}
