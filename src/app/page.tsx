import { performRequest } from "@/lib/datocms";
import dynamic from "next/dynamic";

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


export default async function Home() {
    const {
        data: { allHeros, allTests },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });
    return <></>;
}
