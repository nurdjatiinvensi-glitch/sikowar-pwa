import {
  CalendarDays,
  ChevronRight,
  MessageSquare,
  Recycle,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Keluhan",
    desc: "Sampaikan keluhan atau usulan",
  },
  {
    icon: CalendarDays,
    title: "Event",
    desc: "Lihat dan ikuti kegiatan warga",
  },
  {
    icon: Smartphone,
    title: "PPOB",
    desc: "Pulsa, Paket Data, Token Listrik",
  },
  {
    icon: Recycle,
    title: "Bank Sampah",
    desc: "Setor sampah jadi saldo & poin",
  },
];

export default function ServiceMenu() {
  return (
    <div className="mt-6">
      {/* Title */}
      <h3 className="mb-3 text-lg font-bold text-gray-800">Layanan</h3>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <button
              key={service.title}
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
            </button>
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
