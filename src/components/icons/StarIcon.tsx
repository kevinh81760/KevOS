"use client";

import { SVGProps } from "react";

interface StarIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export default function StarIcon({ className, size = 32, ...props }: StarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M24 2L27.6 20.4L46 24L27.6 27.6L24 46L20.4 27.6L2 24L20.4 20.4L24 2Z"
        fill="white"
        stroke="white"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
