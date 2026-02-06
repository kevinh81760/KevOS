import type { Metadata } from "next";
import "./globals.css";
import Shell from "@/components/shell/Shell";
import { LoadingProvider } from "@/components/providers/LoadingProvider";

export const metadata: Metadata = {
  title: "KevOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/akzidenz-grotesk/AkzidenzGrotesk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/akzidenz-grotesk/AkzidenzGrotesk-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/helvetica-neue/HelveticaNeue-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <LoadingProvider>
          <Shell>{children}</Shell>
        </LoadingProvider>
      </body>
    </html>
  );
}
