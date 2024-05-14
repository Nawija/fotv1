"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

import { Facebook, Instagram } from "lucide-react";
import { NAV_LINKS } from "@/constants/Links";
import { bitter, inter } from "@/Fonts/Fonts";

export function Nav() {
    return (
        <header className="bg-white text-black border-b border-gray-200 w-full z-[999] px-4 py-6">
            <nav className="flex justify-between items-center space-x-2 max-w-[1850px] mx-auto">
                <Link
                    href="/"
                    className={`text-2xl lg:text-3xl uppercase font-semibold mr-10`}
                >
                    Jarek Olszewski
                </Link>

                <div className="flex items-center justify-center">
                    <div
                        className={`space-x-2 font-bold text-lg uppercase hidden lg:block mr-20`}
                    >
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.title} href={link.href}>
                                {link.title}
                                <div className="h-px w-full absolute bottom-1 left-0 bg-color scale-x-0 group-hover:scale-x-50 transition-transform rounded-xl" />
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex justify-end space-x-3">
                        <Link href="/" target="_blank">
                            <Facebook
                                size={22}
                                strokeWidth={1.4}
                                className="text-zinc-500 hover:text-black transition-colors"
                            />
                        </Link>
                        <Link href="/" target="_blank">
                            <Instagram
                                size={22}
                                strokeWidth={1.4}
                                className="text-zinc-500 hover:text-black transition-colors"
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathname = usePathname();
    return (
        <Link
            {...props}
            className={cn(
                "p-2 font-medium text-sm text-zinc-500 relative group hover:text-black transition-colors", bitter.className,
                pathname === props.href && "text-black"
            )}
        />
    );
}
