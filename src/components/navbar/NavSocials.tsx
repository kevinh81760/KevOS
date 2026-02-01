"use client";

import { Github, Twitter, Mail } from "lucide-react";
import IconWiggle from "@/components/animations/IconWiggle";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function NavSocials() {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <IconWiggle key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label={label}
          >
            <Icon size={22} strokeWidth={1.5} />
          </a>
        </IconWiggle>
      ))}
    </div>
  );
}
