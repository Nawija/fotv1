"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

import { Facebook, Instagram } from "lucide-react";
import { NAV_LINKS } from "@/constants/Links";
import { bitter } from "@/app/fonts";

export function Nav() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    return (
        <header
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(-80px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            className="bg-white text-black border-b border-gray-200 w-full z-[999] px-4 py-6"
        >
            <nav className="flex justify-between items-center space-x-2 max-w-[1850px] mx-auto">
                <Link
                    href="/"
                    style={{
                        transform: isInView ? "none" : "translateX(-80px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                            "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
                    }}
                    className={`text-2xl lg:text-3xl uppercase font-semibold mr-10`}
                >
                    Jarek Olszewski
                </Link>

                <div className="flex items-center justify-center">
                    <div
                        className={`space-x-2 font-bold text-lg uppercase hidden lg:block mr-20`}
                    >
                        {NAV_LINKS.map((link, index) => (
                            <NavLink
                                style={{
                                    opacity: isInView ? 1 : 0,
                                    transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.${index}s`,
                                }}
                                key={link.title}
                                href={link.href}
                            >
                                {link.title}
                                <div className="h-px w-full absolute bottom-1 left-0 bg-color scale-x-0 group-hover:scale-x-50 transition-transform rounded-xl" />
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex justify-end space-x-3">
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
                "p-2 font-medium text-sm text-zinc-500 relative group hover:text-black transition-colors",
                bitter.className,
                pathname === props.href && "text-black"
            )}
        />
    );
}
