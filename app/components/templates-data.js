// 17 landing page di koleksi. Deskripsi, jumlah halaman, dan fitur mengikuti isi tiap template (1 Okt 2026);
// tangkapan layar diambil dari demo live.
// lencana: false = jumlah terjual tidak ditampilkan (Sribu: konsep redesain tidak resmi untuk merek nyata); angkanya tetap.
export const templates = [
  { name: 'Nimbus', kategori: 'Click-Through', terjual: 0, description: 'Cloud lokal dengan halaman status 90 hari dan laporan insiden terbuka.', halaman: 4, sorot: 'Kalkulator harga', image: '/landing-page/images/landing/nimbus.webp', url: 'https://landing-nimbus.pintuweb.id' },
  { name: 'EduPlay', kategori: 'Click-Through', terjual: 0, description: 'Aplikasi matematika SD kelas 1–3, sepuluh menit sehari.', halaman: 3, sorot: 'Dua permainan bisa dimainkan', image: '/landing-page/images/landing/eduplay.webp', url: 'https://landing-eduplay.pintuweb.id' },
  { name: 'Cissy Coffee', kategori: 'Profil', terjual: 6, description: 'Kedai kopi di Malang dengan papan menu kapur yang ditulis ulang tiap pagi.', halaman: 5, sorot: 'Papan menu & kopi untuk acara', image: '/landing-page/images/landing/cissycoffee.webp', url: 'https://landing-cissycoffee.pintuweb.id' },
  { name: 'SanzyHub', kategori: 'Platform', terjual: 2, description: 'Toko template landing page dengan dasbor katalog yang dihitung dari data.', halaman: 3, sorot: 'Katalog bersaring & lisensi', image: '/landing-page/images/landing/sanzyhub.webp', url: 'https://landing-sanzyhub.pintuweb.id' },
  { name: 'Tasty Corner', kategori: 'Lead Gen', terjual: 1, description: 'Struk Mingguan: satu menu F&B dibedah sampai rupiah terakhir.', halaman: 4, sorot: 'Kalkulator food cost', image: '/landing-page/images/landing/tastycorner.webp', url: 'https://landing-tastycorner.pintuweb.id' },
  { name: 'Rasa Nusantara', kategori: 'Lead Gen', terjual: 1, description: 'Kartu resep terstandar untuk dapur restoran — gramasi, titik kritis, HPP.', halaman: 3, sorot: 'Penskala porsi 1–200', image: '/landing-page/images/landing/rasanusantara.webp', url: 'https://landing-rasanusantara.pintuweb.id' },
  { name: 'CitaRasa Digital', kategori: 'Lead Gen', terjual: 2, description: 'Memindahkan rumah makan legendaris ke ponsel pelanggan, dengan studi kasus.', halaman: 3, sorot: 'Tiga studi kasus', image: '/landing-page/images/landing/citarasa.webp', url: 'https://landing-citarasa.pintuweb.id' },
  { name: 'SkyWings', kategori: 'Produk', terjual: 0, description: 'Maskapai antarkota dengan jadwal jam setempat dan papan keberangkatan.', halaman: 7, sorot: 'Pencarian boarding pass', image: '/landing-page/images/landing/skywings.webp', url: 'https://landing-skywings.pintuweb.id' },
  { name: 'Bribu', kategori: 'Platform', terjual: 3, description: 'Papan brief desain: tiga desainer dibayar untuk sketsa, klien memilih satu.', halaman: 4, sorot: 'Pratinjau kartu brief', image: '/landing-page/images/landing/bribu.webp', url: 'https://landing-bribu.pintuweb.id' },
  { name: 'LuxeElectro', kategori: 'Sales', terjual: 3, description: 'Toko audio dengan lembar spesifikasi lengkap dan uji dengar 14 hari.', halaman: 3, sorot: 'Bandingkan kurva frekuensi', image: '/landing-page/images/landing/luxeelectro.webp', url: 'https://landing-luxeelectro.pintuweb.id' },
  { name: 'Modewear', kategori: 'Sales', terjual: 1, description: 'Pra-pesan kapsul pakaian kerja yang dijahit setelah dipesan.', halaman: 4, sorot: 'Hitung mundur & pencari ukuran', image: '/landing-page/images/landing/modewear.webp', url: 'https://landing-modewear.pintuweb.id' },
  { name: 'Woodora', kategori: 'Sales', terjual: 0, description: 'Furnitur kayu solid sesuai ukuran, lengkap dengan gambar kerja.', halaman: 4, sorot: 'Pratinjau ukuran langsung', image: '/landing-page/images/landing/woodora.webp', url: 'https://landing-woodora.pintuweb.id' },
  { name: 'Zychrome', kategori: 'Webinar', terjual: 0, description: 'Webinar 95 menit dengan enam titik interaksi dan papan hasil.', halaman: 3, sorot: 'Polling & kuis bisa dicoba', image: '/landing-page/images/landing/zychrome.webp', url: 'https://landing-zychrome.pintuweb.id' },
  { name: 'Lumicast', kategori: 'Webinar', terjual: 0, description: 'Siaran pelatihan untuk pengurus organisasi dengan rundown tercetak.', halaman: 3, sorot: 'Cek perangkat interaktif', image: '/landing-page/images/landing/lumicast.webp', url: 'https://landing-lumicast.pintuweb.id' },
  { name: 'NextTalks', kategori: 'Webinar', terjual: 1, description: 'Empat pembicara, satu meja, tiap Kamis kedua — plus arsip transkrip.', halaman: 5, sorot: 'Arsip bisa dicari', image: '/landing-page/images/landing/nexttalks.webp', url: 'https://landing-nexttalks.pintuweb.id' },
  { name: 'Elevinar', kategori: 'Webinar', terjual: 7, description: 'Webinar yang dijalankan seperti pertunjukan, dengan denah kursi.', halaman: 3, sorot: 'Buku acara siap cetak', image: '/landing-page/images/landing/elevinar.webp', url: 'https://landing-elevinar.pintuweb.id' },
  { name: 'Sribu (konsep redesain)', kategori: 'Platform', terjual: 4, lencana: false, description: 'Konsep redesain tidak resmi: kontes desain sebagai sayembara, dengan catatan redesain.', halaman: 2, sorot: 'Simulasi “Coba jadi juri”', image: '/landing-page/images/landing/sribu.webp', url: 'https://landing-sribu.pintuweb.id' },
];

/** "https://landing-nimbus.pintuweb.id" -> "nimbus" (sama dengan slug demo di PintuWeb/app/lib/demos.ts). */
export const slugOf = (t) => new URL(t.url).hostname.split('.')[0].replace(/^landing-/, '');

/**
 * Jenis usaha/pengguna demo, untuk saringan "untuk usaha apa". Setiap slug muncul tepat sekali.
 * Dicocokkan dengan isi demo yang sebenarnya (28–30 Okt 2026), bukan dengan tujuan konversinya.
 */
export const USAHA = [
  { nama: 'Kuliner', slug: ['cissycoffee', 'tastycorner', 'rasanusantara', 'citarasa'] },
  { nama: 'Toko & Produk', slug: ['luxeelectro', 'modewear', 'woodora'] },
  { nama: 'Jasa & Layanan', slug: ['bribu', 'sribu', 'skywings'] },
  { nama: 'Edukasi & Acara', slug: ['eduplay', 'zychrome', 'lumicast', 'nexttalks', 'elevinar'] },
  { nama: 'Teknologi', slug: ['nimbus', 'sanzyhub'] },
];
export const usahaOf = (t) => USAHA.find((u) => u.slug.includes(slugOf(t)))?.nama;

/** Potret ponsel (390x844 @2x, bagian atas halaman): <slug>-m.webp + varian -m-320/-480/-640. */
export const potretOf = (t) => t.image.replace(/\.webp$/, '-m.webp');
export const potretSrcSet = (t) => {
  const b = potretOf(t).replace(/\.webp$/, '');
  return `${b}-320.webp 320w, ${b}-480.webp 480w, ${b}-640.webp 640w, ${b}.webp 780w`;
};

/** Tujuan konversi, urut seperti di saringan. */
export const KATEGORI = ['Click-Through', 'Lead Gen', 'Sales', 'Webinar', 'Produk', 'Platform', 'Profil'];
