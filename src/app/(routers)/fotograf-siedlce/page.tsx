import React from "react";

export default function page() {
    return (
        <div className="anim-opacity">
            <div className="mx-auto my-12 text-center px-4">
                <p>Miło mi że tu jesteś</p>
                <div className="my-2 h-px w-1/5 bg-gray-300 mx-auto" />
                <h1 className=" text-2xl lg:text-5xl tracking-wide font-medium relative mx-auto max-w-screen-lg">
                    <strong className="uppercase ">
                        Fotograf Siedlce - Uchwyć Niezapomniane Chwile z
                        Profesjonalistą
                    </strong>
                    <span className="absolute text-sm lg:text-xl right-0 sm:right-20 lg:right-1/5 -bottom-4">
                        Jarek Olszewski
                    </span>
                </h1>
            </div>
            <div className="py-12 bg-black relative">
                <div className="absolute inset-4 flex items-center justify-center border border-zinc-600 z-0" />
                <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 z-20 px-3">
                    <div className="p-1 bg-white">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1649506721349-I71VUN57364DQ6TC7GES/jarek-olszewski-fotograf.01.JPG?format=500w"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="p-1 bg-white">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1649506721369-AE00LG8CJ4T98935IHEG/jarek-olszewski-fotograf.02.JPG?format=500w"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="p-1 bg-white">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1649506721939-6AUM0BGDFN3ZX3D8O0EZ/jarek-olszewski-fotograf.03.JPG?format=500w"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="p-1 bg-white">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1649506722015-RHGTAGVQGRU5GN6KMIKY/jarek-olszewski-fotograf.04.JPG?format=500w"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center max-w-screen-lg py-24 mx-auto space-y-6">
                <h2 className="text-3xl font-medium">Fotograf z Pasją</h2>
                <p>
                    Jesteśmy szczęśliwi, że trafiłeś tutaj! Jestem{" "}
                    <strong>fotografem z Siedlec</strong>, który pasję zamienił
                    w zawód. Moja historia z fotografią zaczęła się przypadkowo,
                    podczas meczu lokalnej drużyny w 2008 roku. Nie spodziewałem
                    się wtedy, że to pierwsze zdjęcie będzie początkiem
                    fascynującej podróży, która trwa do dziś.
                </p>

                <p>
                    Od tamtej pory poznałem wiele wspaniałych osób i miałem
                    przyjemność eksplorować różne dziedziny fotografii. Moją
                    ulubioną pasją jest uchwycanie tych chwil i momentów, które
                    często umykają naszej uwadze. Lubię się ustawiać z boku, nie
                    przeszkadzając nikomu, i łapać te niepowtarzalne momenty.
                    Fotografowanie ślubów, chrztów i innych rodzinnych
                    uroczystości daje mi ogromną satysfakcję, gdy widzę, że moja
                    praca wywołuje uśmiech na twarzach moich klientów lub nawet
                    łzy szczęścia.
                </p>

                <h2 className="text-3xl font-medium">
                    Podróż Fotograficzna po Polsce
                </h2>
                <p>
                    Mimo że głównie działam w{" "}
                    <strong>województwie mazowieckim</strong>, konkretnie w
                    okolicach Siedlec, odległość nigdy nie była dla mnie
                    problemem. Z przyjemnością podróżuję, aby uchwycić
                    najpiękniejsze chwile dla moich klientów. Dotychczas miałem
                    okazję odwiedzić prawie każdy zakątek Polski, co stanowi dla
                    mnie ogromną przyjemność i inspirację.
                </p>

                <p>
                    Jeśli szukasz profesjonalnego fotografa, który z pasją
                    uchwyci dla Ciebie najważniejsze momenty życia, zapraszam do
                    kontaktu. Pozwól mi sprawić, że te chwile staną się
                    niezapomniane i pozostaną z Tobą na zawsze.
                </p>
            </div>
        </div>
    );
}
