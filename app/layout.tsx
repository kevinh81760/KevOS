import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Shell from "@/components/shell/Shell";
import { LoadingProvider } from "@/components/providers/LoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      >
        <LoadingProvider>
          <Shell>{children}</Shell>
        </LoadingProvider>
      </body>
    </html>
  );
}
