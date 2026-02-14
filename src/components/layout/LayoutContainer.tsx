interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps page content with max-width 1440px, centered on wider screens.
 * Provides consistent layout for laptop viewport parity.
 */
export default function LayoutContainer({
  children,
  className = "",
}: LayoutContainerProps) {
  return (
    <div
      className={`max-w-[var(--layout-max-width)] mx-auto w-full ${className}`}
    >
      {children}
    </div>
  );
}
