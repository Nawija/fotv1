import { performRequest } from "@/lib/datocms";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { EmblaOptionsType } from "embla-carousel";
import AutoScrollEmbla from "@/components/EmblaCarousel/AutoScrollEmbla";

const Hero = dynamic(() => import("./_components/Hero"));
const EmblaCarousel = dynamic(
    () => import("@/components/EmblaCarousel/EmblaCarousel"),
    { ssr: false }
);
const People = dynamic(() => import("./_components/People"), { ssr: false });
const ArticlesSeo = dynamic(() => import("@/app/_components/ArticlesSeo"), {
    ssr: false,
});
const Reviews = dynamic(() => import("@/app/_components/Reviews"), {
    ssr: false,
});

const PAGE_CONTENT_QUERY = `
{
    allHeros {
      img {
        responsiveImage {
          width
          height
          base64
          src
        }
      }
    }
  }`;

export default async function Home() {
    const {
        data: { allHeros },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });

    const OPTIONS: EmblaOptionsType = { loop: true };
    return (
        <div className="anim-opacity">
            <Suspense
                fallback={
                    <p className="text-red-500 text-6xl">Loading feed...</p>
                }
            >
                <Hero />
            </Suspense>
            <Suspense
                fallback={
                    <p className="text-red-500 text-6xl">Loading feed...</p>
                }
            >
                <EmblaCarousel allHeros={allHeros} options={OPTIONS} />
            </Suspense>
            <AutoScrollEmbla allHeros={allHeros} options={OPTIONS} />
            <Suspense
                fallback={
                    <p className="text-red-500 text-6xl">Loading feed...</p>
                }
            >
                <People />
            </Suspense>
            <Suspense
                fallback={
                    <p className="text-red-500 text-6xl">Loading feed...</p>
                }
            >
                <ArticlesSeo />
            </Suspense>
            <Suspense
                fallback={
                    <p className="text-red-500 text-6xl">Loading feed...</p>
                }
            >
                <Reviews allHeros={allHeros} OPTIONS={OPTIONS} />
            </Suspense>
        </div>
    );
}
