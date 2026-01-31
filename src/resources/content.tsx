import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

/** =========================================================
 * DIGITAX — PROFILE CONFIG (Content-ready for conversion)
 * Fokus: Konsultan Pajak (CV Solusi Kita) + Jasa Website
 * ========================================================= */

const person: Person = {
  firstName: "DIGITAX",
  lastName: "SOLUTION",
  name: `DIGITAX SOLUTION`,
  role: "Digital & Tax Solution Partner",
  avatar: "/images/avatar.jpg",
  email: "rahmansuparlan@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Bahasa Indonesia", "English"],
};

/** Newsletter: untuk akun jasa, lebih baik OFF dulu (fokus CTA layanan) */
const newsletter: Newsletter = {
  display: false,
  title: <>Update dari {person.firstName}</>,
  description: <>Insight singkat pajak, akuntansi, dan strategi website bisnis.</>,
};

const social: Social = [
  {
    name: "DIGITAX SOLUTION",
    icon: "instagram",
    link: "https://www.instagram.com/digitax.indonesia", // ganti sesuai akun
    essential: true,
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@digitax.id", // opsional
  //   essential: false,
  // },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/digitax/", // opsional
  //   essential: false,
  // },
  {
    name: "DIGITAX SOLUTION",
    icon: "tiktok", // pastikan icon tersedia di once-ui/icons.ts, kalau belum ada, hapus atau tambah icon
    link: "https://www.tiktok.com/@digitax.solution?_r=1&_t=ZS-93WlMV0CzHr", // opsional
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

/** LINK UTAMA LAYANAN (CTA) */
const MAIN_SERVICE_URL =
  "https://cvsolusikita.com/jasa-layanan-konsultan-pajak-bandung/";
const WEBSITE_SERVICE_URL =
  "https://cvsolusikita.com/"; // ganti nanti ke landing khusus "jasa pembuatan website" kalau sudah ada

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Digitax — ${person.role}`,
  description:
    "Digitax membantu UMKM & bisnis digital: pajak rapi, akuntansi jelas, dan website siap jual.",
  headline: <>Pajak rapi, bisnis tenang — ditutup dengan sistem digital yang benar.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Layanan Utama</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Konsultan Pajak & Website
        </Text>
      </Row>
    ),
    href: MAIN_SERVICE_URL,
  },
  subline: (
    <>
      Digitax adalah partner untuk bisnis yang ingin{" "}
      <Text as="span" size="xl" weight="strong">
        rapi secara pajak & rapi secara digital
      </Text>
      . <br />
      Fokus kami: pendampingan pajak yang aman & layanan website yang siap dipakai untuk jualan.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Kenal Digitax: ${person.role} (Pajak & Website) – ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: { display: true },

  /** kalau belum siap booking link, matikan dulu */
  calendar: {
    display: false,
    link: "https://cal.com",
  },

  intro: {
  display: true,
  title: "Tentang Digitax",
  description: (
    <>
      <strong>Digitax Solution</strong> hadir sebagai partner{" "}
      <strong>pajak + sistem digital</strong> untuk UMKM, founder, dan bisnis yang sedang
      bertumbuh. Fokus kami sederhana: membantu bisnis menjadi{" "}
      <strong>lebih rapi, lebih aman, dan lebih dipercaya</strong>—baik dari sisi
      kepatuhan pajak maupun dari sisi tampilan profesional di ranah digital.
      <br />
      <br />
      Kami percaya, bisnis yang kuat bukan hanya soal omzet. Pondasinya ada pada{" "}
      <strong>akuntansi yang tertib</strong>, <strong>dokumen yang siap</strong>, dan{" "}
      <strong>alur kerja yang defensible</strong> saat dibutuhkan (misalnya untuk evaluasi,
      audit internal, kebutuhan bank, atau kepentingan due diligence).
      <br />
      <br />
      Karena itu Digitax menggabungkan dua pilar utama:
      <ul style={{ margin: "12px 0 0 18px" }}>
        <li>
          <strong>Pendampingan Pajak & Akuntansi</strong> — membantu menyusun dan menata data
          agar kepatuhan berjalan tenang, jelas, dan legal (tanpa menakut-nakuti).
        </li>
        <li>
          <strong>Website Bisnis yang “siap jual”</strong> — membangun profil digital yang
          rapi, modern, dan meyakinkan, sehingga calon klien paham layanan Anda dan mudah
          mengambil keputusan untuk menghubungi.
        </li>
      </ul>
      <br />
      Selain layanan konsultasi, kami juga menyiapkan ekosistem kerja digital yang mendukung
      proses bisnis secara lebih tertib:
      <ul style={{ margin: "12px 0 0 18px" }}>
        <li>
          <strong>Portal Akuntansi Pajak Web Basis</strong>{" "}
          <a href="https://portalcvsolusikita.com/" target="_blank" rel="noreferrer">
            (portalcvsolusikita.com)
          </a>{" "}
          — platform untuk praktik akuntansi terintegrasi, mulai dari input jurnal hingga
          laporan keuangan yang rapi dan sistematis.
        </li>
        <li>
          <strong>Member Area & Manajemen Dokumen</strong>{" "}
          <a href="https://membercvsolusikita.com/" target="_blank" rel="noreferrer">
            (membercvsolusikita.com)
          </a>{" "}
          — ruang kolaborasi yang lebih aman untuk pertukaran dokumen dan kebutuhan administrasi
          klien secara terstruktur.
        </li>
      </ul>
      <br />
      Intinya, Digitax membantu bisnis membangun{" "}
      <strong>ketenangan</strong> melalui sistem yang benar:{" "}
      <em>pajak rapi → risiko terkendali → bisnis lebih siap melangkah</em>.
    </>
  ),
};
  /** Seksi "work" dipakai sebagai daftar LAYANAN (lebih cocok dari CV personal) */
  work: {
    display: true,
    title: "Layanan",
    experiences: [
      {
        company: "Konsultan Pajak & Pendampingan",
        timeframe: "On-going",
        role: "Tax & Compliance Support",
        achievements: [
          <>
            Pendampingan pajak untuk bisnis & individu: mulai dari{" "}
            <strong>review kepatuhan</strong>, <strong>perapihan</strong>, hingga strategi defensible.
          </>,
          <>
            Membantu klien memahami pajak dengan cara yang <strong>tenang, jelas, dan legal</strong>,
            agar keputusan bisnis tidak diambil dalam kondisi panik.
          </>,
          <>
            Arah layanan lengkap dapat dilihat di halaman resmi berikut:{" "}
            <a href={MAIN_SERVICE_URL} target="_blank" rel="noreferrer">
              layanan konsultan pajak
            </a>
            .
          </>,
        ],
        images: [],
      },
      {
        company: "Jasa Pembuatan Website Bisnis",
        timeframe: "On-going",
        role: "Business Website & Landing Page",
        achievements: [
          <>
            Pembuatan website untuk UMKM & bisnis jasa: fokus pada{" "}
            <strong>kejelasan layanan</strong>, <strong>trust</strong>, dan{" "}
            <strong>struktur yang mudah dikembangkan</strong>.
          </>,
          <>
            Cocok untuk: profil perusahaan, landing page, portofolio, halaman layanan, serta
            integrasi CTA (WhatsApp / form / booking).
          </>,
          <>
            Untuk sementara, hubungi melalui halaman utama:{" "}
            <a href={WEBSITE_SERVICE_URL} target="_blank" rel="noreferrer">
              website
            </a>
            . (Nanti kita bisa buat landing khusus “Jasa Website” agar konversinya lebih tajam.)
          </>,
        ],
        images: [],
      },
    ],
  },

  /** Studies: jadikan “Credibility” */
  studies: {
    display: true,
    title: "Fokus & Nilai Kerja",
    institutions: [
      {
        name: "Kepatuhan yang menenangkan",
        description: (
          <>
            Kami mengutamakan pendekatan yang rapi, transparan, dan tidak menakut-nakuti klien.
          </>
        ),
      },
      {
        name: "Sistem digital yang siap dipakai",
        description: (
          <>
            Website bukan sekadar “ada”, tapi harus menjadi alat komunikasi layanan yang efektif
            dan konsisten.
          </>
        ),
      },
      {
        name: "Defensible & audit-friendly",
        description: (
          <>
            Dari sisi pajak maupun dokumentasi bisnis, output kerja harus siap diuji, bukan sekadar
            “kelihatan bagus”.
          </>
        ),
      },
    ],
  },

  /** Technical: ganti dari Figma/Next jadi kapabilitas Digitax */
  technical: {
    display: true,
    title: "Kapabilitas",
    skills: [
      {
        title: "Pajak & Kepatuhan",
        description: (
          <>
            Review kepatuhan, perapihan data, pendampingan klarifikasi, serta perencanaan yang aman
            untuk bisnis bertumbuh.
          </>
        ),
        tags: [
          { name: "Tax", icon: "sparkle" }, // sesuaikan icon yang ada
          { name: "Compliance", icon: "check" },
          { name: "Documentation", icon: "book" },
        ],
        images: [],
      },
      {
        title: "Website untuk Jasa & UMKM",
        description: (
          <>
            Struktur halaman layanan, copywriting CTA, layout yang modern, dan fondasi SEO dasar
            agar website bisa bekerja sebagai aset bisnis.
          </>
        ),
        tags: [
          { name: "Website", icon: "globe" },
          { name: "Landing Page", icon: "layout" },
          { name: "SEO", icon: "search" },
        ],
        images: [],
      },
      {
        title: "Konten Edukasi (Reels/TikTok)",
        description: (
          <>
            Konten singkat dengan fokus: problem → solusi → CTA. Cocok untuk membangun trust dan
            memperluas reach (FYP).
          </>
        ),
        tags: [
          { name: "Short Video", icon: "video" },
          { name: "Script", icon: "pen" },
          { name: "Strategy", icon: "compass" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Catatan singkat pajak & bisnis digital",
  description: "Insight praktis yang gampang dipahami: pajak, akuntansi, dan website bisnis.",
};

const work: Work = {
  path: "/work",
  label: "Portfolio",
  title: `Portfolio – ${person.name}`,
  description: `Contoh proyek dan hasil kerja: pajak & website`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Galeri – ${person.name}`,
  description: `Dokumentasi kegiatan & portofolio visual`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "Digitax activity", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "Digitax work", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "Digitax project", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "Digitax meeting", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "Digitax collaboration", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "Digitax portfolio", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "Digitax behind the scenes", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "Digitax office", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
