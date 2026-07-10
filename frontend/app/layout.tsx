import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/lib/ThemeContext";
import DynamicBackground from "@/components/DynamicBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CodersSpot — Engineering Education for the Future",
    template: "%s | CodersSpot",
  },
  description:
    "Project-based engineering courses taught by the industry's top 1%. Build real products, earn verified credentials, launch your career.",
  keywords: ["LMS", "engineering", "courses", "react", "typescript", "machine learning", "live classes"],
  openGraph: {
    title: "CodersSpot — Engineering Education for the Future",
    description: "Project-based engineering courses taught by the industry's top 1%.",
    type: "website",
  },
};

import AuthProvider from "@/components/AuthProvider";
import { getSiteContent } from "@/lib/cms";
import Footer from "@/components/Footer";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Fetch global settings and navbar config
  const globalSettings = await getSiteContent("global-settings");
  const navbarConfig = await getSiteContent("public-navbar");
  const footerConfig = await getSiteContent("global-footer");

  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-transparent" style={{ color: "var(--text-primary)" }}>
        <ThemeProvider>
          <AuthProvider>
            <DynamicBackground />
            <Navbar siteName={globalSettings.siteName} links={navbarConfig.links} logoUrl={globalSettings.logoUrl} />
            <main className="flex-1 flex flex-col relative z-10">{children}</main>
            <Footer cmsData={footerConfig} siteName={globalSettings.siteName} />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}