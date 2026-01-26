"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import NavSocials from "./NavSocials";
import NavClock from "./NavClock";

export default function NavBar() {
  const pathname = usePathname();

  const items = [
    { label: "HOME", href: "/" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT", href: "/about" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 border-b border-neutral-950 bg-black"
    >
      <div className="flex gap-3">
        {items.map(item => (
          <NavItem
            key={item.href}
            href={item.href}
            active={pathname === item.href}
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
