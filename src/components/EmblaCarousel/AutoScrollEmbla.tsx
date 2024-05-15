"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Image from "next/image";

type PropType = {
    allHeros: [];
    options?: EmblaOptionsType;
};

const AutoScrollEmbla: React.FC<PropType> = (props) => {
    const { allHeros, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true }),
    ]);
    const [isPlaying, setIsPlaying] = useState(false);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            const autoScroll = emblaApi?.plugins()?.autoScroll;
            if (!autoScroll) return;

            const resetOrStop =
                autoScroll.options.stopOnInteraction === false
                    ? autoScroll.reset
                    : autoScroll.stop;

            resetOrStop();
            callback();
        },
        [emblaApi]
    );

    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        const playOrStop = autoScroll.isPlaying()
            ? autoScroll.stop
            : autoScroll.play;
        playOrStop();
    }, [emblaApi]);

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        setIsPlaying(autoScroll.isPlaying());
        emblaApi
            .on("autoScroll:play", () => setIsPlaying(true))
            .on("autoScroll:stop", () => setIsPlaying(false))
            .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
    }, [emblaApi]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {allHeros.map((hero, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="relative w-full h-80 xl:h-[44rem]">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <button
                    className="embla__play"
                    onClick={toggleAutoplay}
                    type="button"
                >
                    {isPlaying ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
};

export default AutoScrollEmbla;
