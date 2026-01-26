import Link from "next/link";
import { cn } from "@/lib/utils";
import { tabFadeTransition } from "@/components/animations/TabFade";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active: boolean;
}

export default function NavItem({ href, children, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        tabFadeTransition,
        "text-medium font-medium tracking-[0.08em] uppercase text-zinc-600 hover:text-zinc-400 text-center px-2 py-2 rounded-full",
        active ? "text-white hover:text-white" : "bg-transparent"
      )}
    >
      {children}
    </Link>
  );
}
