import LabPage from "@/components/LabPage";

const images = [
  ...Array.from({ length: 9 }, (_, i) => `/images/mikrobiologija/slideadisa3${i}.jpg`),
  ...Array.from({ length: 9 }, (_, i) => `/images/mikrobiologija/slideadisa20${i}.jpg`),
  ...Array.from({ length: 6 }, (_, i) => `/images/mikrobiologija/slidearhiva1${i}.jpg`),
  "/images/mikrobiologija/zamrzivac_m.jpg",
  "/images/mikrobiologija/ink_m.jpg",
  "/images/mikrobiologija/ink2_m.jpg",
  "/images/mikrobiologija/ink3_m.jpg",
];

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">
      Mikrobiološke analize hrane i vode
    </h2>
    <p className="text-gray-700 mb-4">
      Naša laboratorija provodi mikrobiološka ispitivanja hrane i vode u cilju
      utvrđivanja mikrobiološke ispravnosti i bezbjednosti za potrošače.
      Koristimo standardizovane metode i savremenu opremu.
    </p>
    <ul className="space-y-3">
      {[
        "Određivanje ukupnog broja mikroorganizama",
        "Detekcija i identifikacija patogenih bakterija",
        "Ispitivanje kvasaca i plijesni",
        "Mikrobiološka analiza vode za piće",
        "Analiza površinskih brisova",
      ].map((item) => (
        <li key={item} className="flex gap-3 text-gray-700">
          <span className="mt-1 w-2 h-2 flex-shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
      <p className="font-medium text-primary mb-1">Akreditacija</p>
      <p>BAS EN ISO/IEC 17025:2018</p>
      <p>Institut za akreditaciju BiH (BATA), od 2005. godine</p>
    </div>
  </>
);

export default function MikrobiologijaPage() {
  return (
    <LabPage
      title="Mikrobiološke analize hrane i vode"
      breadcrumbLabel="Mikrobiološke analize"
      breadcrumbHref="/laboratorija/mikrobiologija"
      images={images}
      description={description}
    />
  );
}
