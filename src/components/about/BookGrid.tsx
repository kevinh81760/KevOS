"use client";

import BookItem from "./BookItem";

interface BookGridProps {
  className?: string;
}

export default function BookGrid({ className = "" }: BookGridProps) {
  const bookSources = ["/Grid System Book.jpg", "/Atomic Habits Picture.jpg", "/Pragmatic Programmer.jpg"];

  return (
    <div className={className} style={{ marginLeft: 0 }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {bookSources.map((src, index) => (
          <div key={index}>
            <BookItem index={index} src={src} />
            {index === 0 && (
              <div className="mt-3 text-white">
                <h2 className="text-2xl font-medium mb-1">Grid Systems</h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  Explores the complexities and potential of grid composition in typographic design, providing a step-by-step approach to creating dynamic and effective layouts.
                </p>
              </div>
            )}
            {index === 1 && (
              <div className="mt-3 text-white">
                <h2 className="text-2xl font-medium mb-1">Atomic Habits</h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  An easy and proven way to build good habits and break bad ones through tiny changes that deliver remarkable results.
                </p>
              </div>
            )}
            {index === 2 && (
              <div className="mt-3 text-white">
                <h2 className="text-2xl font-medium mb-1">The Pragmatic Programmer</h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  A practical guide to becoming a more effective programmer by mastering the craft of software development and engineering.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
