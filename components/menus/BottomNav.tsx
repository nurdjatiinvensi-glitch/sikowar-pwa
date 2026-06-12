import { FileText, House, ShieldAlert, User, Users } from "lucide-react";

type BottomNavProps = {
  onEmergencyClick?: () => void;
};
export default function BottomNav({ onEmergencyClick }: BottomNavProps) {
  return (
    <div
      className="
        fixed
        bottom-0
        left-1/2
        z-50
        w-full
        max-w-md
        -translate-x-1/2
      "
    >
      {/* Container */}
      <div
        className="
          relative
          flex
          items-center
          justify-around
          border-t
          border-gray-100
          bg-white
          px-2
          py-3
          shadow-[0_-8px_30px_rgba(0,0,0,0.08)]
        "
      >
        {/* Beranda */}
        <button className="flex flex-col items-center">
          <House size={22} className="text-green-700" />
          <span className="mt-1 text-[11px] font-medium text-green-700">
            Beranda
          </span>
        </button>

        {/* Laporan */}
        <button className="flex flex-col items-center">
          <FileText size={22} className="text-gray-500" />
          <span className="mt-1 text-[11px] text-gray-500">Laporan</span>
        </button>

        {/* Spacer Tengah */}
        <div className="w-16" />

        {/* Pengurus */}
        <button className="flex flex-col items-center">
          <Users size={22} className="text-gray-500" />
          <span className="mt-1 text-[11px] text-gray-500">Pengurus</span>
        </button>

        {/* Profil */}
        <button className="flex flex-col items-center">
          <User size={22} className="text-gray-500" />
          <span className="mt-1 text-[11px] text-gray-500">Profil</span>
        </button>

        {/* Emergency */}
        <button
          onClick={onEmergencyClick}
          className="
            absolute
            -top-7
            left-1/2
            flex
            h-16
            w-16
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            bg-red-500
            text-white
            shadow-lg
            transition
            hover:scale-105
          "
        >
          <ShieldAlert size={30} />
        </button>
      </div>
    </div>
  );
}
