type ScrollContainerProps = {
  children: React.ReactNode;
};

export default function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <div
      className="
        h-full
        overflow-y-auto
        overscroll-contain
        pb-24
      "
    >
      {children}
    </div>
  );
}
