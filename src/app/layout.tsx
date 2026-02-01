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
      <body
        className="antialiased"
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
        suppressHydrationWarning
      >
        <LoadingProvider>
          <Shell>{children}</Shell>
        </LoadingProvider>
      </body>
    </html>
  );
}
