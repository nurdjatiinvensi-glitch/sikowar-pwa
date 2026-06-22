import { serviceMenus } from "@/data/mockData";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ServiceMenu() {
  return (
    <div className="mt-6">
      {/* Title */}
      <h3 className="mb-3 text-lg font-bold text-gray-800">Layanan</h3>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {serviceMenus.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.title}
              href={service.href}
              className="
                rounded-2xl
                bg-white
                p-4
                text-left
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              "
            >
              <Icon size={26} className="text-green-700" />

              <p className="mt-3 font-semibold text-gray-800">
                {service.title}
              </p>

              <p className="mt-1 text-xs text-gray-500">{service.desc}</p>
            </Link>
          );
        })}
      </div>

      {/* Footer Button */}
      <button
        className="
          mt-4
          flex w-full items-center justify-center gap-2
          rounded-2xl
          bg-white
          py-4
          font-medium
          text-gray-700
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        Lihat Semua Layanan
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
