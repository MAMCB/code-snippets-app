import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Snippets Library",
  description: "A Next.js app for storing and sharing code snippets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-12">
           <Link
            href={"/"}
            className="border p-2 rounded my-8"
          >Snippets list</Link>
          {children}
          
        </div>
      </body>
    </html>
  );
}
