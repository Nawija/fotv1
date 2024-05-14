import { inter } from "@/Fonts/Fonts";
import { Mail, Phone } from "lucide-react";
import React from "react";

export default function HeaderInfo() {
    return (
        <div
            className={`${inter.className}  bg-black text-white text-xs font-light px-4 py-2`}
        >
            <div className="max-w-[1900px] flex items-center justify-end mx-auto w-full flex space-x-6">
                <div className="flex items-center justify-center space-x-1">
                    <Mail size={16} />
                    <span>jarekolszewski@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                    <Phone size={16} />
                    <span>+48 500-233-356</span>
                </div>
            </div>
        </div>
    );
}
