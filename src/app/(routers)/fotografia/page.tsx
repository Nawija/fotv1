import PageHeader from "@/components/PageHeader";

export default function page() {
    return (
        <div className="anim-opacity">
            <PageHeader
                title="Fotografia"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo autem iure."
            />
            <div className="grid grid-cols-4 max-w-screen-xl mx-auto gap-2">
                <div className="relative ">
                    <img
                        className="h-full w-full object-cover"
                        src="https://cdn.pixabay.com/photo/2015/09/03/08/04/photographer-920128_640.jpg"
                    />
                    <div className="absolute w-full h-full bg-black/40 left-0 top-0 flex items-center justify-center flex-col text-white">
                        <p className="text-xl font-medium">Fotografia Ślubna</p>
                        <p className="px-2 py-1 text-base border mt-2">
                            Zobacz
                        </p>
                    </div>
                </div>
                <div className="relative ">
                    <img
                        className="h-full w-full object-cover"
                        src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_640.jpg"
                    />
                    <div className="absolute w-full h-full bg-black/40 left-0 top-0 flex items-center justify-center flex-col text-white">
                        <p className="text-xl font-medium">Fotografia Ślubna</p>
                        <p className="px-2 py-1 text-base border mt-2">
                            Zobacz
                        </p>
                    </div>
                </div>
                <div className="relative ">
                    <img
                        className="h-full w-full object-cover"
                        src="https://cdn.pixabay.com/photo/2023/03/05/16/20/sea-7831815_640.jpg"
                    />
                    <div className="absolute w-full h-full bg-black/40 left-0 top-0 flex items-center justify-center flex-col text-white">
                        <p className="text-xl font-medium">Fotografia Ślubna</p>
                        <p className="px-2 py-1 text-base border mt-2">
                            Zobacz
                        </p>
                    </div>
                </div>
                <div className="relative ">
                    <img
                        className="h-full w-full object-cover"
                        src="https://cdn.pixabay.com/photo/2020/09/20/07/24/iceland-5586225_640.jpg"
                    />
                    <div className="absolute w-full h-full bg-black/40 left-0 top-0 flex items-center justify-center flex-col text-white">
                        <p className="text-xl font-medium">Fotografia Ślubna</p>
                        <p className="px-2 py-1 text-base border mt-2">
                            Zobacz
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
