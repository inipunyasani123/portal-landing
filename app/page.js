import { ArrowDown, ArrowUpRight, MessageCircle, MousePointerClick, Target, TrendingUp, FileText, Paintbrush, Rocket, ChevronDown, Gauge, Search, Smartphone } from 'lucide-react';
import Katalog from './components/Katalog';
import GaleriMenu from './components/GaleriMenu';
import BilahLengket from './components/BilahLengket';
import { templates, KATEGORI, slugOf, potretOf } from './components/templates-data';
import { LANJUT, ARTIKEL, GALERI_LAIN, PINTUWEB, PAKET, WA_DISPLAY, wa } from './components/pintuweb';

const WA = wa('Halo PintuWeb, saya tertarik landing page. Boleh minta info?');
const N = templates.length;

const PRINSIP = [
  { icon: Target, title: 'Satu tujuan', desc: 'Satu halaman, satu ajakan. Tidak ada yang mengganggu.' },
  { icon: MousePointerClick, title: 'Ajakan yang jelas', desc: 'Tombolnya mudah dilihat, kalimatnya singkat.' },
  { icon: TrendingUp, title: 'Bukti yang nyata', desc: 'Demo yang bisa dicoba, bukan testimoni karangan.' },
];

const PROSES = [
  { icon: FileText, no: '01', title: 'Ceritakan usahamu', desc: 'Kirim lewat WhatsApp: jual apa, untuk siapa.' },
  { icon: Paintbrush, no: '02', title: 'Kami buatkan', desc: 'Desain dan tulisan disesuaikan dengan usahamu.' },
  { icon: Rocket, no: '03', title: 'Tayang', desc: `Halamanmu bisa dibuka dalam ${PAKET.waktu}.` },
];

// Angka dari PAKET (PintuWeb packages.ts & PERF_TARGET); sisanya fitur paket, bukan klaim hasil.
const JAMINAN = [
  { icon: Gauge, v: PAKET.targetSkor, l: 'Target skor kecepatan' },
  { icon: Search, v: 'Google', l: 'Mudah ditemukan' },
  { icon: Smartphone, v: 'HP', l: 'Enak dibuka di HP' },
  { icon: TrendingUp, v: PAKET.waktuPendek, l: 'Kerja sampai tayang' },
];

const TANYA = [
  { q: 'Bisa disesuaikan untuk produkku?', a: 'Bisa. Teks, gambar, dan warna kami sesuaikan dengan usahamu.' },
  { q: 'Sudah termasuk tulisan isinya?', a: 'Ya. Kami bantu menulis judul dan isi halaman. Kamu tinggal periksa.' },
  { q: 'Bisa diarahkan ke WhatsApp?', a: 'Bisa. Tombolnya bisa menuju WhatsApp, formulir, toko online, atau link pembayaran.' },
  { q: 'Bisa dipakai untuk iklan?', a: 'Bisa. Halamannya ringan dan cepat dibuka, cocok untuk iklan Meta atau Google.' },
  { q: 'Berapa biayanya?', a: `Paket Landing Page ${PAKET.mulai}–${PAKET.sampai} untuk satu halaman, selesai ${PAKET.waktu}. Konsultasi awal gratis.` },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      {/* Logo pintu asli PintuWeb (367x512, tidak diubah). Di latar gelap diberi alas putih membulat seperti footer PintuWeb. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/landing-page/images/logo-pintuweb.png" alt="" width="367" height="512" className={`w-auto shrink-0 ${kecil ? 'h-8 rounded-lg bg-white p-1' : 'h-7'}`} />
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
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2">
            <li><a href={PINTUWEB} className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
            <li aria-hidden="true" className="opacity-60">/</li>
            <li aria-current="page">Landing Page</li>
          </ol>
          <GaleriMenu />
        </div>
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
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 whitespace-nowrap border-[3px] border-inkl bg-inkl px-3 py-2 font-display text-sm font-bold text-kreml transition hover:bg-oranyel-ink sm:px-5">
            Pesan landing<span className="hidden min-[400px]:inline"> page</span>
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero */}
        <section id="hero" className="px-4 pb-8 pt-6 text-center sm:px-6 sm:pb-12 sm:pt-16">
          <div className="mx-auto max-w-4xl">
            <span className="naik hidden border-[3px] border-inkl bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_var(--color-inkl)] sm:inline-block">
              {N} contoh · {KATEGORI.length} tujuan
            </span>
            <h1 className="font-display text-[2rem] font-extrabold leading-[1.05] sm:mt-7 sm:text-7xl sm:leading-[1.02]">
              {/* Pemenggalan baris pasti (ponsel 3 baris, layar lebar 2) supaya pergantian font tidak menggeser halaman */}
              Halaman yang<br /><span className="pengganti-rapat bg-oranyel px-3 text-white">menjual.</span>
            </h1>
            <p className="mx-auto mt-5 hidden max-w-xl text-base text-mutedl sm:mt-6 sm:block sm:text-lg">
              Dari jualan sampai profil usaha. Pilih contoh yang cocok, kami sesuaikan untukmu.
            </p>
            <div className="naik naik-2 mt-4 flex flex-col items-center gap-3 sm:mt-9 sm:gap-4">
              <a href="#koleksi" className="inline-flex items-center gap-2 border-[3px] border-inkl bg-inkl px-8 py-3 font-display text-sm font-bold text-kreml shadow-[5px_5px_0_var(--color-oranyel)] sm:py-4 transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-oranyel)]">
                Lihat Etalase <ArrowDown size={16} aria-hidden="true" />
              </a>
              {/* Ringkasan paket: angka dari PAKET (PintuWeb packages.ts) */}
              <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-semibold text-inkl/80">
                <span>Mulai <strong className="font-display text-oranyel-ink">{PAKET.mulai}</strong></span>
                <span className="whitespace-nowrap"><span aria-hidden="true" className="mr-2 text-oranyel">→</span>tayang {PAKET.waktu}</span>
              </p>
            </div>
          </div>
          {/* Ponsel: strip demo yang bisa digeser, tepat di bawah tombol utama; menaut ke #slug kartunya */}
          <nav aria-label="Pintasan ke demo" className="mt-5 sm:hidden">
            <ul className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:none]">
              {templates.map((t) => (
                <li key={t.name} className="w-[7.25rem] shrink-0 snap-start">
                  <a href={`#${slugOf(t)}`} className="block text-left">
                    <span className="papan block aspect-[3/4] overflow-hidden !shadow-[3px_3px_0_var(--color-inkl)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={potretOf(t).replace(/\.webp$/, '-320.webp')} alt="" width="320" height="493" loading="lazy" className="h-full w-full object-cover object-top" />
                    </span>
                    <span className="mt-1.5 block truncate font-display text-xs font-bold">{t.name.replace(' (konsep redesain)', '')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Marquee tujuan: dekorasi */}
        <div className="marquee overflow-hidden border-y-[3px] border-inkl bg-inkl py-2.5 text-kreml sm:py-3" aria-hidden="true">
          <div className="flex w-max animate-marquee-x">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {['KLIK', 'KONTAK', 'JUALAN', 'DAFTAR', 'BOOKING', 'LANGGANAN', 'PESAN'].map((k) => (
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
            <h2 id="judul-prinsip" className="font-display text-3xl font-extrabold sm:text-center md:text-4xl">Ciri halaman yang menjual</h2>
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
              <h2 id="judul-proses" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Dari cerita ke <span className="bg-oranyel px-2 text-white">tayang</span></h2>
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
              <h2 id="judul-tanya" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Pertanyaan <span className="bg-oranyel px-2 text-white">umum</span></h2>
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
            <p className="mt-4 text-kreml/75">Pilih contoh, kirim bahannya, halamanmu tayang dalam hitungan hari.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-oranyel px-9 py-4 font-display text-sm font-bold text-inkl transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={16} aria-hidden="true" /> Chat WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer id="kaki" className="border-t border-kreml/10 bg-inkl px-4 pb-6 pt-10 text-kreml/70 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold text-kreml"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{N} contoh landing page. Pilih satu, kami sesuaikan untukmu.</p>
          </div>
          <nav aria-labelledby="kaki-jelajahi" className="text-sm">
            <p id="kaki-jelajahi" className="font-display text-xs font-bold uppercase tracking-widest text-oranyel">Jelajahi</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#koleksi" className="inline-block py-1 transition hover:text-kreml">Etalase Contoh</a></li>
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
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-kreml/70">Baca juga</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {ARTIKEL.map((a) => (
              <li key={a.href}>
                <a href={a.href} className="inline-block py-1 underline decoration-kreml/25 underline-offset-4 transition hover:text-kreml hover:decoration-oranyel">{a.label}</a>
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
          © {new Date().getFullYear()} PintuWeb · Galeri Landing Page
        </p>
      </footer>
      <BilahLengket waHref={WA} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
