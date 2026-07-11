"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type HeaderBackgroundProps = {
  variant?: "home" | "default";

  children?: React.ReactNode;

  title?: string;

  showBackButton?: boolean;
};

export default function HeaderBackground({
  variant = "default",
  children,
  title,
  showBackButton = false,
}: HeaderBackgroundProps) {
  const router = useRouter();

  const bgImage =
    variant === "home"
      ? "/images/header-beranda.png"
      : "/images/header-default.png";

  return (
    <div
      className="
        relative
        z-20
        h-28
        overflow-hidden
        rounded-b-2xl
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="h-full bg-linear-to-b from-black/10 to-black/5">
        {(showBackButton || title) && (
          <div
            className="
              flex
              h-full
              items-start
              gap-3
              px-5
              pt-5
            "
          >
            {showBackButton && (
              <button
                onClick={() => router.back()}
                className="
                  rounded-full
                  bg-white/20
                  p-2
                  backdrop-blur-sm
                "
              >
                <ArrowLeft size={20} className="text-white" />
              </button>
            )}

            {title && (
              <h1
                className="
                  pt-1
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {title}
              </h1>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
