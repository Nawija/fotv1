import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex items-center justify-center flex-col max-w-screen-lg mx-auto space-y-4 lg:space-y-10 my-12 lg:my-24 text-center px-4">
            <h1 className="text-2xl lg:text-4xl xl:text-7xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                numquam cumque eos.
            </h1>
            <p className="text-stone-600 lg:text-xl max-w-screen-md mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                neque odio veritatis dignissimos animi ipsam eaque a voluptas
                earum. Consequuntur quaerat
            </p>
            <div className="flex items-center justify-center space-x-2">
                <Link
                    href="/"
                    className="uppercase px-5 py-2 font-bold lg:text-lg text-xs tracking-wider bg-black text-white"
                >
                    Zobacz
                </Link>
                <Link
                    href="/galeria"
                    className="uppercase px-5 py-2 font-bold lg:text-lg text-xs tracking-wider bg-color text-white"
                >
                    Portfolio
                </Link>
            </div>
        </section>
    );
}
