"use client";

import { eventData } from "@/data/eventData";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarDay = {
  id: string;
  day: number;
  currentMonth: boolean;
};

type MiniCalendarProps = {
  selectedDate: string;
  onDateSelect: (date: string) => void;
};

export default function MiniCalendar({
  selectedDate,
  onDateSelect,
}: MiniCalendarProps) {
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const dates: CalendarDay[] = [
    { id: "prev-27", day: 27, currentMonth: false },
    { id: "prev-28", day: 28, currentMonth: false },
    { id: "prev-29", day: 29, currentMonth: false },
    { id: "prev-30", day: 30, currentMonth: false },
    { id: "prev-31", day: 31, currentMonth: false },

    { id: "1", day: 1, currentMonth: true },
    { id: "2", day: 2, currentMonth: true },
    { id: "3", day: 3, currentMonth: true },
    { id: "4", day: 4, currentMonth: true },
    { id: "5", day: 5, currentMonth: true },
    { id: "6", day: 6, currentMonth: true },
    { id: "7", day: 7, currentMonth: true },
    { id: "8", day: 8, currentMonth: true },
    { id: "9", day: 9, currentMonth: true },
    { id: "10", day: 10, currentMonth: true },
    { id: "11", day: 11, currentMonth: true },
    { id: "12", day: 12, currentMonth: true },
    { id: "13", day: 13, currentMonth: true },
    { id: "14", day: 14, currentMonth: true },
    { id: "15", day: 15, currentMonth: true },
    { id: "16", day: 16, currentMonth: true },
    { id: "17", day: 17, currentMonth: true },
    { id: "18", day: 18, currentMonth: true },
    { id: "19", day: 19, currentMonth: true },
    { id: "20", day: 20, currentMonth: true },
    { id: "21", day: 21, currentMonth: true },
    { id: "22", day: 22, currentMonth: true },
    { id: "23", day: 23, currentMonth: true },
    { id: "24", day: 24, currentMonth: true },
    { id: "25", day: 25, currentMonth: true },
    { id: "26", day: 26, currentMonth: true },
    { id: "27", day: 27, currentMonth: true },
    { id: "28", day: 28, currentMonth: true },
    { id: "29", day: 29, currentMonth: true },
    { id: "30", day: 30, currentMonth: true },
  ];

  const eventDates = new Set(
    eventData.map((event) => Number(event.date.split("-")[2])),
  );

  const today = 17;

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <ChevronLeft />
        </button>

        <h3 className="text-center text-2xl font-bold">Agustus 2026</h3>

        <button className="rounded-full p-2 hover:bg-gray-100">
          <ChevronRight />
        </button>
      </div>

      {/* Day Name */}
      <div className="mb-4 grid grid-cols-7 text-center text-sm font-semibold text-gray-600">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-7 gap-y-2">
        {dates.map((item) => {
          const hasEvent = item.currentMonth && eventDates.has(item.day);

          const selected = selectedDate === item.id;

          const isToday = item.currentMonth && item.day === today;

          return (
            <button
              key={item.id}
              onClick={() => onDateSelect(item.id)}
              className="
                flex flex-col items-center
                justify-center
              "
            >
              <div
                className={`
                  flex h-11 w-11 items-center justify-center
                  rounded-full text-sm font-medium
                  transition-all

                  ${
                    selected
                      ? "border-2 border-green-600 text-green-700"
                      : isToday
                        ? "bg-green-50 text-green-700 font-bold"
                        : item.currentMonth
                          ? "text-gray-900 hover:bg-green-50"
                          : "text-gray-300"
                  }
                  ${isToday ? "bg-green-100 text-green-900 font-bold" : ""}
                  ${selected ? "border-2 border-green-600" : ""}
                `}
              >
                {item.day}
              </div>

              <div className="-mt-3 h-2">
                {hasEvent && (
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
