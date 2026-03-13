interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps page content to a 14" MacBook Pro reference width (1512px max).
 * Keeps the baseline composition centered on wider screens.
 */
export default function LayoutContainer({
  children,
  className = "",
}: LayoutContainerProps) {
  return (
    <div
      className={`max-w-(--layout-max-width) mx-auto w-full ${className}`}
    >
      {children}
    </div>
  );
}
