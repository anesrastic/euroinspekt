"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const labLinks = [
  { label: "Tekstil i koža", href: "/laboratorija/tekstil-koza" },
  { label: "Hrana i poljoprivredni proizvodi", href: "/laboratorija/hrana-poljoprivreda" },
  { label: "Duhan i duhanski proizvodi", href: "/laboratorija/duhan" },
  { label: "Mikrobiološke analize", href: "/laboratorija/mikrobiologija" },
  { label: "Fizikohemijske analize vode", href: "/laboratorija/voda-fizikohemija" },
  { label: "Uzorkovanje", href: "/laboratorija/uzorkovanje" },
  { label: "Toksikološke analize", href: "/laboratorija/toksikologija" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [labOpen, setLabOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLabEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setLabOpen(true);
  };

  const handleLabLeave = () => {
    closeTimer.current = setTimeout(() => setLabOpen(false), 200);
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">

        {/* Single row: logo left, nav right */}
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
            <Image
              src="/images/object1460935384.png"
              alt="Euro Inspekt logo"
              width={72}
              height={72}
              className="rounded-lg bg-white p-1 shadow-md ring-2 ring-white/40"
            />
            <span className="font-bold text-2xl leading-tight">
              Euro Inspekt d.o.o.<br />Sarajevo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-3 text-sm font-bold flex-shrink-0">
            <Link href="/" className="px-6 py-2.5 rounded-full border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors shadow-md">
              Početna
            </Link>

            {/* Laboratorija dropdown */}
            <div
              className="relative"
              onMouseEnter={handleLabEnter}
              onMouseLeave={handleLabLeave}
            >
              <Link
                href="/laboratorija"
                className="px-6 py-2.5 rounded-full border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors flex items-center gap-1 shadow-md"
              >
                O.J. Laboratorija
                <span className="text-xs">▾</span>
              </Link>
              {labOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-lg rounded-xl py-2 min-w-64 z-50"
                  onMouseEnter={handleLabEnter}
                  onMouseLeave={handleLabLeave}
                >
                  {labLinks.map((link, i) => (
                    <div key={link.href}>
                      {i > 0 && <div className="border-t border-gray-300 mx-3" />}
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/inspekcijsko-tijelo" className="px-6 py-2.5 rounded-full border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors shadow-md">
              Inspekcijsko tijelo za tekstil, kožu i obuću
            </Link>
            <Link href="/iso-9001" className="px-6 py-2.5 rounded-full border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors shadow-md">
              ISO 9001:2015
            </Link>
            <Link href="/terminal-ploce" className="px-6 py-2.5 rounded-full border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors shadow-md">
              Terminal Ploče
            </Link>
            <Link
              href="/kontakt"
              className="px-6 py-2.5 rounded-full bg-accent text-primary hover:bg-blue-400 transition-colors font-bold shadow-md"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile/tablet hamburger */}
          <button
            className="xl:hidden p-2 rounded hover:bg-blue-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-white mb-1" />
            <div className="w-5 h-0.5 bg-white mb-1" />
            <div className="w-5 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="xl:hidden py-3 flex flex-col gap-2 text-sm" style={{ borderTop: "2px solid rgba(255,255,255,0.8)", borderBottom: "2px solid rgba(255,255,255,0.8)" }}>
            <Link href="/" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
              Početna
            </Link>
            <Link href="/laboratorija" className="py-2 hover:text-accent font-semibold" onClick={() => setMobileOpen(false)}>
              O.J. Laboratorija
            </Link>
            {labLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="pl-4 py-1 text-gray-300 hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/inspekcijsko-tijelo" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
              Inspekcijsko tijelo za tekstil, kožu i obuću
            </Link>
            <Link href="/iso-9001" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
              ISO 9001:2015
            </Link>
            <Link href="/terminal-ploce" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
              Terminal Ploče
            </Link>
            <Link href="/kontakt" className="py-2 hover:text-accent" onClick={() => setMobileOpen(false)}>
              Kontakt
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
