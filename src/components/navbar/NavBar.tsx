"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import NavSocials from "./NavSocials";
import NavClock from "./NavClock";
import { useScrollDirection } from "@/lib/hooks/useScrollDirection";

export default function NavBar() {
  const pathname = usePathname();
  const isScrollingDown = useScrollDirection();

  const items = [
    { label: "HOME", href: "/" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT", href: "/about" },
  ];

  // Normalize pathname for comparison (remove trailing slashes except for root)
  const normalizedPathname = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  // Only apply scroll-based hide/show on home and about pages
  const shouldHideOnScroll = normalizedPathname === "/" || normalizedPathname === "/about";
  const isHidden = shouldHideOnScroll && isScrollingDown;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 border-b border-neutral-950 bg-black transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex gap-3">
        {items.map(item => (
          <NavItem
            key={item.href}
            href={item.href}
            active={normalizedPathname === item.href}
          >
            {item.label}
          </NavItem>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <NavSocials />
        <span className="text-zinc-600">|</span>
        <NavClock />
      </div>
    </nav>
  );
}
