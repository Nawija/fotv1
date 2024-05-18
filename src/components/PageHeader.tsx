import { GripHorizontal } from "lucide-react";

export default function PageHeader({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    return (
        <div className="space-y-8 text-center p-6 lg:py-12 max-w-lg mx-auto flex items-center justify-center flex-col">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
                {title}
            </h1>
            <p>{desc}</p>
            <GripHorizontal />
        </div>
    );
}
