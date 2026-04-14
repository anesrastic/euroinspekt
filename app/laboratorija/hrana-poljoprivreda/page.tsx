import LabPage from "@/components/LabPage";

const images = [
  "/images/hrana/slidesoxlet0.jpg",
  "/images/hrana/slidesoxlet1.jpg",
  "/images/hrana/slidesoxlet2.jpg",
  "/images/hrana/slidesoxlet3.jpg",
  "/images/hrana/slideatomac_r0.jpg",
  "/images/hrana/slideatomac_r1.jpg",
  "/images/hrana/slideatomac_r2.jpg",
  "/images/hrana/slidegrijac_kejdal_r0.jpg",
  "/images/hrana/slidegrijac_kejdal_r1.jpg",
  "/images/hrana/slidegrijac_kejdal_r2.jpg",
];

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">
      Ispitivanje hrane i poljoprivrednih proizvoda
    </h2>
    <p className="text-gray-700 mb-4">
      Laboratorija provodi hemijske i fizikalne analize prehrambenih proizvoda i
      sirovina biljnog i životinjskog porijekla. Ispitivanja se provode prema
      priznatim međunarodnim i domaćim standardima.
    </p>
    <ul className="space-y-3">
      {[
        "Određivanje osnovnog hemijskog sastava (vlaga, proteini, masti, pepeo)",
        "Analiza ulja i masti (kiselinski broj, peroksidni broj, jodni broj)",
        "Ispitivanje žitarica, brašna i pekarskih proizvoda",
        "Analiza svježeg i prerađenog voća i povrća",
        "Kontrola kvaliteta mliječnih i mesnih proizvoda",
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

export default function HranaPoljoprivredaPage() {
  return (
    <LabPage
      title="Hrana i poljoprivredni proizvodi"
      breadcrumbLabel="Hrana i poljoprivredni proizvodi"
      breadcrumbHref="/laboratorija/hrana-poljoprivreda"
      images={images}
      description={description}
    />
  );
}
