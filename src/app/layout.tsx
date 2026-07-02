import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karl Darren De Sosa | Portfolio",
  description: "Developer portfolio showcasing projects, skills, and experience.",
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
