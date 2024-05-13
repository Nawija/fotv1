"use client";

import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

type Image = {
    url: string;
    width: number;
    height: number;
};

type GalleryProps = {
    allImages: Image[];
};

export default function Gallery({ allImages }: GalleryProps) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: ".pswp-gallery",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, [allImages]);

    return (
        <div className="pswp-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 m-2 ">
            {allImages.map((image, index) => (
                <a
                    href={image.url}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="object-cover w-full h-full -z-10"
                        src={image.url}
                        alt="xx"
                    />
                </a>
            ))}
        </div>
    );
}
