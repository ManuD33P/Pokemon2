import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Navbar";
import { Providers } from "@/context/NextUIProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "SPA Pokemon App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`overflow-x-hidden ${inter.className}`}>
        <Providers>
        <Nav/>
        {children}
        </Providers>
        </body>

    </html>
  );
}
