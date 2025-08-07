import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "@/context/auth-context";

// Font setup
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Dropshipping",
  description: "Manage admin and user access easily",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className=" bg-white text-black font-sans">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
