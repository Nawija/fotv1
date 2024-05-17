"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";

type Image = {
    responsiveImage: {
        webpSrcSet: string;
        width: number;
        height: number;
        base64: string;
        src: string;
    };
};

type GalleryProps = {
    allImages: Image[];
};

export default function Gallery({ allImages }: GalleryProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
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
        <div
            ref={ref}
            className="pswp-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 m-2 max-w-[1900px] mx-auto"
        >
            {allImages.map((image, index) => (
                <a
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${index}00ms`,
                    }}
                    href={image.responsiveImage.src}
                    data-pswp-width={image.responsiveImage.width}
                    data-pswp-height={image.responsiveImage.height}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className="object-cover w-full h-full -z-10"
                        src={image.responsiveImage.webpSrcSet}
                        alt="xx"
                        height={image.responsiveImage.height}
                        width={image.responsiveImage.width}
                        blurDataURL={image.responsiveImage.base64}
                        placeholder="blur"
                    />
                </a>
            ))}
        </div>
    );
}
