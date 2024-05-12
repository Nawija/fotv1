import { performRequest } from "@/lib/datocms";
import Gallery from "./_components/Gallery";
const PAGE_CONTENT_QUERY = `
{
  allGalers {
    img {
      url
      height
      width
    }
  }
}`;
export default async function page() {
    const {
        data: { allGalers },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });

    const allImages = allGalers.flatMap((gallery) => gallery.img);

    return (
        <div className="anim-opacity">
            <Gallery allImages={allImages} />
        </div>
    );
}
