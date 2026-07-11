"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
};

export default function PageHeader({ title }: Props) {
  const router = useRouter();

  return (
    <div
      className="
        sticky
        top-0
        z-30
        flex
        items-center
        gap-3
        bg-white
        px-4
        py-4
        shadow-sm
      "
    >
      <button
        onClick={() => router.back()}
        className="
          rounded-full
          p-2
          transition
          hover:bg-gray-100
        "
      >
        <ArrowLeft size={22} />
      </button>

      <h1 className="text-xl font-bold text-gray-900">{title}</h1>
    </div>
  );
}
