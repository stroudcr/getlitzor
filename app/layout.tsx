import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Litzor | Marketing That Brings You More Business",
    template: "%s | Litzor",
  },
  description:
    "We help local service businesses get more customers with simple, smart, AI-powered marketing. Get started with a free call today.",
  metadataBase: new URL("https://www.getlitzor.com"),
  openGraph: {
    title: "Litzor | Marketing That Brings You More Business",
    description:
      "Local service businesses trust us for simple, smart marketing that brings real results. Book your free consultation.",
    url: "https://www.getlitzor.com",
    siteName: "Litzor",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Litzor | Marketing That Brings You More Business",
    description:
      "Local service businesses trust us for simple, smart marketing that gets results.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
