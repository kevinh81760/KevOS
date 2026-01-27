"use client";

import NavBar from "@/components/navbar/NavBar";
import SplashScreen from "./SplashScreen";
import { useLoading } from "@/components/providers/LoadingProvider";

export default function Shell({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <>
      <SplashScreen />
      {/* Multi-layered background system */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-900/30 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[300px] bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent blur-[100px]" />
      </div>

      {!isLoading && <NavBar />}
      {!isLoading && <main className="pt-20">{children}</main>}
    </>
  );
}
