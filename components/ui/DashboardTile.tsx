"use client";

import { ChevronRight } from "lucide-react";
import FeatureIcon from "./FeatureIcon";

type Color =
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "red"
  | "orange"
  | "teal"
  | "gray";

type Props = {
  icon: React.ReactNode;

  color: Color;

  title: string;

  value: string;

  subtitle?: string;

  onClick?: () => void;
};

export default function DashboardTile({
  icon,
  color,
  title,
  value,
  subtitle,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-2xl
        bg-white
        border
        border-gray-100
        p-5
        text-left
        transition-all
        hover:shadow-md
      "
    >
      <div className="flex items-start justify-between">
        <FeatureIcon icon={icon} color={color} />

        <ChevronRight size={18} className="text-gray-300" />
      </div>

      <p className="mt-4 text-sm text-gray-500">{title}</p>

      <h3 className="mt-1 text-3xl font-bold text-gray-900">{value}</h3>

      {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
    </button>
  );
}
