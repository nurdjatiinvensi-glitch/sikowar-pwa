type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div
      className="
        min-h-screen
        max-w-md
        mx-auto
        pb-24
        bg-linear-to-b
        from-green-50
        via-white
        to-gray-100
      "
    >
      {children}
    </div>
  );
}
