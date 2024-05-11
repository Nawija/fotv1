import { Inter, Great_Vibes, Cormorant } from "next/font/google";
export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const great_vibes = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-sans",
});
export const cormorant = Cormorant({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-sans",
});
