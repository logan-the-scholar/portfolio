import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Literata } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--Anton-Regular",
  style: "normal"
});

const literata = Literata({
  variable: "--literata-all",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Franco - Full-stack Developer",
  description: "Made by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.className} ${literata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
