import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

export default function Home() {
    const OPTIONS: EmblaOptionsType = { loop: true };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return (
        <div className="">
            <div className="flex items-center justify-center flex-col max-w-screen-lg mx-auto space-y-4 lg:space-y-10 my-12 lg:my-24 text-center px-4">
                <h1 className=" text-2xl lg:text-4xl xl:text-7xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste numquam cumque eos.
                </h1>
                <p className="text-stone-600 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus neque odio veritatis dignissimos animi ipsam eaque a
                    voluptas earum. Consequuntur quaerat
                </p>
                <Link href="/" className="uppercase px-5 py-2 border font-bold lg:text-lg text-xs tracking-wider bg-black text-white border-black">Zobacz</Link>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}
