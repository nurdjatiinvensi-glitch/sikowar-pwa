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
      className="relative z-20 overflow-hidden rounded-b-[40px] bg-cover bg-center bg-no-repeat h-45"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-linear-to-b from-black/10 to-black/5">{children}</div>
    </div>
  );
}
