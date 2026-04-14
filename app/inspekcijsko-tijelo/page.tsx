import LabPage from "@/components/LabPage";

const images = [
  "/images/inspekcija/slideIT30.jpg",
  "/images/inspekcija/slideIT31.jpg",
  "/images/inspekcija/slideIT32.jpg",
  "/images/inspekcija/slideIT33.jpg",
  "/images/inspekcija/slideIT_m20.jpg",
  "/images/inspekcija/slideIT_m21.jpg",
  "/images/inspekcija/slidemedo10.jpg",
  "/images/inspekcija/slidemedo11.jpg",
];

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">
      Inspekcijsko tijelo za tekstil, kožu i obuću
    </h2>
    <p className="text-gray-700 mb-4">
      Inspekcijsko tijelo za tekstil, kožu i obuću je akreditovano prema zahtijevima standarda BAS EN
      ISO/IEC 17020:2013 za tekstil, kožu i obuću.
    </p>
    <ul className="space-y-3 mb-6">
      {[
        "Inspekcija tekstilnih proizvoda",
        "Inspekcija kožnih i kožarskih proizvoda",
        "Inspekcija obuće",
        "Pregled i provjera usklađenosti sa tehničkim specifikacijama",
      ].map((item) => (
        <li key={item} className="flex gap-3 text-gray-700">
          <span className="mt-1 w-2 h-2 flex-shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
    <p className="text-gray-700 mb-4">
      Certifikat o akreditaciji možete pogledati{" "}
      <a
        href="http://www.bata.gov.ba/Akreditirana_tijela/Certifikati/IN/Certifikat-IN-20-02.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline font-medium"
      >
        ovdje
      </a>
      . Opseg akreditovanog skoupa inspekcijskog tijela možete pogledati{" "}
      <a
        href="http://www.bata.gov.ba/Akreditirana_tijela/Dodaci/IN/IN-20-02.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline font-medium"
      >
        ovdje
      </a>
      .
    </p>
    <p className="text-gray-700 mb-6">
      Kupci-zainteresirane strane mogu prigovor/žalbu uputiti u skladu sa
      Uputstvom za rješavanje prigovora/žalbi kupaca rIU-006, koje je na
      zahtjev dostupno.
    </p>
    <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
      <p className="font-medium text-primary mb-1">Akreditacija</p>
      <p>BAS EN ISO/IEC 17020:2013</p>
      <p>Institut za akreditaciju BiH (BATA), od 2006. godine</p>
    </div>
  </>
);

export default function InspekcijskoTijeloPage() {
  return (
    <LabPage
      title="Inspekcijsko tijelo za tekstil, kožu i obuću"
      breadcrumbLabel="Inspekcijsko tijelo za tekstil, kožu i obuću"
      breadcrumbHref="/inspekcijsko-tijelo"
      parentBreadcrumb={{ label: "Inspekcijsko tijelo za tekstil, kožu i obuću", href: "/inspekcijsko-tijelo" }}
      images={images}
      description={description}
    />
  );
}
