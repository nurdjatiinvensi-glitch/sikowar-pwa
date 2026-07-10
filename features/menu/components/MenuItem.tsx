import Link from "next/link";
import { MenuItem as MenuType } from "../types";

const colorMap = {
  green: {
    bg: "bg-green-100",
    icon: "text-green-700",
  },
  red: {
    bg: "bg-red-100",
    icon: "text-red-600",
  },
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-600",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
  },
  teal: {
    bg: "bg-teal-100",
    icon: "text-teal-600",
  },
  yellow: {
    bg: "bg-yellow-100",
    icon: "text-yellow-600",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-600",
  },
  indigo: {
    bg: "bg-indigo-100",
    icon: "text-indigo-600",
  },
  gray: {
    bg: "bg-gray-100",
    icon: "text-gray-600",
  },
};

type Props = {
  item: MenuType;
};

export default function MenuItem({ item }: Props) {
  const Icon = item.icon;
  const color = colorMap[item.color];

  return (
    <Link
      href={item.href}
      className="
    group
    flex
    flex-col
    items-center
    transition-all
    duration-150
    active:scale-95
  "
    >
      <div
        className={`
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          ${color.bg}
          transition-all
          duration-200
          group-hover:scale-105
          group-active:scale-95
        `}
      >
        <Icon size={26} className={color.icon} />
      </div>

      <p className="mt-2 text-center text-sm font-medium">{item.title}</p>
    </Link>
  );
}
