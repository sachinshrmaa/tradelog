import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "TradeLog",
  description: "Log, Track, and Analyze your trades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
