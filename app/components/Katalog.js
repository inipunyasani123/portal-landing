'use client';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import { ArrowUpRight, MessageCircle, UtensilsCrossed, ShoppingBag, Briefcase, GraduationCap, Cpu } from 'lucide-react';
import { templates, slugOf, KATEGORI, USAHA, usahaOf, potretOf, potretSrcSet } from './templates-data';
import { wa, waMirip, PAKET } from './pintuweb';

const BRIEF = wa('Halo PintuWeb, saya mau landing page untuk tujuan yang belum ada di etalase. Ini ceritanya:');
const IKON_USAHA = { Kuliner: UtensilsCrossed, 'Toko & Produk': ShoppingBag, 'Jasa & Layanan': Briefcase, 'Edukasi & Acara': GraduationCap, Teknologi: Cpu };
const SLUGS = new Set(templates.map(slugOf));

/** Ganti saringan dengan View Transition bila peramban mendukung dan pengguna tidak meminta gerak minimal. */
function ubah(set, v) {
  const diam = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || diam) return set(v);
  document.startViewTransition(() => flushSync(() => set(v)));
}

function Chip({ aktif, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={aktif}
      className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 border-2 border-inkl px-3.5 text-xs font-bold transition ${aktif ? 'bg-oranyel-ink text-white shadow-[3px_3px_0_var(--color-inkl)]' : 'bg-white hover:bg-inkl hover:text-kreml'}`}
    >
      {children}
    </button>
  );
}

const BARIS = 'flex min-w-0 gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] -mx-4 w-[calc(100%+2rem)] sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:px-0';

export default function Katalog({ kepala }) {
  const [kat, setKat] = useState('Semua');
  const [usaha, setUsaha] = useState('Semua');
  const [sorot, setSorot] = useState(null);
  const list = templates.filter((t) => (kat === 'Semua' || t.kategori === kat) && (usaha === 'Semua' || usahaOf(t) === usaha));

  // Tautan langsung #slug: setel saringan ke "Semua" bila kartunya tersembunyi, gulir ke kartu, sorot ±2 detik.
  useEffect(() => {
    let timer;
    const buka = (slug) => {
      if (!SLUGS.has(slug)) return;
      setKat('Semua'); setUsaha('Semua');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const el = document.getElementById(slug);
        if (!el) return;
        el.scrollIntoView({ block: 'start' });
        setSorot(slug);
        clearTimeout(timer);
        timer = setTimeout(() => setSorot(null), 2200);
      }));
    };
    const dariHash = () => buka(decodeURIComponent(location.hash.slice(1)));
    const onKlik = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      const slug = a && a.getAttribute('href').slice(1);
      if (slug && SLUGS.has(slug) && location.hash === `#${slug}`) dariHash(); // hash sama: hashchange tidak terpicu
    };
    dariHash();
    window.addEventListener('hashchange', dariHash);
    document.addEventListener('click', onKlik);
    return () => { clearTimeout(timer); window.removeEventListener('hashchange', dariHash); document.removeEventListener('click', onKlik); };
  }, []);

  return (
    <>
      <div>{kepala}</div>
      {/* Dua baris chip (tujuan dan jenis usaha). Ponsel: satu baris yang bisa digeser; layar lebar: membungkus */}
      <div className="mt-6 space-y-3">
        <div className="sm:flex sm:items-center sm:gap-3">
          <p id="lab-tujuan" className="px-0 pb-1 font-display text-[11px] font-bold uppercase tracking-widest text-mutedl sm:w-28 sm:pb-0">Tujuan</p>
          <div role="group" aria-labelledby="lab-tujuan" className={BARIS}>
            {['Semua', ...KATEGORI].map((k) => <Chip key={k} aktif={kat === k} onClick={() => ubah(setKat, k)}>{k}</Chip>)}
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:gap-3">
          <p id="lab-usaha" className="px-0 pb-1 font-display text-[11px] font-bold uppercase tracking-widest text-mutedl sm:w-28 sm:pb-0">Untuk usaha</p>
          <div role="group" aria-labelledby="lab-usaha" className={BARIS}>
            <Chip aktif={usaha === 'Semua'} onClick={() => ubah(setUsaha, 'Semua')}>Semua</Chip>
            {USAHA.map((u) => { const Ikon = IKON_USAHA[u.nama]; return <Chip key={u.nama} aktif={usaha === u.nama} onClick={() => ubah(setUsaha, u.nama)}><Ikon size={14} aria-hidden="true" />{u.nama}</Chip>; })}
          </div>
        </div>
        <p className="sr-only" role="status" aria-live="polite">{list.length} landing page ditampilkan</p>
      </div>

      {/* Ponsel (< 768): baris ringkas, gambar potret ponsel di kiri; md ke atas: papan reklame berjajar */}
      <ul className="mt-8 grid grid-cols-1 gap-y-6 md:mt-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
        {list.map((t) => {
          const slug = slugOf(t);
          return (
            <li key={slug} id={slug} data-sorot={sorot === slug} className="kartu group relative grid scroll-mt-24 grid-cols-[40%_1fr] items-start gap-4 md:flex md:flex-col md:items-stretch md:gap-0" style={{ viewTransitionName: `lp-${slug}` }}>
              <span className="stiker" aria-hidden="true">Pilihanmu</span>
              <div className="papan overflow-hidden">
                <div className="hidden items-center justify-between border-b-[3px] border-inkl bg-kreml px-3 py-1.5 md:flex">
                  <span className="font-display text-[11px] font-bold uppercase tracking-wide">{t.kategori}</span>
                  <span className="flex gap-1" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-oranyel" /><span className="h-2 w-2 rounded-full bg-inkl/25" /><span className="h-2 w-2 rounded-full bg-inkl/25" /></span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden md:aspect-[16/10]">
                  <picture>
                    <source media="(max-width: 767px)" srcSet={potretSrcSet(t)} sizes="40vw" />
                    <Image src={t.image} alt={`Beranda ${t.name}`} fill sizes="(max-width: 1023px) 46vw, 400px" className="object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                  </picture>
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col md:mt-4 md:px-1">
                <p className="font-display text-[10px] font-bold uppercase tracking-wide text-oranyel-ink md:hidden">{t.kategori}</p>
                <h3 className="font-display text-lg font-bold leading-tight md:text-xl">{t.name}</h3>
                <p className="mt-1 line-clamp-3 text-[13px] leading-snug text-mutedl md:line-clamp-none md:text-sm md:leading-relaxed">{t.description}</p>
                <p className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px] font-bold md:mt-3 md:gap-2 md:text-xs">
                  {t.terjual > 0 && t.lencana !== false && <span className="border-2 border-inkl bg-oranyel px-1.5 py-0.5 text-inkl md:px-2">{t.terjual} terjual</span>}
                  <span className="border-2 border-inkl bg-white px-1.5 py-0.5 md:px-2">{t.halaman} halaman</span>
                  <span className="hidden border-2 border-inkl bg-kreml px-2 py-0.5 md:inline">{t.sorot}</span>
                </p>
                <div className="meter mt-3 hidden w-2/3 opacity-70 md:block" aria-hidden="true" />
                {/* Satu tautan per kartu; ::after membentang menutupi seluruh kartu. Tombol WhatsApp di atasnya (z-10) */}
                <a href={t.url} target="_blank" rel="noopener noreferrer" className="tautan-kartu mt-auto inline-flex min-h-6 items-center gap-1 self-start pt-2 font-display text-sm font-bold text-inkl underline decoration-oranyel decoration-2 underline-offset-4 after:absolute after:inset-0 group-hover:text-oranyel-ink md:pt-4">
                  Lihat demo<span className="sr-only"> {t.name} (tab baru)</span> <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <div className="relative z-10 mt-2.5 flex flex-col items-start gap-1">
                  <a href={waMirip(t.name, t.url)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 border-2 border-inkl bg-oranyel px-3 font-display text-xs font-bold text-inkl transition hover:bg-inkl hover:text-kreml">
                    <MessageCircle size={14} aria-hidden="true" /> Pesan yang mirip<span className="sr-only"> dengan {t.name}</span>
                  </a>
                  <p className="text-[11px] font-semibold text-mutedl">mulai {PAKET.mulai} · {PAKET.waktu}</p>
                </div>
              </div>
            </li>
          );
        })}
        {list.length === 0 && (
          <li className="border-[3px] border-dashed border-inkl bg-white p-5 text-sm md:col-span-2 lg:col-span-3">
            Belum ada demo untuk kombinasi ini.{' '}
            <button type="button" onClick={() => { setKat('Semua'); setUsaha('Semua'); }} className="font-bold underline decoration-oranyel decoration-2 underline-offset-4">Tampilkan semua</button>
          </li>
        )}
        {/* Papan kosong "disewakan": tujuan yang belum ada di etalase */}
        <li className="sewa relative flex flex-col justify-between gap-4 border-[3px] border-dashed border-inkl p-5 md:min-h-[18rem] md:p-7">
          <div>
            <p className="inline-block border-2 border-inkl bg-kreml px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-widest">Papan disewakan</p>
            <h3 className="mt-3 font-display text-xl font-extrabold leading-tight sm:text-2xl">Tujuanmu belum ada?</h3>
            <p className="mt-2 text-sm leading-relaxed text-inkl/80">Ceritakan singkat usahamu dan maunya apa. Kami buatkan dari nol.</p>
          </div>
          <a href={BRIEF} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 self-start border-[3px] border-inkl bg-inkl px-5 font-display text-sm font-bold text-kreml shadow-[4px_4px_0_var(--color-oranyel)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-oranyel)]">
            <MessageCircle size={16} aria-hidden="true" /> Cerita via WhatsApp
          </a>
        </li>
      </ul>
    </>
  );
}
