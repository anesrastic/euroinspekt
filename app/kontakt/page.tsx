import PageHero from "@/components/PageHero";

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        breadcrumb={[
          { label: "Početna", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sarajevo */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-accent rounded-full inline-block" />
              Sarajevo — Sjedište
            </h2>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">Adresa</dt>
                <dd className="text-gray-800 font-medium">
                  Hamdije Kreševljakovića 16-18<br />
                  71000 Sarajevo, Bosna i Hercegovina
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">Poslovnica (Ilidža)</dt>
                <dd className="text-gray-800 font-medium">
                  Ismeta Alajbegovića Šerbe 3, Sarajevo
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</dt>
                <dd>
                  <a href="mailto:inspekt@bih.net.ba" className="text-accent hover:underline font-medium">
                    inspekt@bih.net.ba
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">Telefon</dt>
                <dd className="text-gray-800 space-y-1">
                  <p><a href="tel:+38733206699" className="hover:text-accent">+387 33 20 66 99</a></p>
                  <p><a href="tel:+38733665132" className="hover:text-accent">+387 33 66 51 32</a></p>
                  <p><a href="tel:+38733200076" className="hover:text-accent">+387 33 20 00 76</a></p>
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">Fax</dt>
                <dd className="text-gray-800">+387 33 20 65 93</dd>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-2">Bankovni računi</dt>
                <dd className="text-gray-800 space-y-1">
                  <p className="text-xs">Unicredit bank: <span className="font-mono">3383202250457045</span></p>
                  <p className="text-xs">Raiffeisen bank: <span className="font-mono">1610000063370014</span></p>
                </dd>
              </div>
            </dl>
          </div>

          {/* Ploče */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full inline-block" />
              Ploče — Hrvatska
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Euro Inspekt Kvalitet i Kvantitet j.d.o.o. Ploče
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">Adresa</dt>
                <dd className="text-gray-800 font-medium">
                  Trg Kralja Tomislava 22<br />
                  20340 Ploče, Hrvatska
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</dt>
                <dd>
                  <a href="mailto:inspekt@bih.net.ba" className="text-accent hover:underline font-medium">
                    inspekt@bih.net.ba
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">Telefon</dt>
                <dd className="text-gray-800 space-y-1">
                  <p><a href="tel:+38520313479" className="hover:text-accent">+385 20 313 479</a></p>
                  <p><a href="tel:+385976730212" className="hover:text-accent">+385 97 673 0212</a></p>
                  <p><a href="tel:+385957357742" className="hover:text-accent">+385 95 735 7742</a></p>
                </dd>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <dt className="text-gray-500 text-xs uppercase tracking-wider mb-2">Bankovni račun</dt>
                <dd className="text-gray-800 space-y-1">
                  <p className="text-xs">OTP Banka d.d. Dubrovnik</p>
                  <p className="text-xs">IBAN HR: <span className="font-mono">1824070001100677062</span></p>
                  <p className="text-xs">BIC: <span className="font-mono">OTPVHR2X</span></p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
