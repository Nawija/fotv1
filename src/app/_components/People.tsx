import Image from "next/image";
import s1 from "../../../public/camera-7903435_1280.webp";

const data = [
    {
        img: s1,
        title: "Ania & Tomek",
    },
    {
        img: s1,
        title: "Magdalena & Karol",
    },
    {
        img: s1,
        title: "Julita & Arek",
    },
    {
        img: s1,
        title: "Małgorzata & Mirosław",
    },
    {
        img: s1,
        title: "Julita & Arek",
    },
    {
        img: s1,
        title: "Julita & Arek",
    },
    {
        img: s1,
        title: "Julita & Arek",
    },
    {
        img: s1,
        title: "Julita & Arek",
    },
    {
        img: s1,
        title: "Julita & Arek",
    },
];

export default function People() {
    return (
        <>
            <h2 className="text-center text-2xl lg:text-3xl font-bold max-w-screen-lg mx-auto my-20 lg:my-24 px-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio quo perferendis, dolores totam
            </h2>
            <section className="max-w-screen-2xl gap-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {data.slice(0, 8).map((article) => (
                    <div className="relative">
                        <Image
                            src={s1}
                            className="object-cover h-full w-full -z-10"
                            height={300}
                            width={300}
                            alt="..."
                        />
                        <p className="absolute left-0 bottom-0 w-full text-end text-lg lg:text-xl font-bold z-10 text-white bg-black/20 backdrop-blur-lg p-2">
                            {article.title}
                        </p>
                    </div>
                ))}
            </section>
        </>
    );
}
