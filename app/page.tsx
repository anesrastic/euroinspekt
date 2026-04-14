import Link from "next/link";
import Image from "next/image";

const accreditations = [
  {
    year: "2005",
    body: "Institut za akreditaciju BiH",
    standard: "BAS EN ISO/IEC 17025:2018",
    scope: "Hrana, duhan, voda, mikrobiologija, tekstil, koža, toksikologija, uzorkovanje",
  },
  {
    year: "2006",
    body: "Institut za akreditaciju BiH",
    standard: "BAS EN ISO/IEC 17020:2013",
    scope: "Inspekcijsko tijelo za tekstil, kožu i obuću",
  },
  {
    year: "2019",
    body: "Bureau Veritas Croatia",
    standard: "ISO 9001:2015",
    scope: "Sistem upravljanja kvalitetom",
  },
  {
    year: "2022",
    body: "Ministarstvo pravde BiH",
    standard: "Registracija",
    scope: "Usluge vještačenja",
  },
];

const branches = [
  { name: "Poslovnica Ilidža", address: "Ismeta Alajbegovića Šerbe 3, Sarajevo" },
  { name: "Poslovnica Istočno Sarajevo", address: "Istočno Sarajevo, BiH" },
  { name: "Poslovnica Visoko", address: "Visoko, BiH" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: "520px" }}>
        {/* Background: lab photo */}
        <Image
          src="/images/header.png"
          alt="Laboratorijsko ispitivanje"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay — dark on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30" />

        <div className="relative max-w-7xl mx-auto px-4 py-28 flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
              Euro Inspekt d.o.o. Sarajevo
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Kontrola robe u domaćem i međunarodnom prometu. Akreditovana
              laboratorija i inspekcijsko tijelo od povjerenja.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-blue-400 transition-colors shadow-lg"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>

      {/* O nama */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">O nama</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-700 space-y-4">
              <p>
                Euro Inspekt d.o.o. Sarajevo je kompanija specijalizovana za
                kontrolu robe u domaćem i međunarodnom prometu. Ovlašteni smo
                od strane Federalnog ministarstva trgovine za kontrolu
                poljoprivrednih proizvoda, tekstila, kože i obuće, drveta,
                namještaja i srodnih sirovina.
              </p>
              <p>
                Pored sjedišta u Sarajevu, kompanija posluje kroz tri
                poslovnice koje pružaju usluge na širem prostoru Bosne i
                Hercegovine.
              </p>
            </div>
            <div className="grid gap-4">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="border-l-4 border-accent pl-4 py-2"
                >
                  <p className="font-semibold text-primary">{branch.name}</p>
                  <p className="text-sm text-gray-600">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Akreditacije */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Akreditacije i certifikati
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((acc) => (
              <div
                key={acc.year + acc.standard}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  {acc.year}
                </div>
                <p className="font-semibold text-gray-900 mb-1">{acc.standard}</p>
                <p className="text-sm text-accent font-medium mb-2">{acc.body}</p>
                <p className="text-sm text-gray-600">{acc.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Politika kvaliteta */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Politika kvaliteta
          </h2>
          <div className="flex flex-col gap-8">

            {/* Laboratorija */}
            <div className="bg-gray-50 rounded-lg p-8 border-t-4 border-accent">
              <h3 className="text-xl font-bold text-primary mb-5">
                POLITIKA KVALITETA O.J. Laboratorija
              </h3>
              <p className="text-gray-700 mb-4">
                Prioritet poslovanja OJ Laboratorija u okviru kompanije &ldquo;EURO INSPEKT&rdquo; d.o.o. Sarajevo je obezbijediti nepristrasne i validne rezultate laboratorijskih ispitivanja, uz maksimalno ispunjavanje zahtjeva korisnika usluga, međunarodnih standarda i zakonskih propisa.
              </p>
              <p className="text-gray-700 mb-4">
                U cilju ispunjavanja navedenog, opredijelili smo se da uspostavimo, održavamo i neprekidno poboljšavamo sistem upravljanja prema zahtjevima standarda BAS EN ISO/IEC 17025:2018, za aktivnosti iz područja ispitivanja tekstila i kože, duhana i duhanskih proizvoda, fizičko-hemijskih i mikrobioloških ispitivanja hrane i vode.
              </p>
              <p className="text-gray-700 mb-3 font-medium">Politikom kvaliteta se obavezujemo na:</p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "poštovanje principa neovisnosti, nepristrasnosti i povjerljivosti;",
                  "izvršavanje usluga laboratorijskih ispitivanja od strane kompetentnog osoblja, primjenom provjerenih ispitnih metoda i odgovarajuće opreme, uz poštovanje pravila dobre laboratorijske prakse;",
                  "usklađenost laboratorijskih aktivnosti sa zahtjevima kupaca, važećim izdanjima međunarodnih standarda i zakonskim propisima;",
                  "upoznavanje svih uposlenika sa obimom i granicama njihovih odgovornosti, politikom i ciljevima kvaliteta, te dokumentima kvaliteta relevantnim za njihovo područje rada;",
                  "uspostavljanje profesionalnog odnosa sa korisnicima naših usluga i dobavljačima, uz održavanje dobre komunikacije i partnerskog pristupa saradnji;",
                  "kontinuiranu edukaciju osoblja i primjenu najnovijih ispitnih metoda, kako bismo pozitivno i blagovremeno odgovorili na zahtjeve i potrebe kupaca;",
                  "procjenu zadovoljstva kupaca i uposlenog osoblja, interne provjere i preispitivanja, kako bismo kontinuirano poboljšavali sistem upravljanja kvalitetom.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inspekcijsko tijelo */}
            <div className="bg-gray-50 rounded-lg p-8 border-t-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-6">
                MISIJA, VIZIJA i POLITIKA KVALITETA O.J. Inspekcijsko tijelo za tekstil, kožu i obuću
              </h3>

              <div className="mb-5">
                <p className="font-bold text-primary mb-2">MISIJA</p>
                <p className="text-gray-700">
                  Pružiti neovisnu uslugu kontrole kvaliteta komercijalnih proizvoda u oblasti tekstila i kože, te osigurati da tržište u BiH koristi proizvode usaglašene sa specifikacijama, propisima i standardima iz te oblasti.
                </p>
              </div>

              <div className="mb-5">
                <p className="font-bold text-primary mb-2">VIZIJA</p>
                <p className="text-gray-700">
                  Biti prvi i najbolji u BiH i širem okruženju po pitanju osiguranja kvaliteta proizvoda u prometu BiH kao pouzdan partner za obezbjeđenje kvaliteta proizvoda i usluga.
                </p>
              </div>

              <div>
                <p className="font-bold text-primary mb-2">POLITIKA KVALITETA</p>
                <p className="text-gray-700 mb-3">
                  Opredjelili smo se da uspostavimo, održavamo i neprekidno poboljšavamo sistem upravljanja usklađen sa zahtjevima standarda BAS EN ISO/IEC 17020:2013 u cilju:
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "postizanja visokog zadovoljstva naših klijenata kvalitetom pruženih usluga te poštovanjem načela neovisnosti, nepristrasnosti i povjerenja;",
                    "da se naša usluga temelji na primjeni provjerenih kontrolnih tehnologija, kompetentnom osoblju i poštovanju državnih i međunarodnih standarda, zakona i propisa;",
                    "da uspostavljanjem dobre i brze interne i eksterne komunikacije obezbjedimo osnov za prenošenje vrijednosti i znanja;",
                    "da sistematskim obučavanjem našeg kontrolnog osoblja postignemo kompetentnost odgovora na zahtjeve sve probirljivijeg klijenta;",
                    "da sa našim klijentima i dobavljačima uspostavljamo profesionalan i partnerski odnos i kroz međusobnu saradnju i razmjenu iskustava rješavamo eventualno nastale probleme;",
                    "da se naši uspostavljeni ciljevi prenose i realiziraju na svim nivoima naše organizacije.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
