type PageHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
  avatar?: string;
};

export default function PageHeader({
  title,
  subtitle,
  description,
}: PageHeaderProps) {
  return (
    <div
      className="
        bg-green-700
        rounded-b-[60px]
        px-6
        pt-16
        pb-24
        text-center
        text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-white
          text-green-700
          text-3xl
          font-bold
          shadow-lg
        "
      >
        DJ
      </div>

      <h1 className="mt-5 text-3xl font-bold">{title}</h1>

      <p>{subtitle}</p>

      <p>{description}</p>
    </div>
  );
}
