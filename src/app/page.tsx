import { performRequest } from "@/lib/datocms";
import dynamic from "next/dynamic";
import { EmblaOptionsType } from "embla-carousel";

const Hero = dynamic(() => import("./_components/Hero"));
const AutoScrollEmbla = dynamic(
    () => import("@/components/EmblaCarousel/AutoScrollEmbla"),
    { ssr: false }
);
const People = dynamic(() => import("./_components/People"), { ssr: false });
const ArticlesSeo = dynamic(() => import("@/app/_components/ArticlesSeo"), {
    ssr: false,
});
const Reviews = dynamic(() => import("@/app/_components/Reviews"), {
    ssr: false,
});

const PAGE_CONTENT_QUERY = `
{
    allHeros {
      img {
        responsiveImage {
          width
          height
          base64
          src
        }
      }
    }
    allTests {
        title
        desc
        img {
            responsiveImage {
                width
                height
                base64
                src
              }
        }
      }
  }`;

import hero from "../../public/odry-photography-wordpress-theme.png";
import Image from "next/image";

export default async function Home() {
    const {
        data: { allHeros, allTests },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });

    const OPTIONS: EmblaOptionsType = { loop: true };
    return <></>;
}
