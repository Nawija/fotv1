"use client";

import { bitter } from "@/app/fonts";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HeaderInfo() {
    return (
        <div
            className={`${bitter.className} bg-black text-white text-xs font-light px-4 py-2`}
        >
            <div className="max-w-[1900px] items-center justify-end mx-auto w-full flex space-x-6">
                <Link
                    href="mailto:jarekolszewski@gmail.com"
                    aria-label="napisz maila"
                    className="flex items-center justify-center space-x-1"
                >
                    <Mail size={16} />
                    <span>jarekolszewski@gmail.com</span>
                </Link>
                <Link
                    href="tel:500233356"
                    aria-label="zadzwoń"
                    className="flex items-center justify-center space-x-1"
                >
                    <Phone size={16} />
                    <span>+48 500-233-356</span>
                </Link>
            </div>
        </div>
    );
}
