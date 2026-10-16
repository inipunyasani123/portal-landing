/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/landing-page: PintuWeb meneruskan path /landing-page
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/landing-page',
  // Gambar statis + varian siap pakai (lihat app/gambar-loader.js): tidak memakai kuota Image Optimization Vercel.
  images: { loader: 'custom', loaderFile: './app/gambar-loader.js', deviceSizes: [320, 480, 640, 960, 1280, 1600], imageSizes: [160, 240] },
  async redirects() {
    // Alamat lama portal-landing.pintuweb.id di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/landing-page', basePath: false, permanent: true },
      { source: '/:lama((?!landing-page(?:/|$)).+)', destination: 'https://www.pintuweb.id/landing-page', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
