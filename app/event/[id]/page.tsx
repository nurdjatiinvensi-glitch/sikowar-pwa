import EventRSVP from "@/components/event/EventRSVP";
import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";
import { eventData } from "@/data/eventData";
import { formatDate, formatTimeRange } from "@/lib/date";

import { Calendar, Clock, MapPin, Phone, User } from "lucide-react";

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
        <BackButton fallbackHref="/event" />

        <div className="px-6 pt-8 pb-8 text-white">
          <h1 className="text-3xl font-bold">{event.title}</h1>

          <p className="mt-2 text-white/90">{formatDate(event.date)}</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        {/* Informasi Event */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            <span>{formatDate(event.date, true)}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={18} />
            <span>{formatTimeRange(event.startTime, event.endTime)}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span>{event.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <User size={18} />
            <span>{event.pic}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={18} />
            <span>{event.phone}</span>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-gray-800">Deskripsi</h2>

          <p className="leading-7 text-gray-600">{event.description}</p>
        </div>

        {/* RSVP */}
        <EventRSVP
          defaultStatus={event.myStatus}
          totalAttendees={event.attendeeCount}
        />
      </div>
    </AppLayout>
  );
}
