import LabPage from "@/components/LabPage";

const images = [
  "/images/toksikologija/slideelisa_r0.jpg",
  "/images/toksikologija/slideelisa_r1.jpg",
];

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">
      Toksikološke analize
    </h2>
    <p className="text-gray-700 mb-4">
      Laboratorija provodi toksikološka ispitivanja za detekciju i
      kvantifikaciju štetnih i zabranjenih supstanci u hrani, vodi i
      ostalim uzorcima.
    </p>
    <ul className="space-y-3">
      {[
        "Analiza mikotoksina",
        "Određivanje sadržaja teških metala u hrani",
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

export default function ToksikologijaPage() {
  return (
    <LabPage
      title="Toksikološke analize"
      breadcrumbLabel="Toksikološke analize"
      breadcrumbHref="/laboratorija/toksikologija"
      images={images}
      description={description}
    />
  );
}
