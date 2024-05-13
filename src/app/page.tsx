import AlignEmblaCarousel from "@/components/EmblaCarousel/AlignEmblaCarousel";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Star } from "lucide-react";
import Link from "next/link";
import Hero from "./_components/Hero";
import { performRequest } from "@/lib/datocms";

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
            <Hero />
            <EmblaCarousel allHeros={allHeros} options={OPTIONS} />
            <section className="max-w-screen-2xl mx-auto space-y-8">
                <h2 className="text-center text-3xl font-bold max-w-screen-lg mx-auto my-12 lg:my-20">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio quo perferendis, dolores totam
                </h2>
                <div className="flex lg:flex-row lg:my-24 flex-col items-center justify-center">
                    <img
                        className="lg:w-1/2 w-11/12"
                        src="https://plus.unsplash.com/premium_photo-1670985849616-6aa6c441e0bf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <div className="p-10 space-y-4">
                        <h3 className="text-3xl font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat esse minima voluptatem corporis
                            tempora, totam, laboriosam laborum itaque
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempora debitis vitae asperiores recusandae
                            esse, quod aspernatur voluptatum exercitationem et,
                            optio tenetur distinctio illum temporibus maxime
                            culpa eligendi quasi. Non optio accusamus molestias
                            nobis! Aspernatur, omnis nisi. Repellat repellendus
                            deleniti dignissimos fugit accusantium minus
                            voluptatibus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempora debitis vitae asperiores recusandae
                            esse, quod mos fugit accusantium minus voluptatibus.
                        </p>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-2xl mx-auto space-y-8">
                <div className="flex lg:flex-row lg:my-24 flex-col items-center justify-center">
                    <img
                        className="lg:w-1/2 w-11/12 lg:order-1"
                        src="https://plus.unsplash.com/premium_photo-1670985849616-6aa6c441e0bf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <div className="p-10 space-y-4">
                        <h3 className="text-3xl font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat esse minima voluptatem corporis
                            tempora, totam, laboriosam laborum itaque
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempora debitis vitae asperiores recusandae
                            esse, quod aspernatur voluptatum exercitationem et,
                            optio tenetur distinctio illum temporibus maxime
                            culpa eligendi quasi. Non optio accusamus molestias
                            nobis! Aspernatur, omnis nisi. Repellat repellendus
                            deleniti dignissimos fugit accusantium minus
                            voluptatibus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempora debitis vitae asperiores recusandae
                            esse, quod mos fugit accusantium minus voluptatibus.
                        </p>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-2xl mx-auto space-y-8">
                <div className="flex lg:flex-row lg:my-24 flex-col items-center justify-center">
                    <img
                        className="lg:w-1/2 w-11/12"
                        src="https://plus.unsplash.com/premium_photo-1670985849616-6aa6c441e0bf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <div className="p-10 space-y-4">
                        <h3 className="text-3xl font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat esse minima voluptatem corporis
                            tempora, totam, laboriosam laborum itaque
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempora debitis vitae asperiores recusandae
                            esse, quod aspernatur voluptatum exercitationem et,
                            optio tenetur distinctio illum temporibus maxime
                            culpa eligendi quasi. Non optio accusamus molestias
                            nobis! Aspernatur, omnis nisi. Repellat repellendus
                            deleniti dignissimos fugit accusantium minus
                            voluptatibus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempora debitis vitae asperiores recusandae
                            esse, quod mos fugit accusantium minus voluptatibus.
                        </p>
                    </div>
                </div>
            </section>
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
        </div>
    );
}
