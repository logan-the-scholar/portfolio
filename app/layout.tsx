import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Literata, DM_Sans } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--Anton-Regular",
  style: "normal"
});

const dm_sans = DM_Sans({
  style: ["italic", "normal"],
  weight: "300",
  variable: "--dm-sans",
  subsets: ["latin"]
})

const heading25Med = localFont({
  src: "./HeadingNowTrial-25Medium.ttf",
  weight: "500",
  variable: "--heading-now-medium"
})

const heading16Bold = localFont({
  src: "./HeadingNowTrial-15Medium.ttf",
  weight: "500",
  variable: "--heading-now-small"
})

const heading46Bold = localFont({
  src: "./HeadingNowTrial-46Bold.ttf",
  weight: "500",
  variable: "--heading-now-larger"
})

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
        className={`${geistSans.variable} ${geistMono.variable} ${anton.className} ${heading16Bold.variable} ${literata.variable} ${heading25Med.variable} ${heading46Bold.variable} ${dm_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
