"use client";

import PhotoItem from "./PhotoItem";

interface PhotoGridProps {
  className?: string;
}

export default function PhotoGrid({ className = "" }: PhotoGridProps) {
  const imageSources = ["/gal1.jpg", "/gal2.JPG", "/gal3.jpg", "/gal5.PNG", "/gal4.jpg", "/gal7.JPG"];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 ${className}`} style={{ marginLeft: 0 }}>
      {imageSources.map((src, index) => (
        <PhotoItem key={index} index={index} src={src} />
      ))}
    </div>
  );
}
