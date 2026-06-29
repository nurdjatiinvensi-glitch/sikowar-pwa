import {
  CalendarDays,
  CreditCard,
  MessageSquare,
  Package,
  Recycle,
  Smartphone,
  UserCheck,
  Users,
} from "lucide-react";

export const userData = {
  name: "Nurdjati Trihanggono",
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
    icon: CreditCard,
    title: "Pembayaran",
    desc: "Iuran, Kas & Donasi",
    href: "/payment",
  },
  {
    icon: Package,
    title: "Asset",
    desc: "Inventaris & Peminjaman",
    href: "/asset",
  },
  {
    icon: Users,
    title: "Data Warga",
    desc: "Data & Informasi Warga",
    href: "/resident",
  },
  {
    icon: CalendarDays,
    title: "Event",
    desc: "Agenda dan kegiatan warga",
    href: "/event",
  },
  {
    icon: MessageSquare,
    title: "Keluhan",
    desc: "Sampaikan keluhan atau usulan",
    href: "/keluhan",
  },
  {
    icon: Smartphone,
    title: "PPOB",
    desc: "Pulsa, Paket Data, Token Listrik",
    href: "/coming-soon",
  },
  {
    icon: Recycle,
    title: "Bank Sampah",
    desc: "Setor sampah jadi saldo & poin",
    href: "/coming-soon",
  },
  {
  icon: UserCheck,
  title: "Visitor",
  desc: "Data Tamu Komunitas",
  href: "/visitor",
},
];
