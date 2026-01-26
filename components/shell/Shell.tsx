"use client";

import NavBar from "@/components/navbar/NavBar";
import SplashScreen from "./SplashScreen";
import { useLoading } from "@/components/providers/LoadingProvider";

export default function Shell({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <>
      <SplashScreen />
      {!isLoading && <NavBar />}
      {!isLoading && children}
    </>
  );
}
