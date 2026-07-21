"use client";

import { Calendar, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

import type { AnnouncementItem } from "../types";

type Props = {
  item: AnnouncementItem;
  href: string;
};

export default function AnnouncementCard({ item, href }: Props) {
  return (
    <Link
      href={href}
      className="
        block
        rounded-2xl
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-200
        hover:shadow-md
        active:scale-[0.98]
      "
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h2
            className="
              truncate
              text-base
              font-semibold
              text-gray-900
            "
          >
            {item.title}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={14} />
            <span>{item.date}</span>
          </div>

          <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={14} />
            <span className="truncate">{item.location}</span>
          </div>
        </div>

        <ChevronRight size={18} className="mt-1 shrink-0 text-gray-400" />
      </div>
    </Link>
  );
}
