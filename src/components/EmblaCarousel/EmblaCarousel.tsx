"use client";

import "./embla.css";
import React, { useCallback, useEffect, useRef } from "react";
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import { HeroType } from "@/types/types";
const TWEEN_FACTOR_BASE = 0.7;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

type PropType = {
    allHeros: [];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { allHeros, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
    const tweenFactor = useRef(0);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenOpacity = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === "scroll";

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex))
                        return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget =
                                        scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget =
                                        scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const tweenValue =
                        1 - Math.abs(diffToTarget * tweenFactor.current);
                    const opacity = numberWithinRange(
                        tweenValue,
                        0,
                        1
                    ).toString();
                    emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
                });
            });
        },
        []
    );

    useEffect(() => {
        if (!emblaApi) return;

        setTweenFactor(emblaApi);
        tweenOpacity(emblaApi);
        emblaApi
            .on("reInit", setTweenFactor)
            .on("reInit", tweenOpacity)
            .on("scroll", tweenOpacity);
    }, [emblaApi, tweenOpacity]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {allHeros.map((hero: HeroType, index: number) => (
                        <div className="embla__slide" key={index}>
                            <img
                                className="w-full object-cover object-center h-80 xl:h-[44rem]"
                                src={hero.img.url}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
