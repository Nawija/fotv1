import PageHeader from "@/components/PageHeader";
import { Check } from "lucide-react";

export default function page() {
    return (
        <div className="anim-opacity">
            <PageHeader
                title="Oferta"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo autem iure."
            />
            <Example />
            <Example />
            <Example />
        </div>
    );
}

const includedFeatures = [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
];
function Example() {
    return (
        <div className="bg-white py-4">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl rounded-xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                            Lifetime membership
                        </h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Lorem ipsum dolor sit amet consect etur adipisicing
                            elit. Itaque amet indis perferendis blanditiis
                            repellendus etur quidem assumenda.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-color">
                                Whats included
                            </h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <Check
                                        className="h-6 w-5 flex-none text-color"
                                        aria-hidden="true"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-lg font-semibold text-gray-600">
                                   --- Wycena indywidualna ---
                                </p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                                        od 349
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                        zł
                                    </span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-color px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color"
                                >
                                    Get access
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Invoices and receipts available for easy
                                    company reimbursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
