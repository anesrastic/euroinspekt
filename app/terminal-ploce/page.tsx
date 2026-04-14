import PageHero from "@/components/PageHero";

const services = [
  "Vizualna kontrola robe prije utovara na brod",
  "Kontrola čistoće brodskih skladišta",
  "Nadzor utovara ili istovara robe",
  "Uzorkovanje robe prilikom utovara ili istovara",
  "Analiza robe na licu mjesta prilikom utovara ili istovara",
  "Formiranje uzoraka za dodatna ispitivanja",
  "Kontrola uvjetnosti prijevoznih sredstava robe — kontejner, kamioni, vagoni i dr.",
  "Nadzor vaganja — kalibrirane vage, teretne vage i dr.",
  "Kontrola kvalitete (osnovni parametri kvalitete utvrđeni zakonskim odredbama / sukladno ugovornim obvezama)",
  "Kontrola oštećenja robe, pakiranja, markacije i oznake robe",
  "Inventura uskladištene robe",
  "Sigurnosno plombiranje brodskih skladišta",
];

export default function TerminalPlocePage() {
  return (
    <>
      <PageHero
        title="Terminal Ploče"
        breadcrumb={[
          { label: "Početna", href: "/" },
          { label: "Terminal Ploče", href: "/terminal-ploce" },
        ]}
      />

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Usluge kontrole robe u tranzitnoj luci
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tvrtka &ldquo;Euro Inspekt Kvalitet i Kvantitet&rdquo; j.d.o.o. Ploče nudi
              specijalizirane usluge nadzora, uzorkovanja, kontrole i certifikacije
              pri uvozu ili izvozu robe u morskoj luci u Pločama. Naše usluge
              partnerima pružaju sigurnost po pitanju kvalitete i količine pri
              trgovanju robom.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nudimo specijalizirane usluge kontrole i ispitivanja s kojima
              partneri mogu znatno minimizirati rizike, te povećati vrijednosti u
              procesima proizvodnje i trgovine robom.
            </p>
          </div>

          {/* Services grid */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-5">
              Usluge koje nudimo
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex gap-3 items-start bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md transition-shadow"
                >
                  <span className="mt-1.5 w-2.5 h-2.5 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-gray-700 text-sm leading-relaxed">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5">
            <p className="text-gray-700 leading-relaxed">
              U provođenju usluga tvrtka &ldquo;Euro Inspekt Kvalitet i Kvantitet&rdquo;
              j.d.o.o. Ploče uvijek štiti interese partnera osiguravanjem uvjetnosti
              prema ugovorenim odnosima i međunarodnim standardima.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
