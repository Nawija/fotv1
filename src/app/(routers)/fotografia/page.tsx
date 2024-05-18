import BtnMain from "@/components/BtnMain";
import PageHeader from "@/components/PageHeader";
import { FOTOGRAFIA_CARDS } from "@/constants/Data";

export default function FotografiaPage() {
    return (
        <div className="anim-opacity">
            <PageHeader
                title="Fotografia"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo autem iure."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto gap-2">
                {FOTOGRAFIA_CARDS.map((card) => (
                    <FotografiaCard
                        title={card.title}
                        href={card.href}
                        imgUrl={card.img}
                    />
                ))}
            </div>
            <article className="grid grid-cols-1 lg:grid-cols-2 px-4 max-w-screen-xl mx-auto my-12 lg:my-24 gap-4">
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non exercitationem voluptates dolor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a ipsum praesentium earum hic deleniti laudantium aut ea in vero tempore molestias cum ab architecto cumque officiis necessitatibus fugit temporibus, provident possimus molestiae ducimus repellat impedit? Quis ad eius libero fuga ullam! Maiores</p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non exercitationem voluptates dolor</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem distinctio delectus perspiciatis et veniam unde architecto iusto. Sed magni numquam ab soluta ut itaque aspernatur, dolorem incidunt quasi temporibus architecto voluptatem voluptatum recusandae illo mollitia. Perspiciatis eveniet distinctio soluta facere nobis iure harum asperiores iste possimus quasi! Recusandae consequuntur esse dolor eos nihil.</p>
                </div>
            </article>
        </div>
    );
}

function FotografiaCard({
    title,
    href,
    imgUrl,
}: {
    title: string;
    href: string;
    imgUrl: string;
}) {
    return (
        <div className="relative ">
            <img className="h-full w-full object-cover" src={imgUrl} />
            <div className="absolute w-full h-full bg-black/40 left-0 top-0 flex items-center justify-center flex-col text-white">
                <h2 className="text-2xl font-medium">{title}</h2>
                <BtnMain href={href} />
            </div>
        </div>
    );
}
