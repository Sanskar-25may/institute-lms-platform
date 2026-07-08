import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/lib/ThemeContext";
import ScrollmationBackground from "@/components/ScrollmationBackground";

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
    default: "Aushutosh — Engineering Education for the Future",
    template: "%s | Aushutosh",
  },
  description:
    "Project-based engineering courses taught by the industry's top 1%. Build real products, earn verified credentials, launch your career.",
  keywords: ["LMS", "engineering", "courses", "react", "typescript", "machine learning", "live classes"],
  openGraph: {
    title: "Aushutosh — Engineering Education for the Future",
    description: "Project-based engineering courses taught by the industry's top 1%.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-transparent" style={{ color: "var(--text-primary)" }}>
        <ThemeProvider>
          <ScrollmationBackground />
          <Navbar />
          <main className="flex-1 flex flex-col relative z-10 lms-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}