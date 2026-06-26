import EventRSVP from "@/components/event/EventRSVP";
import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";
import { eventData } from "@/data/eventData";
import { Calendar, Clock, MapPin } from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;

  const event = eventData.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="p-6">
        <h1>Event tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <BackButton href="/event" />

        <div className="px-6 pt-8 pb-8 text-white">
          <h1 className="text-3xl font-bold">{event.title}</h1>

          <p className="mt-2 text-white/90">
            {event.date} • {event.time}
          </p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={18} />
            <span>{event.time} WIB</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 font-semibold">Deskripsi</h2>

          <p>{event.description}</p>
        </div>
        <EventRSVP totalAttendees={event.attendees} />
      </div>
    </AppLayout>
  );
}
