import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/layout/ThemeScript";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://portfolio-karldarren.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Karl Darren De Sosa | System Builder",
    template: "%s | Karl Darren De Sosa",
  },
  description:
    "Karl Darren De Sosa — System Builder. Full-Stack Developer, Systems Builder, and IT & Network Specialist. I build practical digital systems, automate manual processes, and solve real-world technical problems.",
  keywords: [
    "Karl Darren De Sosa",
    "System Builder",
    "Full-Stack Developer",
    "System Development",
    "IT Support",
    "Network Administration",
    "Automation",
    "PHP Laravel",
    "Next.js",
    "NestJS",
    "MikroTik",
    "Cavite",
    "Philippines",
  ],
  authors: [{ name: "Karl Darren De Sosa" }],
  creator: "Karl Darren De Sosa",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Karl Darren De Sosa | System Builder",
    description:
      "I build practical digital systems, automate manual processes, and solve real-world technical problems.",
    siteName: "Karl Darren De Sosa",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karl Darren De Sosa | System Builder",
    description:
      "Full-Stack Developer • Systems Builder • IT & Network Specialist.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(SITE_URL)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd(SITE_URL)) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
