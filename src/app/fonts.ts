import { Inter,Bitter, Cormorant } from "next/font/google";
export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const cormorant = Cormorant({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-sans",
});
export const bitter = Bitter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-sans",
});
