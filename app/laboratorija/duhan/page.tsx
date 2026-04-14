import LabPage from "@/components/LabPage";

const images = [
  "/images/duhan/slidepusilica0.jpg",
  "/images/duhan/slidepusilica1.jpg",
  "/images/duhan/slidegc0.jpg",
  "/images/duhan/slidegc1.jpg",
  "/images/duhan/slidegc2.jpg",
  "/images/duhan/slidegc20.jpg",
  "/images/duhan/slidegc21.jpg",
  "/images/duhan/slidegc22.jpg",
];

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">
      Ispitivanje duhana i duhanskih proizvoda
    </h2>
    <p className="text-gray-700 mb-4">
      Laboratorija je akreditovana za ispitivanje duhana i duhanskih proizvoda u
      skladu sa standardom BAS EN ISO/IEC 17025:2018. Provodimo kontrolu kvaliteta
      sirovog duhana i gotovih duhanskih proizvoda.
    </p>
    <ul className="space-y-3">
      {[
        "Određivanje sadržaja nikotina, katrana i ugljen-monoksida",
        "Kontrola kvaliteta duhanskih prerađevina",
        "Provjera usklađenosti sa propisima o duhanskim proizvodima",
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

export default function DuhanPage() {
  return (
    <LabPage
      title="Duhan i duhanski proizvodi"
      breadcrumbLabel="Duhan i duhanski proizvodi"
      breadcrumbHref="/laboratorija/duhan"
      images={images}
      description={description}
    />
  );
}
