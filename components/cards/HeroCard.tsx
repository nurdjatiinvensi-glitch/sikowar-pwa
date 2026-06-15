"use client";
import { userData } from "@/data/mockData";
import {
  ChevronRight,
  Download,
  Eye,
  FileText,
  ScanLine,
  Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";

const actions = [
  {
    icon: Wallet,
    label: "Bayar",
    desc: "Top Up, Iuran",
  },
  {
    icon: ScanLine,
    label: "Scan",
    desc: "Bayar, Event",
  },
  {
    icon: Download,
    label: "Tarik",
    desc: "Ke Rekening",
  },
  {
    icon: FileText,
    label: "Riwayat",
    desc: "Semua Transaksi",
  },
];

export default function HeroCard() {
  const [hideActions, setHideActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideActions(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden -mt-20 rounded-4xl bg-linear-to-br from-green-600 via-emerald-800 to-emerald-950 px-6 py-4 text-white shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <div className="relative z-10 flex items-center gap-2">
        <p className="text-lg font-semibold">SiKoWar Cash</p>

        <Eye size={20} />
      </div>

      {/* Saldo */}
      <div className="relative z-10 mt-3 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Rp {userData.saldo.toLocaleString("id-ID")}
        </h2>

        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-green-700 shadow-[0_10px_30px_rgba(16,185,129,0.25)]">
          <div className="relative h-6 w-6">
            <div className="absolute inset-0 rounded-full bg-amber-400"></div>

            <div className="absolute inset-1 rounded-full border-2 border-amber-300"></div>
          </div>

          <span className="font-bold text-emerald-700">{userData.poin}</span>

          <span className="font-bold text-gray-600">Poin</span>
          <ChevronRight size={14} className="text-emerald-700" />
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 my-4 border-t border-white/20"></div>

      {/* Actions */}
      {!hideActions && (
        <>
          <div className="relative z-10 grid grid-cols-4 gap-2">
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.label}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                    <Icon size={18} className="text-green-700" />
                  </div>

                  <p className="mt-2 text-xs font-semibold">{action.label}</p>

                  <p className="mt-1 text-[9px] text-green-100/70">
                    {action.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
