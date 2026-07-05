import { DashboardItem as DashboardItemType } from "@/features/dashboard/types";
import { ChevronRight } from "lucide-react";

type Props = {
  item: DashboardItemType;
};

const colorMap = {
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
  },
  yellow: {
    bg: "bg-yellow-100",
    icon: "text-yellow-500",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
  },
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-600",
  },
};

export default function DashboardItem({ item }: Props) {
  const Icon = item.icon;
  const color = colorMap[item.color];

  return (
    <div
      className="
      min-h-30
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-4
        shadow-sm
      "
    >
      <div className="flex h-full">
        {/* 25% ICON */}
        <div className="flex w-16 items-start justify-center pt-1">
          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              ${color.bg}
            `}
          >
            <Icon size={22} className={color.icon} />
          </div>
        </div>

        {/* 75% CONTENT */}
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-xs font-medium text-gray-500">{item.title}</p>

          {item.layout === "currency" ? (
            <>
              <h3 className="mt-1 text-xl font-bold text-gray-900 whitespace-nowrap">
                {item.value}
              </h3>
            </>
          ) : item.layout === "inline" ? (
            <div className="mt-1 flex items-center justify-between">
              <div className="flex items-end gap-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.value}
                </h3>

                <span className="pb-1 text-sm text-gray-500">
                  {item.subtitle}
                </span>
              </div>

              {item.clickable && (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </div>
          ) : (
            <>
              <h3 className="mt-1 text-2xl font-bold text-gray-900 whitespace-nowrap">
                {item.value}
              </h3>

              <div className="mt-1 flex items-center justify-between">
                {item.subtitle ? (
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                ) : (
                  <span />
                )}

                {item.clickable && (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
