"use client";

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
        <div className="pswp-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 m-2 max-w-screen-xl mx-auto">
            {allImages.map((image) => (
                <ImgGallery image={image} />
            ))}
        </div>
    );
}

function ImgGallery({ image }: GalleryProps) {
    const widthHeightRatio =
        image.responsiveImage.height / image.responsiveImage.width;
    const galleryHeight = Math.ceil(330 * widthHeightRatio);
    const imageSapns = Math.ceil(galleryHeight / 10) + 1;
    return (
        <div
            className=""
            style={{ gridRow: `span ${imageSapns}` }}
        >
            <a
                href={image.responsiveImage.src}
                data-pswp-width={image.responsiveImage.width}
                data-pswp-height={image.responsiveImage.height}
                // key={index}
                target="_blank"
                rel="noreferrer"
                className="group relative"
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
        </div>
    );
}
