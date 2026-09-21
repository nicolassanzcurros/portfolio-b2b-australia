import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Body copy / UI — clean, highly legible at small sizes.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Headlines — expressive rounded-geometric display face (variable weight).
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolás — Sports Performance & Data Automation",
  description:
    "Hybrid Data Analyst & Sports Scientist. I help sports organizations automate workflows and make data-driven decisions.",
  openGraph: {
    title: "Nicolás — Sports Performance & Data Automation",
    description:
      "Hybrid Data Analyst & Sports Scientist helping sports organizations automate workflows and make data-driven decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen font-sans text-slate-600">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
