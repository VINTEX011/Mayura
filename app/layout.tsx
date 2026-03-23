import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata, buildPageTitle } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: buildPageTitle("Corporate Training Solutions"),
  description:
    "Mayura Corp delivers professional training programs for individuals, SMEs, corporations, and public institutions."
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
