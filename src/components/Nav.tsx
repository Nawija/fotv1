"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

import { Facebook, Instagram } from "lucide-react";
import { NAV_LINKS } from "@/constants/Links";
import { bitter } from "@/app/fonts";

export default function Nav() {
    return (
        <header className="bg-white border-b w-full sticky top-0 z-[998]">
            <nav className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <Logo />
                <ul className="flex items-center justify-center">
                    <AllMapingNavLinks />
                </ul>
            </nav>
        </header>
    );
}

export function Logo() {
    return (
        <Link href="/" className="text-xl font-bold uppercase">
            Jarek Olszewski
        </Link>
    );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathname = usePathname();
    return (
        <Link
            {...props}
            className={cn(
                "px-2 py-4 font-medium text-sm transition-colors text-gray-400 hover:text-black",
                bitter.className,
                pathname === props.href && "text-black"
            )}
        />
    );
}

export function AllMapingNavLinks() {
    return (
        <>
            {NAV_LINKS.map((link) => (
                <li>
                    <NavLink href={link.href}>{link.title}</NavLink>
                </li>
            ))}
        </>
    );
}
export function SocialMediaIcons() {
    return (
        <>
            <Link href="/" target="_blank" aria-label="facebook">
                <Facebook
                    size={22}
                    strokeWidth={1.4}
                    className="text-zinc-500 hover:text-black transition-colors"
                />
            </Link>
            <Link href="/" target="_blank" aria-label="instagram">
                <Instagram
                    size={22}
                    strokeWidth={1.4}
                    className="text-zinc-500 hover:text-black transition-colors"
                />
            </Link>
        </>
    );
}
