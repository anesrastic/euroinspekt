import LabPage from "@/components/LabPage";

const images = [
  ...[0,1,2,3,4,5,7,9,10,11,12].map((i) => `/images/tekstil/main_${i}.jpg`),
  ...Array.from({ length: 4 }, (_, i) => `/images/tekstil/din_t_${i}.jpg`),
  ...Array.from({ length: 11 }, (_, i) => `/images/tekstil/din_k_${i}.jpg`),
  ...[0,1,3,4,5,6,7,8,9,10,11].map((i) => `/images/tekstil/bally_${i}.jpg`),
  "/images/tekstil/debtekstila_t.jpg",
  "/images/tekstil/ppara_t.jpg",
  "/images/tekstil/vk_t.jpg",
  "/images/tekstil/mjesalica_t.jpg",
];

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">Ispitivanje tekstila i kože</h2>
    <p className="text-gray-700 mb-4">
      Laboratorija Euro Inspekt provodi ispitivanja fizičkih, mehaničkih i hemijskih
      svojstava tekstilnih materijala i kožnih proizvoda. Naša akreditacija u ovoj
      oblasti datira od 1998. godine, kada smo dobili prvu akreditaciju prema EN 45001:1989.
    </p>
    <p className="text-gray-700 mb-6">
      Danas radimo u skladu sa standardom BAS EN ISO/IEC 17025:2018 i provodimo
      ispitivanja koja obuhvataju:
    </p>
    <ul className="space-y-3">
      {[
        "Određivanje sastava vlakana tekstilnih proizvoda",
        "Ispitivanje mehaničkih svojstava (čvrstoća, istezanje, otpornost na habanje)",
        "Ispitivanje postojanosti boje (otpornost boja na pranje, trljanje, svjetlost)",
        "Ispitivanje kožnih i sintetičkih materijala",
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

export default function TekstilKozaPage() {
  return (
    <LabPage
      title="Tekstil i koža"
      breadcrumbLabel="Tekstil i koža"
      breadcrumbHref="/laboratorija/tekstil-koza"
      images={images}
      description={description}
    />
  );
}
