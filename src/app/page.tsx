import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import { Button } from "@/components/ui/button";

export default function Home() {
    const OPTIONS: EmblaOptionsType = { loop: true };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return (
        <div className="">
            <div className="flex items-center justify-center flex-col max-w-screen-lg mx-auto space-y-4 lg:space-y-10 my-24 lg:my-48 text-center px-4">
                <h1 className=" text-xl lg:text-4xl xl:text-6xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste numquam cumque eos.
                </h1>
                <p className="text-stone-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus neque odio veritatis dignissimos animi ipsam eaque a
                    voluptas earum. Consequuntur quaerat quia voluptatum vel hic
                    beatae, iusto ullam reprehenderit nostrum
                </p>
                <Button>Zobacz</Button>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}
