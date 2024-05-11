"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import "./embla.css";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const AlignEmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="p-10 border space-y-6">
                                <div className="flex items-center justify-start space-x-3">
                                    <img
                                        className="w-12 h-12 rounded-full object-cover object-center"
                                        src={`https://picsum.photos/600/350?v=${index}`}
                                        alt="Your alt text"
                                    />
                                    <h4 className="text-xl font-bold">
                                        Loremipsum dolor
                                    </h4>
                                </div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatum similique nihil
                                    voluptate nostrum recusandae laudantium,
                                    dicta, facere magnam, ipsum veritatis nulla!
                                    Est sunt sit rem illum cumque amet dolor
                                    enim excepturi neque quam, deserunt vero
                                    explicabo animi doloribus autem voluptates
                                    consectetur saepe mollitia repellendus quo
                                    sint? Numquam corrupti rem fugiat alias sit,
                                    nobis autem consequuntur?
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={"embla__dot".concat(
                                index === selectedIndex
                                    ? " embla__dot--selected"
                                    : ""
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AlignEmblaCarousel;