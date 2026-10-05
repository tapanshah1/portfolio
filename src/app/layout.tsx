import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tapan Shah | Senior iOS Team Lead & macOS Engineer Portfolio",
  description: "Portfolio of Tapan Shah - iOS Team Lead & Senior Software Engineer with 10+ years of experience in Swift, SwiftUI, Objective-C, macOS System & Network Extensions, and MDM Architecture.",
  keywords: ["iOS Team Lead", "macOS Engineer", "SwiftUI", "Swift", "Network Extensions", "MDM", "Apple Platform Architect"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#090a0f] text-gray-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
