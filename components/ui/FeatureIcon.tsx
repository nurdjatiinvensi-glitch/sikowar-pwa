"use client";

import { ReactNode } from "react";

type FeatureColor =
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "red"
  | "orange"
  | "teal"
  | "gray";

type Props = {
  icon: ReactNode;
  color: FeatureColor;
};

const colorClass: Record<FeatureColor, string> = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  yellow: "bg-yellow-100 text-yellow-500",
  purple: "bg-purple-100 text-purple-700",
  red: "bg-red-100 text-red-600",
  orange: "bg-orange-100 text-orange-600",
  teal: "bg-cyan-100 text-cyan-700",
  gray: "bg-gray-100 text-gray-600",
};

export default function FeatureIcon({ icon, color }: Props) {
  return (
    <div
      className={`
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        ${colorClass[color]}
      `}
    >
      {icon}
    </div>
  );
}
