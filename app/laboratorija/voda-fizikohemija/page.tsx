import LabPage from "@/components/LabPage";

const images = [
  "/images/voda/slidevoda110.jpg",
  "/images/voda/slidevoda111.jpg",
  "/images/voda/slidevoda112.jpg",
  "/images/voda/slidevoda113.jpg",
  "/images/voda/slidevoda114.jpg",
];

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">
      Fizikohemijske analize vode
    </h2>
    <p className="text-gray-700 mb-4">
      Provodimo fizikalne i hemijske analize vode za piće, podzemnih,
      površinskih i otpadnih voda u skladu sa zakonskim propisima i
      međunarodnim standardima.
    </p>
    <ul className="space-y-3">
      {[
        "Određivanje pH vrijednosti, elektroprovodljivosti i mutnoće",
        "Određivanje nitrata, nitrita, amonijaka i fosfata",
        "Analiza hlorida, sulfata i ukupne tvrdoće",
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

export default function VodaFizikohemijaPage() {
  return (
    <LabPage
      title="Fizikohemijske analize vode"
      breadcrumbLabel="Fizikohemijske analize vode"
      breadcrumbHref="/laboratorija/voda-fizikohemija"
      images={images}
      description={description}
    />
  );
}
