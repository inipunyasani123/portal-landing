import './globals.css';
import { Syne } from 'next/font/google';
import { templates, slugOf } from './components/templates-data';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['600', '700', '800'] });

// Merek di hasil pencarian & pratinjau tautan = PintuWeb. Jumlah demo dihitung dari data, bukan ditulis tangan.
const URL_PORTAL = 'https://www.pintuweb.id/landing-page';
const TITLE = `Contoh Landing Page: ${templates.length} Demo Siap Coba | PintuWeb`;
const DESCRIPTION = `${templates.length} contoh landing page siap coba: click-through, lead gen, sales, webinar, hingga profil usaha. Pilih satu, PintuWeb sesuaikan untuk bisnismu.`;

// CollectionPage + daftar demonya (ItemList) + jejak. Data dari templates-data, jadi ikut bertambah sendiri.
const __jsonld = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: URL_PORTAL,
  inLanguage: "id-ID",
  isPartOf: { "@type": "WebSite", name: "PintuWeb", url: "https://www.pintuweb.id" },
  publisher: { "@type": "Organization", name: "PintuWeb", url: "https://www.pintuweb.id" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: templates.length,
    itemListElement: templates.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: `${t.name} — ${t.kategori}`, url: t.url })),
  },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "PintuWeb", item: "https://www.pintuweb.id" }, { "@type": "ListItem", position: 2, name: "Landing Page", item: URL_PORTAL }] },
};

export const metadata = {
  metadataBase: new URL(URL_PORTAL),
  title: { default: TITLE, template: '%s | PintuWeb' },
  description: DESCRIPTION,
  applicationName: "PintuWeb",
  keywords: ["template landing page", "koleksi landing page", "landing page bisnis", "desain landing page"],
  authors: [{ name: "PintuWeb", url: "https://www.pintuweb.id" }],
  creator: "PintuWeb",
  publisher: "PintuWeb",
  alternates: { canonical: URL_PORTAL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: URL_PORTAL,
    siteName: "PintuWeb",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={syne.variable}>
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
      </body>
    </html>
  );
}
