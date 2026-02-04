import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Shell from "@/components/shell/Shell";
import { LoadingProvider } from "@/components/providers/LoadingProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
        className={`antialiased ${inter.variable}`}
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
