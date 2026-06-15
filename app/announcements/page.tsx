import { announcementData } from "@/data/announcementData";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function AnnouncementsPage() {
  return (
    <div className="p-6">
      <Link href="/" className="text-sm text-green-700">
        ← Kembali
      </Link>
      <h1 className="mb-6 mt-4 text-2xl font-bold">Pengumuman</h1>

      {announcementData.map((item) => (
        <Link
          key={item.id}
          href={`/announcements/${item.id}`}
          className="
            mb-4 block rounded-2xl
            bg-white p-4 shadow
            transition hover:shadow-md
          "
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>

              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>

              <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>
            </div>

            <ChevronRight size={20} className="mt-1 text-gray-400" />
          </div>
        </Link>
      ))}
    </div>
  );
}
