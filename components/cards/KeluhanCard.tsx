import { ChevronRight } from "lucide-react";

type KeluhanCardProps = {
  title: string;
  category: string;
  date: string;
  status: string;
};

export default function KeluhanCard({
  title,
  category,
  date,
  status,
}: KeluhanCardProps) {
  const statusColor =
    status === "Selesai"
      ? "bg-green-100 text-green-700"
      : status === "Diproses"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-gray-100 text-gray-700";

  return (
    <div
      className="
        mb-4
        rounded-2xl
        bg-white
        p-4
        shadow-sm
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="mt-1 text-sm text-gray-500">{category}</p>

          <p className="mt-2 text-xs text-gray-400">{date}</p>
        </div>

        <ChevronRight size={18} className="text-gray-400" />
      </div>

      <div className="mt-3">
        <span
          className={`
            rounded-full px-3 py-1 text-xs font-medium
            ${statusColor}
          `}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
