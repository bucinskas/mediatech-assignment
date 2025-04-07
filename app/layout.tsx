import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybernews - Password Generator",
  description: "Generate strong passwords with our free password generator tool. Create secure passwords for your online accounts.",
  keywords: [
    "password generator",
    "strong",
    "free",
    "secure",
    "online"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
