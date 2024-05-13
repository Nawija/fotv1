import React from "react";

export default function EmblaCarouselCardsSkeleton() {
    return (
        <div className="embla">
            <div className="embla__viewport">
                <div className="embla__container">
                    <div className="embla__slide">
                        <div className="relative w-full h-80 xl:h-[44rem] bg-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    );
}
