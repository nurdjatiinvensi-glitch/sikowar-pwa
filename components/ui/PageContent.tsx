import { Theme } from "@/lib/theme";

type PageContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContent({
  children,
  className = "",
}: PageContentProps) {
  return (
    <div
      className={`
        ${Theme.content.padding}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
