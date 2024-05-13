import { Star } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
const AlignEmblaCarousel = dynamic(
    () => import("@/components/EmblaCarousel/AlignEmblaCarousel")
);

type PropType = {
    allHeros: [];
    OPTIONS?: EmblaOptionsType;
};
export default function Reviews(props: PropType) {
    const { allHeros, OPTIONS } = props;
    return (
        <section className="my-12 lg:my-24 max-w-screen-2xl mx-auto space-y-8 relative">
            <div className="flex items-center justify-between max-w-screen-lg mx-auto px-4">
                <h2 className="text-3xl font-bold">Opinie</h2>
                <div>
                    <div className="flex items-center space-x-1">
                        <Star fill="orange" color="none" />
                        <Star fill="orange" color="none" />
                        <Star fill="orange" color="none" />
                        <Star fill="orange" color="none" />
                        <span className="font-bold text-lg">5/5</span>
                    </div>
                    <Link className="text-end" href="/">
                        Wiecej opini
                    </Link>
                </div>
            </div>
            <div className="w-1/2 h-full absolute left-0 top-0 bg-gradient-to-tr from-white to-transparent" />
            <AlignEmblaCarousel allHeros={allHeros} options={OPTIONS} />
        </section>
    );
}
