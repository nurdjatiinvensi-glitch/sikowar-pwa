"use client";

import { Theme } from "@/lib/theme";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type HeaderBackgroundProps = {
  variant?: "home" | "page";
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
};

export default function HeaderBackground({
  variant = "page",
  children,
  title,
  subtitle,
  showBackButton = false,
}: HeaderBackgroundProps) {
  const router = useRouter();

  const config = Theme.header[variant];

  return (
    <div
      className={`
        relative
        z-20
        ${config.height}
        ${Theme.header.radius}
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      `}
      style={{
        backgroundImage: `url(${config.background})`,
      }}
    >
      <div className="h-full bg-linear-to-b from-black/10 to-black/5">
        {(showBackButton || title) && (
          <div
            className={`
              flex
              h-full
              items-start
              gap-3
              ${Theme.header.padding}
            `}
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

            <div className="flex flex-col">
              {title && <h1 className={Theme.header.title}>{title}</h1>}

              {subtitle && (
                <p className="mt-1 text-sm text-white/90">{subtitle}</p>
              )}
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
