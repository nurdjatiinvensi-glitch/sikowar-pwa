import { CalendarDays, MapPin, Users } from "lucide-react";

type Props = {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
};

export default function EventCard({
  title,
  date,
  time,
  location,
  attendees,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm">
      <h3 className="font-bold text-gray-800">{title}</h3>

      <div className="mt-3 space-y-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          {date} • {time}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {location}
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          {attendees} peserta
        </div>
      </div>
    </div>
  );
}
