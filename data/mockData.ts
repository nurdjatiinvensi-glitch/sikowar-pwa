import {
  CalendarDays,
  MessageSquare,
  Recycle,
  Smartphone,
} from "lucide-react";

export const userData = {
  name: "DJ",
  address: "Perumahan D'Palm Residence",
  blok: "N",
  no: "6",
  jalan: "Jl. Cagar Alam Selatan",
  rt: "RT 02",
  rw: "RW 12",
  kelurahan: "Ratujaya",    
  kecamatan: "Cipayung",
  city: "Depok",
  province: "Jawa Barat",
  saldo: 350000,
  poin: 125,
};

export const billingData = {
  amount: 50000,
  description: "Iuran Bulan Juni 2026",
  dueDate: "25 Juni 2026",
};

export const serviceMenus = [
  {
    icon: MessageSquare,
    title: "Keluhan",
    desc: "Sampaikan keluhan atau usulan",
    href: "/keluhan",
  },
  {
    icon: CalendarDays,
    title: "Event",
    desc: "Agenda dan kegiatan warga",
    href: "/event",
  },
  {
    icon: Smartphone,
    title: "PPOB",
    desc: "Pulsa, Paket Data, Token Listrik",
    href: "#",
  },
  {
    icon: Recycle,
    title: "Bank Sampah",
    desc: "Setor sampah jadi saldo & poin",
    href: "#",
  },
];

