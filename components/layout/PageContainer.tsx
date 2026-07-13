type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div
      className="
        mx-auto
        h-dvh
        max-w-md
        overflow-hidden
        bg-linear-to-b
        from-green-50
        via-white
        to-gray-100
        shadow-xl
      "
    >
      {children}
    </div>
  );
}
