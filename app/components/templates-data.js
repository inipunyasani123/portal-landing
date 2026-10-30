// 17 landing page di koleksi. Deskripsi, jumlah halaman, dan fitur mengikuti isi tiap template (1 Okt 2026);
// tangkapan layar diambil dari demo live.
// lencana: false = jumlah terjual tidak ditampilkan (Sribu: konsep redesain tidak resmi untuk merek nyata); angkanya tetap.
export const templates = [
  { name: 'Nimbus', kategori: 'Layanan online', terjual: 0, description: 'Layanan cloud lokal. Coba kalkulator harganya.', halaman: 4, sorot: 'Kalkulator harga', image: '/landing-page/images/landing/nimbus.webp', url: 'https://landing-nimbus.pintuweb.id' },
  { name: 'EduPlay', kategori: 'Layanan online', terjual: 0, description: 'Aplikasi belajar matematika anak SD. Coba dua permainannya.', halaman: 3, sorot: 'Dua permainan bisa dimainkan', image: '/landing-page/images/landing/eduplay.webp', url: 'https://landing-eduplay.pintuweb.id' },
  { name: 'Cissy Coffee', kategori: 'Profil usaha', terjual: 6, description: 'Kedai kopi di Malang. Lihat papan menu dan paket kopi untuk acara.', halaman: 5, sorot: 'Papan menu & kopi untuk acara', image: '/landing-page/images/landing/cissycoffee.webp', url: 'https://landing-cissycoffee.pintuweb.id' },
  { name: 'SanzyHub', kategori: 'Pasar online', terjual: 2, description: 'Toko online desain landing page. Coba cari dan saring katalognya.', halaman: 3, sorot: 'Katalog bisa disaring', image: '/landing-page/images/landing/sanzyhub.webp', url: 'https://landing-sanzyhub.pintuweb.id' },
  { name: 'Tasty Corner', kategori: 'Kumpulkan kontak', terjual: 1, description: 'Halaman untuk pebisnis kuliner. Coba hitung modal satu menu.', halaman: 4, sorot: 'Hitung modal makanan', image: '/landing-page/images/landing/tastycorner.webp', url: 'https://landing-tastycorner.pintuweb.id' },
  { name: 'Rasa Nusantara', kategori: 'Kumpulkan kontak', terjual: 1, description: 'Kartu resep untuk dapur restoran. Coba ubah jumlah porsinya.', halaman: 3, sorot: 'Penskala porsi 1–200', image: '/landing-page/images/landing/rasanusantara.webp', url: 'https://landing-rasanusantara.pintuweb.id' },
  { name: 'CitaRasa Digital', kategori: 'Kumpulkan kontak', terjual: 2, description: 'Jasa memindahkan rumah makan ke ponsel pelanggan. Lihat tiga contoh hasil.', halaman: 3, sorot: 'Tiga contoh hasil', image: '/landing-page/images/landing/citarasa.webp', url: 'https://landing-citarasa.pintuweb.id' },
  { name: 'SkyWings', kategori: 'Layanan online', terjual: 0, description: 'Maskapai antarkota. Coba cari tiket dan jadwal berangkat.', halaman: 7, sorot: 'Cari boarding pass', image: '/landing-page/images/landing/skywings.webp', url: 'https://landing-skywings.pintuweb.id' },
  { name: 'Bribu', kategori: 'Pasar online', terjual: 3, description: 'Sayembara desain online. Tiga desainer kirim sketsa, klien pilih satu.', halaman: 4, sorot: 'Lihat kartu permintaan desain', image: '/landing-page/images/landing/bribu.webp', url: 'https://landing-bribu.pintuweb.id' },
  { name: 'LuxeElectro', kategori: 'Jualan', terjual: 3, description: 'Toko perangkat audio. Coba bandingkan suara dua produk.', halaman: 3, sorot: 'Bandingkan suara', image: '/landing-page/images/landing/luxeelectro.webp', url: 'https://landing-luxeelectro.pintuweb.id' },
  { name: 'Modewear', kategori: 'Jualan', terjual: 1, description: 'Toko baju kerja yang dijahit setelah dipesan. Coba cari ukuranmu.', halaman: 4, sorot: 'Hitung mundur & cari ukuran', image: '/landing-page/images/landing/modewear.webp', url: 'https://landing-modewear.pintuweb.id' },
  { name: 'Woodora', kategori: 'Jualan', terjual: 0, description: 'Furnitur kayu sesuai ukuran. Coba atur ukurannya dan lihat hasilnya.', halaman: 4, sorot: 'Lihat ukuran langsung', image: '/landing-page/images/landing/woodora.webp', url: 'https://landing-woodora.pintuweb.id' },
  { name: 'Zychrome', kategori: 'Acara online', terjual: 0, description: 'Halaman webinar 95 menit. Coba ikut polling dan kuisnya.', halaman: 3, sorot: 'Polling & kuis bisa dicoba', image: '/landing-page/images/landing/zychrome.webp', url: 'https://landing-zychrome.pintuweb.id' },
  { name: 'Lumicast', kategori: 'Acara online', terjual: 0, description: 'Pelatihan online untuk pengurus organisasi. Coba cek perangkatmu dulu.', halaman: 3, sorot: 'Cek perangkat', image: '/landing-page/images/landing/lumicast.webp', url: 'https://landing-lumicast.pintuweb.id' },
  { name: 'NextTalks', kategori: 'Acara online', terjual: 1, description: 'Acara bincang bulanan dengan empat pembicara. Coba cari arsipnya.', halaman: 5, sorot: 'Arsip bisa dicari', image: '/landing-page/images/landing/nexttalks.webp', url: 'https://landing-nexttalks.pintuweb.id' },
  { name: 'Elevinar', kategori: 'Acara online', terjual: 7, description: 'Webinar yang diatur seperti pertunjukan. Coba lihat denah kursinya.', halaman: 3, sorot: 'Buku acara siap cetak', image: '/landing-page/images/landing/elevinar.webp', url: 'https://landing-elevinar.pintuweb.id' },
  { name: 'Sribu (konsep redesain)', kategori: 'Pasar online', terjual: 4, lencana: false, description: 'Contoh redesain tidak resmi, bukan situs aslinya. Coba jadi juri sayembara.', halaman: 2, sorot: 'Simulasi “Coba jadi juri”', image: '/landing-page/images/landing/sribu.webp', url: 'https://landing-sribu.pintuweb.id' },
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

/** Tujuan halaman, urut seperti di saringan. */
export const KATEGORI = ['Jualan', 'Kumpulkan kontak', 'Acara online', 'Layanan online', 'Pasar online', 'Profil usaha'];
