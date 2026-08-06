import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Week 1: Introduction to Video Editing",
  description: "Interactive Next.js presentation for VIDEODIT Lecture Series.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
