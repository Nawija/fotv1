import { performRequest } from "@/lib/datocms";
import Gallery from "./_components/Gallery";
import { GripHorizontal } from "lucide-react";
const PAGE_CONTENT_QUERY = `
{
  allGalers {
    img {
      responsiveImage {
        webpSrcSet
        width
        height
        base64
        src
      }
    }
  }
}`;

type GalleryType = {
    img: {
        url: string;
        height: number;
        width: number;
    };
};

export default async function page() {
    const {
        data: { allGalers },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });

    const allImages = allGalers.flatMap((gallery: GalleryType) => gallery.img);

    return (
        <>
            <div className="space-y-8 text-center py-12 max-w-lg mx-auto flex items-center justify-center flex-col">
                <h1>Fotografia Slubna</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat animi voluptatem iusto.
                </p>
                <GripHorizontal />
            </div>
            <Gallery allImages={allImages} />
        </>
    );
}
