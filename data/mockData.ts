import {
  CalendarDays,
  CreditCard,
  House,
  MailPlus,
  MessageSquareWarning,
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
  icon: House,
  title: "Data Rumah",
  desc: "Master Data Rumah",
  href: "/house",
  },
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
    icon: Smartphone,
    title: "PPOB",
    desc: "Pulsa, Paket Data, Token Listrik",
    href: "/coming-soon",
  },
  {
    icon: Recycle,
    title: "Minyak Jelantah",
    desc: "Setor Jelantah jadi saldo & poin",
    href: "/coming-soon",
  },
  {
  icon: UserCheck,
  title: "Visitor",
  desc: "Data Tamu Komunitas",
  href: "/visitor",
},
{
  icon: MessageSquareWarning,
  title: "Keluhan",
  desc: "Aspirasi & Laporan Warga",
  href: "/complaint",
},
{
  icon: MailPlus,
  title: "Invitation",
  desc: "Undangan Aktivasi Warga",
  href: "/invitation",
},
];
