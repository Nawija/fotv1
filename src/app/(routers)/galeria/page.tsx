import { performRequest } from "@/lib/datocms";
import Gallery from "./_components/Gallery";
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
        <div className="anim-opacity">
            <Gallery allImages={allImages} />
        </div>
    );
}
