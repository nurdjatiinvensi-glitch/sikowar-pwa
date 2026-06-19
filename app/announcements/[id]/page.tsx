import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import AnnouncementDetailContent from "@/components/pages/AnnouncementDetailContent";
import { announcementData } from "@/data/announcementData";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AnnouncementDetailPage({ params }: Props) {
  const { id } = await params;

  const announcement = announcementData.find((item) => item.id === Number(id));

  if (!announcement) {
    return (
      <div className="p-6">
        <h1>Pengumuman tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <AppLayout activeMenu="home">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <Link href="/announcements" className="text-sm text-white/90">
            ← Kembali
          </Link>

          <h1 className="mt-4 text-3xl font-bold">{announcement.title}</h1>

          <p className="mt-2 text-white/90">Detail Pengumuman</p>
        </div>
      </HeaderBackground>
      <div className="px-6 py-6">
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            <span>{announcement.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={18} />
            <span>{announcement.time}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span>{announcement.location}</span>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 font-semibold">Deskripsi</h2>

          <p>{announcement.description}</p>
        </div>

        <AnnouncementDetailContent announcement={announcement} />
      </div>
    </AppLayout>
  );
}
