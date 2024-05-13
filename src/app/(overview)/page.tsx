const EmblaCarousel = dynamic(
    () => import("@/components/EmblaCarousel/EmblaCarousel")
);
const ArticlesSeo = dynamic(() => import("@/app/_components/ArticlesSeo"));
const Reviews = dynamic(() => import("@/app/_components/Reviews"));
import { EmblaOptionsType } from "embla-carousel";
import Hero from "../_components/Hero";
import { performRequest } from "@/lib/datocms";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const PAGE_CONTENT_QUERY = `
{
    allHeros {
      img {
        url
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
