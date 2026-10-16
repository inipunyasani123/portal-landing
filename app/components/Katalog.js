'use client';
import { useState } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { templates, slugOf, KATEGORI } from './templates-data';
import { wa } from './pintuweb';

const PILIHAN = ['Semua', ...KATEGORI];
const BRIEF = wa('Halo PintuWeb, saya mau landing page untuk tujuan yang belum ada di etalase. Ini brief singkatnya:');

/** Ganti saringan dengan View Transition bila peramban mendukung dan pengguna tidak meminta gerak minimal. */
function useSaringan(awal) {
  const [nilai, setNilai] = useState(awal);
  const ganti = (v) => {
    if (v === nilai) return;
    const diam = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || diam) return setNilai(v);
    document.startViewTransition(() => flushSync(() => setNilai(v)));
  };
  return [nilai, ganti];
}

export default function Katalog({ kepala }) {
  const [kat, setKat] = useSaringan('Semua');
  const list = kat === 'Semua' ? templates : templates.filter((t) => t.kategori === kat);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-5">
        {kepala}
        {/* Ponsel: satu baris chip yang bisa digeser (tidak menggeser halaman); layar lebar: membungkus */}
        <div role="group" aria-label="Saring menurut tujuan" className="-mx-4 flex w-[calc(100%+2rem)] min-w-0 gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:px-0">
          {PILIHAN.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKat(k)}
              aria-pressed={kat === k}
              className={`min-h-9 shrink-0 border-2 border-inkl px-3.5 text-xs font-bold transition ${kat === k ? 'bg-oranyel-ink text-white shadow-[3px_3px_0_var(--color-inkl)]' : 'bg-white hover:bg-inkl hover:text-kreml'}`}
            >
              {k}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{list.length} landing page ditampilkan</p>
      </div>

      {/* Ponsel: baris ringkas (gambar kiri, teks kanan); sm ke atas: papan reklame berjajar */}
      <ul className="mt-8 grid grid-cols-1 gap-y-6 sm:mt-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
        {list.map((t) => {
          const slug = slugOf(t);
          return (
            <li key={t.name} className="group relative grid grid-cols-[42%_1fr] items-start gap-4 sm:flex sm:flex-col sm:items-stretch sm:gap-0" style={{ viewTransitionName: `lp-${slug}` }}>
              <div className="papan overflow-hidden">
                <div className="hidden items-center justify-between border-b-[3px] border-inkl bg-kreml px-3 py-1.5 sm:flex">
                  <span className="font-display text-[11px] font-bold uppercase tracking-wide">{t.kategori}</span>
                  <span className="flex gap-1" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-oranyel" /><span className="h-2 w-2 rounded-full bg-inkl/25" /><span className="h-2 w-2 rounded-full bg-inkl/25" /></span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                  <Image src={t.image} alt={`Beranda ${t.name}`} fill sizes="(max-width: 639px) 35vw, (max-width: 1023px) 46vw, 400px" className="object-cover object-left-top transition duration-500 group-hover:scale-[1.03] sm:object-top" />
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col sm:mt-4 sm:px-1">
                <p className="font-display text-[10px] font-bold uppercase tracking-wide text-oranyel-ink sm:hidden">{t.kategori}</p>
                <h3 className="font-display text-lg font-bold leading-tight sm:text-xl">{t.name}</h3>
                <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-mutedl sm:line-clamp-none sm:text-sm sm:leading-relaxed">{t.description}</p>
                <p className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px] font-bold sm:mt-3 sm:gap-2 sm:text-xs">
                  {t.terjual > 0 && <span className="border-2 border-inkl bg-oranyel px-1.5 py-0.5 text-inkl sm:px-2">{t.terjual} terjual</span>}
                  <span className="border-2 border-inkl bg-white px-1.5 py-0.5 sm:px-2">{t.halaman} halaman</span>
                  <span className="hidden border-2 border-inkl bg-kreml px-2 py-0.5 sm:inline">{t.sorot}</span>
                </p>
                <div className="meter mt-3 hidden w-2/3 opacity-70 sm:block" aria-hidden="true" />
                {/* Satu tautan per kartu; ::after membentang menutupi seluruh kartu */}
                <a href={t.url} target="_blank" rel="noopener noreferrer" className="tautan-kartu mt-auto inline-flex min-h-6 items-center gap-1 self-start pt-2 font-display text-sm font-bold text-inkl underline decoration-oranyel decoration-2 underline-offset-4 after:absolute after:inset-0 group-hover:text-oranyel-ink sm:pt-4">
                  Lihat demo<span className="sr-only"> {t.name} (tab baru)</span> <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </li>
          );
        })}
        {/* Papan kosong "disewakan": tujuan yang belum ada di etalase */}
        <li className="sewa relative flex flex-col justify-between gap-4 border-[3px] border-dashed border-inkl p-5 sm:min-h-[18rem] sm:p-7">
          <div>
            <p className="inline-block border-2 border-inkl bg-kreml px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-widest">Papan disewakan</p>
            <h3 className="mt-3 font-display text-xl font-extrabold leading-tight sm:text-2xl">Tujuanmu belum ada di etalase?</h3>
            <p className="mt-2 text-sm leading-relaxed text-inkl/80">Kirim brief singkat: produk, target, dan satu aksi yang kamu mau. Kami racik halamannya dari nol.</p>
          </div>
          <a href={BRIEF} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 self-start border-[3px] border-inkl bg-inkl px-5 font-display text-sm font-bold text-kreml shadow-[4px_4px_0_var(--color-oranyel)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-oranyel)]">
            <MessageCircle size={16} aria-hidden="true" /> Kirim brief via WhatsApp
          </a>
        </li>
      </ul>
    </>
  );
}
