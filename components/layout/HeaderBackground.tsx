type HeaderBackgroundProps = {
  variant?: "home" | "default";
  children?: React.ReactNode;
};

export default function HeaderBackground({
  variant = "default",
  children,
}: HeaderBackgroundProps) {
  const bgImage =
    variant === "home"
      ? "/images/header-beranda.png"
      : "/images/header-default.png";

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-b-[40px]
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        minHeight: variant === "home" ? "320px" : "240px",
      }}
    >
      {/* overlay biar tulisan tetap kebaca */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-green-900/25
          via-green-800/10
          to-green-900/40
        "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
