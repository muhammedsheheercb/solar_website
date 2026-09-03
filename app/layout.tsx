import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });

export const metadata: Metadata = {
  title: {
    default: "HelioWorks Solar | Engineered Solar Energy",
    template: "%s | HelioWorks Solar"
  },
  description:
    "Premium solar EPC, rooftop, commercial, industrial, and maintenance solutions for long-term clean energy performance.",
  metadataBase: new URL("https://helioworks.example")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
