import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import { announcementData } from "@/data/announcementData";

import { Calendar, Clock, MapPin } from "lucide-react";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AnnouncementDetailPage({ params }: Props) {
  const { id } = await params;

  const announcement = announcementData.find((item) => item.id === Number(id));

  if (announcement?.type === "event") {
    redirect(`/event/${announcement.eventId}`);
  }

  if (!announcement) {
    return (
      <div className="p-6">
        <h1>Pengumuman tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Detail Pengumuman"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Header Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <span className="text-sm font-medium text-green-700">Pengumuman</span>

          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {announcement.title}
          </h1>

          <p className="mt-2 text-gray-500">{announcement.date}</p>
        </div>

        {/* Informasi */}
        <div className="space-y-4">
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

        {/* Deskripsi */}
        <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-gray-800">Deskripsi</h2>

          <p className="leading-7 text-gray-600">{announcement.description}</p>
        </div>
      </PageContent>
    </AppLayout>
  );
}
