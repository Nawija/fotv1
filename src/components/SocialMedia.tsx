import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function SocialMedia() {
    return (
        <div className="fixed left-0 top-1/3 z-10 text-white bg-zinc-400 shadow-xl flex items-center justify-center flex-col">
            <Link href="/" target="_blank" className=" p-1.5 lg:p-2.5 hover:text-white hover:bg-blue-500">
                <Facebook size={20} strokeWidth="1.5"/>
            </Link>
            <Link href="/" target="_blank" className=" p-1.5 lg:p-2.5 hover:text-white hover:bg-red-500">
                <Instagram size={20} strokeWidth="1.5"/>
            </Link>
        </div>
    );
}
