import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { DataProvider } from "@/components/data";

export const metadata: Metadata = {
  title: "RawatRumah — Perawatan rumah lebih teratur",
  description: "Kelola barang, jadwal, riwayat, dan biaya perawatan rumah.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><DataProvider><AppShell>{children}</AppShell></DataProvider></body></html>;
}
