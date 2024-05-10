import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselProps() {
    return (
        <div className="bg-zinc-200">
            <Carousel
                className="w-full h-[60vh] max-w-screen-2xl mx-auto overflow-hidden "
            >
                <CarouselContent className="">
                    <CarouselItem className="w-full">
                        <img
                            src="https://images.unsplash.com/photo-1715292779491-a32d1f086f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                            className="h-full w-full object-cover object-center"
                        />
                    </CarouselItem>
                    <CarouselItem className="mx-auto max-w-screen-2xl">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1670985849616-6aa6c441e0bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
                            className="h-full w-full object-cover object-center"
                        />
                    </CarouselItem>
                    <CarouselItem className="mx-auto max-w-screen-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1714756126628-b55e40c4c129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8https://images.unsplash.com/photo-1714756126628-b55e40c4c129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                            className="h-full w-full object-cover object-center"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
