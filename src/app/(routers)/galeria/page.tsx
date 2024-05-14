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
            <a
                download="https://www.datocms-assets.com/132533/1715521983-356403991_795416282133770_1453407733380961786_n.jpg"
                className="py-12 bg-red-400 fixed right-0 z-50"
            >
                hello
            </a>
            <Gallery allImages={allImages} />
        </div>
    );
}
