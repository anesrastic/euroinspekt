import LabPage from "@/components/LabPage";

const images = [
  "WA0000", "WA0003", "WA0008", "WA0010", "WA0011",
  "WA0014", "WA0017", "WA0019", "WA0020", "WA0021",
  "WA0025", "WA0026", "WA0027", "WA0029", "WA0030",
  "WA0032", "WA0040", "WA0050", "WA0051", "WA0053",
  "WA0070", "WA0072",
].map((id) => `/images/terminal/IMG-20260430-${id}.jpg`);

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

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">
      Usluge kontrole robe u tranzitnoj luci
    </h2>
    <p className="text-gray-700 mb-4">
      Tvrtka &ldquo;Euro Inspekt Kvalitet i Kvantitet&rdquo; j.d.o.o. Ploče nudi
      specijalizirane usluge nadzora, uzorkovanja, kontrole i certifikacije
      pri uvozu ili izvozu robe u morskoj luci u Pločama. Naše usluge
      partnerima pružaju sigurnost po pitanju kvalitete i količine pri
      trgovanju robom.
    </p>
    <p className="text-gray-700 mb-6">
      Nudimo specijalizirane usluge kontrole i ispitivanja s kojima
      partneri mogu znatno minimizirati rizike, te povećati vrijednosti u
      procesima proizvodnje i trgovine robom.
    </p>
    <ul className="space-y-3 mb-6">
      {services.map((item) => (
        <li key={item} className="flex gap-3 text-gray-700">
          <span className="mt-1 w-2 h-2 flex-shrink-0 rounded-full bg-accent" />
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-5 py-4">
      <p className="text-gray-700 text-sm leading-relaxed">
        U provođenju usluga tvrtka &ldquo;Euro Inspekt Kvalitet i Kvantitet&rdquo;
        j.d.o.o. Ploče uvijek štiti interese partnera osiguravanjem uvjetnosti
        prema ugovorenim odnosima i međunarodnim standardima.
      </p>
    </div>
  </>
);

export default function TerminalPlocePage() {
  return (
    <LabPage
      title="Terminal Ploče"
      breadcrumbLabel="Terminal Ploče"
      breadcrumbHref="/terminal-ploce"
      parentBreadcrumb={{ label: "Terminal Ploče", href: "/terminal-ploce" }}
      images={images}
      description={description}
    />
  );
}
