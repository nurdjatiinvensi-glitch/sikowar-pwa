import Link from "next/link";

import type { DashboardItem as DashboardItemType } from "../types";

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
} as const;

export default function DashboardItem({ item }: Props) {
  const Icon = item.icon;

  const color = colorMap[item.color];

  const content = (
    <div
      className="
        flex
        h-24
        rounded-3xl
        border
        border-gray-100
        bg-white
        px-4
        shadow-sm
        transition-all
        duration-200
        active:scale-95
      "
    >
      <div className="flex w-14 items-center">
        <div className="-ml-2">
          <div
            className={`
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        ${color.bg}
      `}
          >
            <Icon size={28} className={color.icon} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <p
          className="
            whitespace-nowrap
            text-[15px]
            font-medium
            text-gray-500
          "
        >
          {item.title}
        </p>

        <h3
          className="
            mt-2
            text-[18px]
            font-bold
            leading-none
            text-gray-900
          "
        >
          {item.value}
        </h3>
      </div>
    </div>
  );

  if (!item.href) return content;

  return <Link href={item.href}>{content}</Link>;
}
