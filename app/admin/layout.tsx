import type React from "react";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Undangan Pernikahan - Javanese Wedding Invitation",
  description: "Undangan pernikahan dengan tema tradisional Jawa yang elegan",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dark">{children}</div>;
}
