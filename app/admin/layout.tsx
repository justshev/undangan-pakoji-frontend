import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "../invitations/[guestId]/components/QueryProvider";

export const metadata: Metadata = {
  title: "Undangan Pernikahan - Javanese Wedding Invitation",
  description: "Undangan pernikahan dengan tema tradisional Jawa yang elegan",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark">
      <QueryProvider>{children}</QueryProvider>
    </div>
  );
}
