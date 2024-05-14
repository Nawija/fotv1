import Image from "next/image";
import s1 from "../../../public/sandy-millar-8vaQKYnawHw-unsplash.jpg";

export default function ArticlesSeo() {
    return (
        <div>
            <section className="max-w-screen-xl mx-auto space-y-8">
                <h2 className="text-center text-2xl lg:text-3xl font-bold max-w-screen-lg mx-auto my-12 lg:my-20">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio quo perferendis, dolores totam
                </h2>
                <div className="flex lg:flex-row lg:my-24 flex-col items-center justify-center">
                    <div className="relative w-full h-96">
                        <div className="bg-gradient-to-l from-white via-transparent to-white h-full w-full absolute left-0 top-0 z-10" />
                        <Image
                            src={s1}
                            className="h-full w-full object-cover"
                            layout="fill"
                            alt="..."
                        />
                    </div>
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
            <section className="max-w-screen-xl mx-auto space-y-8">
                <div className="flex lg:flex-row lg:my-24 flex-col items-center justify-center">
                    <div className="relative w-full h-96 order-1">
                        <div className="bg-gradient-to-l from-white via-transparent to-white h-full w-full absolute left-0 top-0 z-10" />
                        <Image
                            src={s1}
                            className="h-full w-full object-cover"
                            layout="fill"
                            alt="..."
                        />
                    </div>
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
            <section className="max-w-screen-xl mx-auto space-y-8">
                <div className="flex lg:flex-row lg:my-24 flex-col items-center justify-center">
                    <div className="relative w-full h-96">
                        <div className="bg-gradient-to-l from-white via-transparent to-white h-full w-full absolute left-0 top-0 z-10" />
                        <Image
                            src={s1}
                            className="h-full w-full object-cover"
                            layout="fill"
                            alt="..."
                        />
                    </div>
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
        </div>
    );
}
