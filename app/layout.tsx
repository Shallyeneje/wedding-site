import type { Metadata } from "next";
import { EB_Garamond, Outfit, Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/provider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Nonso & Adanna's Wedding",
  description:
    "Join us in celebrating the union of Nonso and Adanna. Explore our wedding website for details on the big day, RSVP, and more.",
  openGraph: {
    title: "Nonso & Adanna's Wedding",
    description:
      "Join us in celebrating the union of Nonso and Adanna. Explore our wedding website for details on the big day, RSVP, and more.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Nonso & Adanna's Wedding",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${geist.variable} ${ebGaramond.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
