import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { homePageMetaData } from "@/data/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = homePageMetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
