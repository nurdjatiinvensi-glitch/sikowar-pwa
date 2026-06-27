import { NotificationItem } from "./types";

export const notificationData: NotificationItem[] = [
  {
    id: "1",
    type: "announcement",
    title: "Pengumuman Baru",
    message: "Kerja bakti Minggu pukul 07.00.",
    time: "2 menit lalu",
    unread: true,
    section: "today",
  },

  {
    id: "2",
    type: "event",
    title: "Event Baru",
    message: "Lomba 17 Agustus telah dibuat.",
    time: "20 menit lalu",
    unread: true,
    section: "today",
  },

  {
    id: "3",
    type: "payment",
    title: "Tagihan Baru",
    message: "Iuran bulan Agustus tersedia.",
    time: "Kemarin",
    unread: false,
    section: "yesterday",
  },

  {
    id: "4",
    type: "resident",
    title: "Warga Baru",
    message: "Budi Santoso bergabung.",
    time: "Kemarin",
    unread: false,
    section: "yesterday",
  },
];