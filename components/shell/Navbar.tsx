"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/" className="text-blue-600 hover:underline">
        Home
      </Link>
      <Link href="/experience" className="text-blue-600 hover:underline">
        Experience
      </Link>
      <Link href="/projects" className="text-blue-600 hover:underline">
        Projects
      </Link>
      <Link href="/about" className="text-blue-600 hover:underline">
        About
      </Link>
    </nav>
  );
}
