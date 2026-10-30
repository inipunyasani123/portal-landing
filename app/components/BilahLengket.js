'use client';
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * Bilah aksi lengket di bawah layar ponsel (< 768 px). Muncul setelah hero (#hero) lewat dan
 * tersembunyi saat footer (#kaki) terlihat. Dua tombol: gulir ke galeri, dan pesan via WhatsApp.
 */
export default function BilahLengket({ waHref }) {
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const kaki = document.getElementById('kaki');
    if (!hero || !kaki) return;
    let heroLewat = false, kakiTampak = false;
    const perbarui = () => setTampil(heroLewat && !kakiTampak);
    const io = new IntersectionObserver((es) => {
      for (const e of es) {
        if (e.target === hero) heroLewat = !e.isIntersecting && e.boundingClientRect.bottom < 0;
        else kakiTampak = e.isIntersecting;
      }
      perbarui();
    });
    io.observe(hero); io.observe(kaki);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t-[3px] border-inkl bg-kreml px-3 pt-2.5 transition-transform duration-300 md:hidden ${tampil ? 'translate-y-0' : 'pointer-events-none translate-y-full'}`}
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
      inert={!tampil}
    >
      <div className="mx-auto flex max-w-md gap-2.5">
        <a href="#koleksi" className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap border-[3px] border-inkl bg-white px-4 font-display text-sm font-bold">Lihat demo</a>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap border-[3px] border-inkl bg-oranyel px-2 font-display text-[13px] font-bold text-inkl shadow-[3px_3px_0_var(--color-inkl)]">
          <MessageCircle size={16} aria-hidden="true" /> Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
}
