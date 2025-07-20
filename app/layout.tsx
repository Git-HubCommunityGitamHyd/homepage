import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Community GITAM",
  description: "Empowering developers, fostering collaboration, and building the future of open source at GITAM University",
  icons: {
    icon: [
      { url: '/github-logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/github-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/github-logo.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/github-logo.png',
    shortcut: '/github-logo.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
} 