"use client";

const filters = ["Semua", "Belum Bayar", "Jatuh Tempo", "Lunas"];

export default function PaymentFilter() {
  return (
    <div
      className="
        mt-6
        flex
        gap-3
        overflow-x-auto
        pb-2
        scrollbar-hide
      "
    >
      {filters.map((filter, index) => (
        <button
          key={filter}
          className={`
            whitespace-nowrap
            rounded-full
            border
            px-6
            py-3
            text-sm
            font-medium
            transition
            ${
              index === 0
                ? "border-green-700 bg-green-700 text-white shadow-md"
                : "border-gray-200 bg-white text-gray-700 hover:border-green-600 hover:text-green-700"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
