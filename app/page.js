import { Megaphone, ArrowDown, ArrowUpRight, MessageCircle, MousePointerClick, Target, TrendingUp, FileText, Paintbrush, Rocket, ChevronDown, Gauge, Search, Smartphone } from 'lucide-react';
import Katalog from './components/Katalog';
import { templates, KATEGORI } from './components/templates-data';
import { LANJUT, GALERI_LAIN, PINTUWEB, PAKET, WA_DISPLAY, wa } from './components/pintuweb';

const WA = wa('Halo PintuWeb, saya tertarik template landing page. Boleh minta info?');
const N = templates.length;

const PRINSIP = [
  { icon: Target, title: 'Satu tujuan', desc: 'Tanpa distraksi — setiap elemen mengarah ke satu aksi utama.' },
  { icon: MousePointerClick, title: 'CTA yang berani', desc: 'Tombol jelas, copywriting tajam, posisi tepat di momen yakin.' },
  { icon: TrendingUp, title: 'Bukti yang bisa dicek', desc: 'Angka, demo yang bisa dicoba, dan studi kasus — bukan testimoni karangan atau logo pinjaman.' },
];

const PROSES = [
  { icon: FileText, no: '01', title: 'Kirim Brief', desc: 'Produk apa, target siapa, aksi apa yang kamu mau — cukup lewat WhatsApp.' },
  { icon: Paintbrush, no: '02', title: 'Kami Racik', desc: 'Copywriting + desain dari template pilihanmu, disesuaikan brand-mu.' },
  { icon: Rocket, no: '03', title: 'Tayang & Menjual', desc: `Halaman live dalam ${PAKET.waktu}, siap menampung klik dan konversi.` },
];

// Angka dari PAKET (PintuWeb packages.ts & PERF_TARGET); sisanya fitur paket, bukan klaim hasil.
const JAMINAN = [
  { icon: Gauge, v: PAKET.targetSkor, l: 'Target skor PageSpeed' },
  { icon: Search, v: 'SEO', l: 'SEO dasar terpasang' },
  { icon: Smartphone, v: 'Ponsel', l: 'Dirancang mobile-friendly' },
  { icon: TrendingUp, v: PAKET.waktuPendek, l: 'Kerja sampai tayang' },
];

const TANYA = [
  { q: 'Landing page-ku untuk produk yang beda — bisa disesuaikan?', a: 'Justru itu intinya. Template adalah kerangka teruji; teks, gambar, warna, dan alur CTA kami sesuaikan sepenuhnya dengan produk dan audiensmu.' },
  { q: 'Apakah termasuk copywriting?', a: 'Ya. Kami bantu menulis headline dan copy yang menjual berdasarkan brief-mu — kamu tinggal review dan setujui.' },
  { q: 'Bagaimana dengan formulir dan integrasi WhatsApp?', a: 'Semua CTA bisa diarahkan ke WhatsApp, formulir, e-commerce, atau link pembayaran. Kamu tentukan aksinya, kami pasang jalurnya.' },
  { q: 'Apakah halaman bisa dipakai untuk iklan (Meta/Google Ads)?', a: 'Sangat bisa — halaman ringan dan cepat justru menurunkan biaya iklan. Pixel/tag analytics juga bisa kami pasangkan.' },
  { q: 'Berapa biayanya?', a: `Paket Landing Page PintuWeb ${PAKET.mulai}–${PAKET.sampai} untuk satu halaman (desain, copy, tayang), selesai ${PAKET.waktu}. Konsultasi dulu gratis; harga final menyesuaikan kebutuhan.` },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      <span className={`grid shrink-0 place-items-center bg-oranyel text-white ${kecil ? 'h-8 w-8 border-2 border-kreml/30' : 'h-9 w-9 border-[3px] border-inkl shadow-[3px_3px_0_var(--color-inkl)]'}`}>
        <Megaphone size={kecil ? 14 : 16} aria-hidden="true" />
      </span>
      <span className="flex flex-col text-left leading-none">
        PintuWeb{' '}
        <span className={`mt-1 text-[10px] font-bold uppercase tracking-[0.18em] ${kecil ? 'text-oranyel' : 'text-oranyel-ink'}`}>Landing Page</span>
      </span>
    </>
  );
}

export default function PortalLanding() {
  return (
    <div id="top" className="diag min-h-screen">
      <a href="#konten" className="lewati">Lewati ke konten</a>
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-inkl text-xs text-kreml">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
          <li><a href={PINTUWEB} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Landing Page</li>
        </ol>
      </nav>

      <header className="sticky top-0 z-40 border-b-[3px] border-inkl bg-kreml/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-base font-extrabold sm:text-lg">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 font-display text-sm font-bold text-inkl/70 md:flex">
            <a href="#koleksi" className="transition hover:text-oranyel-ink">Etalase</a>
            <a href="#proses" className="transition hover:text-oranyel-ink">Proses</a>
            <a href="#tanya" className="transition hover:text-oranyel-ink">FAQ</a>
          </nav>
          {/* Lebar pasti = teks Syne 113,77 px + padding + garis tepi (diukur), satu baris: tombol tidak berubah saat font pengganti ditukar (CLS) */}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="w-[143.77px] shrink-0 whitespace-nowrap border-[3px] border-inkl bg-inkl px-3 py-2 font-display text-sm font-bold text-kreml transition hover:bg-oranyel-ink sm:w-[159.77px] sm:px-5">
            Pesan Landing
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero */}
        <section className="px-4 pb-12 pt-10 text-center sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-4xl">
            <span className="naik inline-block border-[3px] border-inkl bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_var(--color-inkl)]">
              {N} template · {KATEGORI.length} tujuan konversi
            </span>
            <h1 className="mt-6 font-display text-[2.35rem] font-extrabold leading-[1.02] min-[360px]:text-[2.6rem] sm:mt-7 sm:text-7xl">
              {/* Pemenggalan baris pasti (ponsel 3 baris, layar lebar 2) supaya pergantian font tidak menggeser halaman */}
              Halaman<br className="sm:hidden" /> yang<br /><span className="pengganti-rapat bg-oranyel px-3 text-white">menjual.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-mutedl sm:mt-6 sm:text-lg">
              Click-through, lead gen, sales, webinar, sampai company profile — tiap halaman dirancang untuk satu hal: membuat pengunjung bertindak.
            </p>
            <div className="naik naik-2 mt-8 flex flex-col items-center gap-4 sm:mt-9">
              <a href="#koleksi" className="inline-flex items-center gap-2 border-[3px] border-inkl bg-inkl px-8 py-4 font-display text-sm font-bold text-kreml shadow-[5px_5px_0_var(--color-oranyel)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-oranyel)]">
                Lihat Etalase <ArrowDown size={16} aria-hidden="true" />
              </a>
              {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
              <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-semibold text-inkl/80">
                <span>Mulai <strong className="font-display text-oranyel-ink">{PAKET.mulai}</strong></span>
                <span className="whitespace-nowrap"><span aria-hidden="true" className="mr-2 text-oranyel">→</span>tayang {PAKET.waktu}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Marquee tujuan: dekorasi */}
        <div className="marquee overflow-hidden border-y-[3px] border-inkl bg-inkl py-2.5 text-kreml sm:py-3" aria-hidden="true">
          <div className="flex w-max animate-marquee-x">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {['KLIK', 'LEADS', 'SALES', 'DAFTAR', 'BOOKING', 'SUBSCRIBE', 'KONVERSI'].map((k) => (
                  <span key={k} className="flex items-center gap-6 px-6 font-display text-lg font-bold sm:text-xl">
                    {k} <span className="text-oranyel">→</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Koleksi */}
        <section id="koleksi" aria-labelledby="judul-koleksi" className="scroll-mt-[62px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Katalog
              kepala={
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-oranyel-ink">Etalase</p>
                  <h2 id="judul-koleksi" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Pilih tujuanmu</h2>
                </div>
              }
            />
          </div>
        </section>

        {/* Prinsip */}
        <section aria-labelledby="judul-prinsip" className="border-t-[3px] border-inkl bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 id="judul-prinsip" className="font-display text-3xl font-extrabold sm:text-center md:text-4xl">Anatomi halaman yang menjual</h2>
            <ul className="mt-8 grid gap-3 sm:mt-12 sm:gap-6 md:grid-cols-3">
              {PRINSIP.map((p) => (
                <li key={p.title} className="flex items-start gap-4 border-[3px] border-inkl bg-kreml p-4 shadow-[4px_4px_0_var(--color-inkl)] sm:block sm:p-7 sm:shadow-[5px_5px_0_var(--color-inkl)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center border-[3px] border-inkl bg-oranyel text-white sm:h-12 sm:w-12"><p.icon size={21} aria-hidden="true" /></span>
                  <div className="sm:mt-4">
                    <h3 className="font-display text-base font-bold sm:text-lg">{p.title}</h3>
                    <p className="mt-1 text-sm text-mutedl sm:mt-2">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Proses — brief ke tayang */}
        <section id="proses" aria-labelledby="judul-proses" className="scroll-mt-[62px] border-t-[3px] border-inkl bg-kreml px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-oranyel-ink">Proses</p>
              <h2 id="judul-proses" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Dari brief ke <span className="bg-oranyel px-2 text-white">tayang</span></h2>
            </div>
            <ol className="mt-8 grid gap-3 sm:mt-12 sm:gap-6 md:grid-cols-3">
              {PROSES.map((p) => (
                <li key={p.no} className="relative flex items-start gap-4 border-[3px] border-inkl bg-white p-4 shadow-[4px_4px_0_var(--color-inkl)] sm:block sm:p-7 sm:shadow-[5px_5px_0_var(--color-inkl)]">
                  <span data-no={p.no} className="absolute right-5 top-4 hidden font-display text-5xl font-extrabold text-inkl/10 before:content-[attr(data-no)] sm:block" aria-hidden="true" />
                  <span className="grid h-11 w-11 shrink-0 place-items-center border-[3px] border-inkl bg-oranyel text-white sm:h-12 sm:w-12"><p.icon size={21} aria-hidden="true" /></span>
                  <div className="sm:mt-4">
                    <h3 className="font-display text-base font-bold sm:text-lg"><span className="text-oranyel-ink sm:hidden">{p.no} · </span>{p.title}</h3>
                    <p className="mt-1 text-sm text-mutedl sm:mt-2">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Jaminan strip */}
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-[3px] border-inkl bg-inkl p-5 text-kreml sm:mt-10 sm:grid-cols-4 sm:p-6">
              {JAMINAN.map((j) => (
                <li key={j.l} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center border-2 border-kreml/30 bg-oranyel text-white"><j.icon size={18} aria-hidden="true" /></span>
                  <div className="min-w-0">
                    <p className="whitespace-nowrap font-display text-lg font-extrabold leading-tight sm:text-xl">{j.v}</p>
                    <p className="text-xs leading-snug text-kreml/75">{j.l}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ: <details> bawaan, satu terbuka sekaligus (name) */}
        <section id="tanya" aria-labelledby="judul-tanya" className="scroll-mt-[62px] border-t-[3px] border-inkl bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="sm:text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-oranyel-ink">FAQ</p>
              <h2 id="judul-tanya" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Sebelum kamu <span className="bg-oranyel px-2 text-white">klik pesan</span></h2>
            </div>
            <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
              {TANYA.map((t, i) => (
                <details key={t.q} name="faq-landing" open={i === 0} className="tanya group border-[3px] border-inkl bg-kreml shadow-[4px_4px_0_var(--color-inkl)] open:shadow-[5px_5px_0_var(--color-oranyel)]">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-[15px] font-bold leading-snug sm:text-base">{t.q}</span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center border-2 border-inkl bg-white transition group-open:rotate-180 group-open:bg-oranyel group-open:text-white" aria-hidden="true">
                      <ChevronDown size={15} />
                    </span>
                  </summary>
                  <div className="border-t-[3px] border-inkl/15 px-5 py-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-mutedl">{t.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t-[3px] border-inkl bg-inkl px-4 py-16 text-center text-kreml sm:px-6">
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">Bisnismu butuh <span className="text-oranyel">halaman yang bekerja</span>.</h2>
            <p className="mt-4 text-kreml/75">Pilih template, kirim materi, dan halamanmu siap menjual dalam hitungan hari.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-oranyel px-9 py-4 font-display text-sm font-bold text-inkl transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={16} aria-hidden="true" /> Chat WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-kreml/10 bg-inkl px-4 pb-6 pt-10 text-kreml/70 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold text-kreml"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{N} landing page dengan satu tujuan: membuat pengunjungmu bertindak.</p>
          </div>
          <nav aria-labelledby="kaki-jelajahi" className="text-sm">
            <p id="kaki-jelajahi" className="font-display text-xs font-bold uppercase tracking-widest text-oranyel">Jelajahi</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#koleksi" className="inline-block py-1 transition hover:text-kreml">Etalase Template</a></li>
              <li><a href="#proses" className="inline-block py-1 transition hover:text-kreml">Proses Pengerjaan</a></li>
              <li><a href="#tanya" className="inline-block py-1 transition hover:text-kreml">FAQ</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-oranyel">Hubungi</p>
            <ul className="mt-3 space-y-1">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block py-1 transition hover:text-kreml">WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span></a></li>
              <li><a href={PINTUWEB} className="inline-block py-1 transition hover:text-kreml">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        {/* Lanjut di PintuWeb: harga, layanan, semua demo, dan galeri lain di situs utama */}
        <nav aria-labelledby="lanjut-pintuweb" className="mx-auto mt-10 max-w-7xl border-t border-kreml/10 pt-8 text-sm">
          <p id="lanjut-pintuweb" className="font-display text-xs font-bold uppercase tracking-widest text-oranyel">Lanjut di PintuWeb</p>
          <ul className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {LANJUT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-9 items-center gap-1.5 border-2 border-kreml/30 px-3 font-display text-xs font-bold text-kreml transition hover:border-oranyel hover:bg-oranyel hover:text-inkl">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-kreml/70">Galeri lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-kreml/25 underline-offset-4 transition hover:text-kreml hover:decoration-oranyel">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-7xl border-t border-kreml/10 pt-5 text-xs text-kreml/70 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Landing Page — dibuat untuk konversi.
        </p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
