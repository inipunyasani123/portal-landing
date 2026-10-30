'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GALERI_LAIN, PINTUWEB } from './pintuweb';

/** Tombol "Galeri lain" di bilah jejak: membuka daftar 10 galeri PintuWeb lain (tautan absolut, bukan next/link). */
export default function GaleriMenu() {
  const [buka, setBuka] = useState(false);
  const wadah = useRef(null);
  const tombol = useRef(null);

  useEffect(() => {
    if (!buka) return;
    const tutup = (kembali) => { setBuka(false); if (kembali) tombol.current?.focus(); };
    const onKey = (e) => { if (e.key === 'Escape') tutup(true); };
    const onKlik = (e) => { if (!wadah.current?.contains(e.target)) tutup(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onKlik);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onKlik); };
  }, [buka]);

  return (
    <div
      ref={wadah}
      className="relative ms-auto"
      onBlur={(e) => { if (buka && !e.currentTarget.contains(e.relatedTarget)) setBuka(false); }}
    >
      <button
        ref={tombol}
        type="button"
        aria-expanded={buka}
        aria-controls="daftar-galeri"
        onClick={() => setBuka((b) => !b)}
        className="inline-flex min-h-8 items-center gap-1 border border-kreml/40 px-2.5 font-display text-xs font-bold text-kreml transition hover:bg-kreml hover:text-inkl"
      >
        Galeri lain <ChevronDown size={14} aria-hidden="true" className={`transition ${buka ? 'rotate-180' : ''}`} />
      </button>
      {buka && (
        <ul id="daftar-galeri" aria-label="Galeri lain di PintuWeb" className="absolute end-0 top-full z-50 mt-1 w-64 max-w-[calc(100vw-2rem)] border-[3px] border-inkl bg-kreml p-1.5 text-inkl shadow-[5px_5px_0_var(--color-oranyel)]">
          {GALERI_LAIN.map((g) => (
            <li key={g.path}>
              <a href={`${PINTUWEB}/${g.path}`} className="block px-3 py-2 font-display text-sm font-bold transition hover:bg-inkl hover:text-kreml">{g.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
