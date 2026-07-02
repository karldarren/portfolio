import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karl Darren De Sosa | Full-Stack Developer",
  description:
    "BS Information Technology graduate with hands-on experience in web-based system development, IT support, and network administration. Skilled in PHP/Laravel, Next.js, NestJS, and more.",
  keywords: [
    "Karl Darren De Sosa",
    "Full Stack Developer",
    "Web Developer",
    "PHP Laravel",
    "Next.js",
    "NestJS",
    "Portfolio",
    "Cavite",
    "Philippines",
  ],
  authors: [{ name: "Karl Darren De Sosa" }],
  openGraph: {
    type: "website",
    title: "Karl Darren De Sosa | Full-Stack Developer",
    description:
      "BS IT graduate building modern web experiences. Check out my projects and get in touch.",
    siteName: "Karl Darren De Sosa Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karl Darren De Sosa | Full-Stack Developer",
    description:
      "BS IT graduate building modern web experiences. Check out my projects and get in touch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
