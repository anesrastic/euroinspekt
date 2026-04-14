"use client";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const INTERVAL_MS = 3000;

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-4 right-5 text-white text-4xl hover:text-accent transition-colors leading-none z-10" onClick={onClose} aria-label="Zatvori">×</button>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-gray-400 text-sm z-10">{current + 1} / {images.length}</div>
      <button className="absolute left-3 md:left-6 text-white text-5xl hover:text-accent transition-colors leading-none px-2 py-4 z-10" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Prethodna">‹</button>
      <div className="relative max-w-4xl w-full mx-16 md:mx-24" onClick={(e) => e.stopPropagation()}>
        <Image src={images[current]} alt={`Slika ${current + 1}`} width={900} height={600} className="object-contain max-h-[80vh] w-full rounded-lg" priority />
      </div>
      <button className="absolute right-3 md:right-6 text-white text-5xl hover:text-accent transition-colors leading-none px-2 py-4 z-10" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Sljedeća">›</button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 overflow-x-auto max-w-[90vw] px-2">
        {images.map((src, i) => (
          <button key={src} onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`flex-shrink-0 w-12 h-8 rounded overflow-hidden border-2 transition-all ${i === current ? "border-accent scale-110" : "border-transparent opacity-50 hover:opacity-80"}`}>
            <Image src={src} alt="" width={48} height={32} className="object-cover w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── AutoSlideshow ─────────────────────────────────────────────────────────────
function AutoSlideshow({ images, onImageClick }: { images: string[]; onImageClick: (i: number) => void }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCurrent((i + images.length) % images.length);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % images.length), INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, current, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="relative aspect-[4/3] cursor-zoom-in"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onClick={() => onImageClick(current)}>
        <Image key={current} src={images[current]} alt={`Slika ${current + 1}`} fill
          className="object-cover animate-fade pointer-events-none" sizes="50vw" priority />
        <div className="absolute inset-0 bg-primary/0 hover:bg-primary/15 transition-colors duration-300 pointer-events-none" />
        {images.length > 1 && (
          <>
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white text-2xl w-9 h-9 rounded-full flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); setPaused(false); }} aria-label="Prethodna">‹</button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white text-2xl w-9 h-9 rounded-full flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); setPaused(false); }} aria-label="Sljedeća">›</button>
          </>
        )}
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full pointer-events-none">
          {current + 1} / {images.length}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <div className="h-1 bg-gray-100">
            <div key={`${current}-${paused}`} className={`h-full bg-accent ${paused ? "" : "animate-progress"}`}
              style={{ animationDuration: `${INTERVAL_MS}ms` }} />
          </div>
          <div className="flex justify-center gap-1.5 py-3 px-4 flex-wrap">
            {images.slice(0, 10).map((_, i) => (
              <button key={i} onClick={() => { goTo(i); setPaused(false); }}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-accent scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Slika ${i + 1}`} />
            ))}
            {images.length > 10 && <span className="text-xs text-gray-400 self-center ml-1">+{images.length - 10}</span>}
          </div>
        </>
      )}
      <p className="text-center text-xs text-gray-400 pb-3">
        Kliknite za uvećan prikaz
      </p>
    </div>
  );
}

// ── LabPage (exported) ────────────────────────────────────────────────────────
export interface LabPageProps {
  title: string;
  breadcrumbLabel: string;
  breadcrumbHref: string;
  images: string[];
  description: React.ReactNode;
  parentBreadcrumb?: { label: string; href: string };
}

export default function LabPage({ title, breadcrumbLabel, breadcrumbHref, images, description, parentBreadcrumb }: LabPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const parent = parentBreadcrumb ?? { label: "OJ Laboratorija", href: "/laboratorija" };

  return (
    <>
      <PageHero
        title={title}
        breadcrumb={[
          { label: "Početna", href: "/" },
          { label: parent.label, href: parent.href },
          { label: breadcrumbLabel, href: breadcrumbHref },
        ]}
      />
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {description}
          </div>
          <AutoSlideshow images={images} onImageClick={setLightboxIndex} />
        </div>
      </section>
      {lightboxIndex !== null && (
        <Lightbox images={images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  );
}
