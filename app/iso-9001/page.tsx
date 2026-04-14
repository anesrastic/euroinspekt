"use client";
import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export default function Iso9001Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHero
        title="ISO 9001:2015"
        breadcrumb={[
          { label: "Početna", href: "/" },
          { label: "ISO 9001:2015", href: "/iso-9001" },
        ]}
      />

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: text */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              ISO 9001:2015
            </h2>
            <p className="text-gray-700 mb-4">
              Euro Inspekt d.o.o. Sarajevo je neovisna inspekcija i
              laboratorijsko ispitivanje tekstila, kože i obuće, hrane, duhana
              i duhanskih proizvoda, vode, mikrobiološko ispitivanje vode i
              hrane. Certificirani prema ISO 9001:2015 od 2019. godine.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Laboratorijska ispitivanja tekstila, kože i obuće",
                "Ispitivanje hrane, duhana i duhanskih proizvoda",
                "Fizičko-hemijska i mikrobiološka ispitivanja vode",
                "Inspekcija robe u domaćem i međunarodnom prometu",
                "Usluge uzorkovanja i vještačenja",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="mt-1 w-2 h-2 flex-shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <p className="font-medium text-primary mb-1">Certifikacija</p>
              <p>ISO 9001:2015</p>
              <p>Bureau Veritas Croatia, od 2019. godine</p>
            </div>
          </div>

          {/* Right: certificate image */}
          <div className="flex justify-center lg:justify-end">
            <button
              onClick={() => setOpen(true)}
              className="relative group rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow cursor-zoom-in w-full max-w-sm"
              style={{ aspectRatio: "1041/1471" }}
              aria-label="Uvećaj certifikat"
            >
              <Image
                src="/images/iso9001.jpg"
                alt="ISO 9001:2015 certifikat"
                fill
                className="object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-center pb-4 pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  Kliknite za uvećanje
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/iso9001.jpg"
              alt="ISO 9001:2015 certifikat"
              width={1041}
              height={1471}
              className="object-contain max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg transition-colors"
              aria-label="Zatvori"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
