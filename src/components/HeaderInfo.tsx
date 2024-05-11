import { Mail, Phone } from "lucide-react";
import React from "react";

export default function HeaderInfo() {
    return (
        <div className="flex items-center justify-end bg-black text-white text-sm p-2">
            <div className="max-w-screen-2xl flex space-x-6">
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
