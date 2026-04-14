import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";

const labServices = [
  {
    title: "Tekstil i koža",
    href: "/laboratorija/tekstil-koza",
    description:
      "Ispitivanje fizičkih i hemijskih svojstava tekstilnih materijala, tkanina i kožnih proizvoda.",
  },
  {
    title: "Hrana i poljoprivredni proizvodi",
    href: "/laboratorija/hrana-poljoprivreda",
    description:
      "Analiza prehrambenih proizvoda, kontrola kvaliteta i bezbjednosti hrane.",
  },
  {
    title: "Duhan i duhanski proizvodi",
    href: "/laboratorija/duhan",
    description:
      "Ispitivanje duhanskih proizvoda i kontrola kvaliteta u skladu sa propisima.",
  },
  {
    title: "Mikrobiološke analize hrane i vode",
    href: "/laboratorija/mikrobiologija",
    description:
      "Detekcija mikroorganizama, identifikacija patogena i kontrola mikrobiološke ispravnosti.",
  },
  {
    title: "Fizikohemijske analize vode",
    href: "/laboratorija/voda-fizikohemija",
    description:
      "Ispitivanje fizikalnih i hemijskih parametara vode za piće, otpadnih i površinskih voda.",
  },
  {
    title: "Uzorkovanje hrane i vode",
    href: "/laboratorija/uzorkovanje",
    description:
      "Profesionalno uzorkovanje u skladu sa međunarodnim standardima za analitičke svrhe.",
  },
  {
    title: "Toksikološke analize",
    href: "/laboratorija/toksikologija",
    description:
      "Detekcija i kvantifikacija toksičnih supstanci, teških metala i pesticida.",
  },
];

export default function LaboratorijaPage() {
  return (
    <>
      <PageHero
        title="OJ Laboratorija"
        breadcrumb={[
          { label: "Početna", href: "/" },
          { label: "OJ Laboratorija", href: "/laboratorija" },
        ]}
      />
      {/* Opis laboratorije */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary mb-4">O.J. Laboratorija</h2>
            <p className="text-gray-700 mb-4">
              Laboratorija je akreditovana prema BAS EN ISO/IEC 17025:2018 za ispitivanje:
            </p>
            <ul className="text-gray-700 space-y-1 mb-6">
              {[
                "fizičko-hemijska ispitivanja hrane,",
                "poljoprivrednih proizvoda i materijala,",
                "alkohola i alkoholnih proizvoda,",
                "duhana i duhanskih proizvoda,",
                "tekstila i kože,",
                "mikrobioloških i fizičko hemijskih ispitivanja vode i hrane,",
                "toksikološka ispitivanja hrane - mikotoksini i teški metali,",
                "uzorkovanje vode i hrane.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent font-bold">-</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mb-2">
              Certifikat o akreditaciji možete pogledati{" "}
              <a
                href="http://www.bata.gov.ba/Akreditirana_tijela/Certifikati/LI/Certifikat-LI-20-01.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                ovdje.
              </a>
            </p>
            <p className="text-gray-700">
              Opseg akreditovanog područja možete pogledati{" "}
              <a
                href="http://bata.gov.ba/Akreditirana_tijela/Dodaci/LI/LI-20-01.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                ovdje.
              </a>
            </p>
          </div>
          <div className="md:w-1/2 flex-shrink-0">
            <Image
              src="/images/laboratorija-main.png"
              alt="O.J. Laboratorija"
              width={800}
              height={600}
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-md transition-all group"
            >
              <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <span className="mt-4 inline-block text-accent text-sm font-medium">
                Saznaj više →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
