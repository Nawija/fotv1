import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { Nav, NavLink } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body
                className={cn(
                    "bg-background min-h-screen font-sans antialiased",
                    inter.variable
                )}
            >
                <Nav />
                <main className="p-4 mx-auto max-w-screen-2xl">{children}</main>
            </body>
        </html>
    );
}
