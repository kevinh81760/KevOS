import Link from "next/link";
import { cn } from "./utils";
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
        "text-medium font-semibold tracking-[0.08em] uppercase text-center px-2 py-2",
        active 
          ? "text-white hover:text-white" 
          : "text-zinc-600 hover:text-zinc-400 bg-transparent"
      )}
      style={{ fontFamily: 'Akzidenz-Grotesk, sans-serif' }}
    >
      {children}
    </Link>
  );
}
