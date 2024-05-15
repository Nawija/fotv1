import Image from "next/image";
import s1 from "../../../public/people/chrzest-helenka-opinia.jpg";
import s2 from "../../../public/people/chrzest-mira.jpg";
import s3 from "../../../public/people/magda-i-dawid-opinia-.jpg";
import s4 from "../../../public/people/ola-i-pawel-opinia-.jpg";
import s5 from "../../../public/people/pawel-agata-opinia-slub.jpg";
import s6 from "../../../public/people/stanislaw-i-gabrysia-opinia-.jpg";
import s7 from "../../../public/people/ola-i-pawel-opinia-.jpg";
import s8 from "../../../public/people/chrzest-mira.jpg";

const data = [
    {
        img: s1,
        title: "Ania & Tomek",
        desc: "Pełen profesjonalizm! Myślę, że najlepszą recenzją będzie fakt, że efekty przerosły Nasze najśmielsze oczekiwania 😍 Jarek towarzyszył Nam podczas Chrztu Świętego córki i z całego serca polecam wszystkim współpracę z Jarkiem podczas tak ważnego wydarzenia. Jarek zaczarował małą i idealnie uchwycił wszystkie gesty i momenty. Na pewno jeszcze nie raz spotkamy się z Jarkiem podczas ważnych dla Nas wydarzeń. ❤️",
    },
    {
        img: s2,
        title: "Magdalena & Karol",
        desc: "Fotograf na 5! 😊 Uchwycił wszystkie najważniejsze momenty i atmosferę tego dnia. Współpraca układała się znakomicie. Wspiera i doradzą a jest to bardzo potrzebne gdy pojawią się zdenerwowanie😁 Wspaniałe zdjęcia dzięki którym z łezka w oku będę wracać do dnia ślubu. Serdecznie polecam!",
    },
    {
        img: s3,
        title: "Ola & Paweł",
        desc: "Zdjęcia cudowne! :) Jesteśmy zachwyceni współpracą. Jarek jest osobą pełną pasji i pomysłów na zdjęcia. Sesja ślubna jak i plenerowa przebiegła w super atmosferze. Z całego serca polecam! :)",
    },
    {
        img: s4,
        title: "Małgorzata & Mirosław",
        desc: "Fantastyczną robotę robi, facet wie do czego służy aparat. W dodatku w dniu mojego ślubu uśmiechnięty, pomógł opanować stres związany z ślubem, mocno polecam",
    },
    {
        img: s5,
        title: "Julita & Arek",
        desc: "Miałam okazję współpracować z Panem Jarkiem przy chrzcie córki. Efekty współpracy były zachwycające. Pan Jarek w kościele dla nas praktycznie niewidoczny, mimo to uchwycił mnóstwo pięknych ujęć zarówno córki, jak i gości. Podczas sesji plenerowej był otwarty na sugestie, potrafił zaaranżować kolejne ujęcia tak, żeby wydobyć z nich to, co najlepsze. Bieżący kontakt i intuicyjny system wyboru zdjęć bardzo ułatwił współpracę. Materiały, jakie otrzymaliśmy od Pana były najwyższej jakości, dokładnie takie, jakie wybraliśmy. Szczerze polecam! Myślę, że będę chciała skorzystać z usług Pana Jarka również przy innych okazjach.",
    },
    {
        img: s6,
        title: "Julita & Arek",
        desc: "Jarka znam nie od wczoraj. Jako fotograf potrafi wyciągnąć z najbrzydszego tła piękny krajobraz, ze zwykłej kałuży zrobić cud nad Wisłą, a z brzydkiego kaczątka wyczarować królewnę i to wszystko bez Photoshop'a. Jego ujęcia i pomysły są niepowtarzalne i pozwalają zachować piękne wspomnienia. Dodają każdej okoliczności garstkę magii! Jako człowiek nie ma u mnie ani trochę gorszej opinii 😉 Jest kreatywny, sympatyczny, ma podejście do znudzonych dorosłych i rozrabiających dzieci. Babcie go uwielbiają, ciotki wspominają, a rodzice chcą adoptować 😅 Czego więcej chcieć?! Bierzcie Go w ciemno, polecam bez wyrzutów sumienia i wszelkich wątpliwości!",
    },
    {
        img: s7,
        title: "Julita & Arek",
        desc: "Fotograf na 5! 😊 Uchwycił wszystkie najważniejsze momenty i atmosferę tego dnia. Współpraca układała się znakomicie. Wspiera i doradzą a jest to bardzo potrzebne gdy pojawią się zdenerwowanie😁",
    },
    {
        img: s8,
        title: "Julita & Arek",
        desc: "Pełen profesjonalizm! Myślę, że najlepszą recenzją będzie fakt, że efekty przerosły Nasze najśmielsze oczekiwania 😍 Jarek towarzyszył Nam podczas Chrztu Świętego córki i z całego serca polecam wszystkim współpracę z Jarkiem podczas tak ważnego wydarzenia",
    },
];

export default function People() {
    return (
        <>
            <h2 className="text-center text-2xl lg:text-4xl font-bold max-w-screen-lg mx-auto my-20 lg:my-24 px-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio quo perferendis, dolores totam
            </h2>
            <section className="gap-4 mx-auto px-4 grid grid-cols-4 max-w-screen-2xl">
                {data.slice(0, 8).map((article) => (
                    <div
                        key={article.title}
                        className="relative"
                    >
                        <Image
                            src={article.img}
                            className="object-contain h-full w-full -z-10"
                            height={300}
                            width={300}
                            alt="..."
                        />
                        <p className="absolute left-0 bottom-0 w-full text-end text-lg lg:text-xl font-bold z-10 text-white bg-black/20 backdrop-blur-lg p-2">
                            {article.title}
                        </p>
                        <div className="hidden">
                            <p>{article.desc}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
