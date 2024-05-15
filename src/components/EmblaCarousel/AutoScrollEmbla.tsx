"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { HeroType } from "@/types/types";

type PropType = {
    allHeros: [];
    options?: EmblaOptionsType;
};

const AutoScrollEmbla: React.FC<PropType> = (props) => {
    const { allHeros, options } = props;
    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true }),
    ]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {allHeros.map((hero: HeroType, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="relative w-full h-40 xl:h-[24rem]">
                                <Image
                                    className="object-cover object-center"
                                    src={hero.img.responsiveImage.src}
                                    blurDataURL={
                                        hero.img.responsiveImage.base64
                                    }
                                    loading="eager"
                                    placeholder="blur"
                                    alt="Your alt text"
                                    layout="fill"
                                />
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Corrupti asperiores,
                                        impedit enim dicta quam illum ipsa
                                        aliquam, vero ut nostrum soluta expedita
                                        fugit iusto eligendi autem vel totam
                                        odit tempora? Exercitationem eum, facere
                                        repellendus cumque quibusdam suscipit
                                        hic temporibus ipsam odit vero unde
                                        nihil alias quas cupiditate vitae
                                        necessitatibus consectetur omnis, qui,
                                        voluptate beatae. Facilis!
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutoScrollEmbla;
