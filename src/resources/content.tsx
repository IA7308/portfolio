import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "DIGITAX",
  lastName: "",
  name: "DIGITAX",
  role: "Website • Akuntansi • Perpajakan",
  avatar: "/images/gallery/logodigitax.jpeg",
  email: "rahmansuparlan603@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  //   essential: true,
  // },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  //   essential: true,
  // },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/digitax.indonesia/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.instagram.com/digitax.indonesia/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Website Profesional, Akuntansi, dan Solusi Pajak Berbasis Digital</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    DIGITAX adalah startup yang menyediakan <Text as="span" size="xl" weight="strong">jasa pembuatan website, layanan akuntansi, dan solusi pajak</Text>, dengan pendekatan digital yang terstruktur.
Kami membantu bisnis membangun sistem yang rapi, konsisten, dan dapat dipertanggungjawabkan — baik secara operasional maupun pajak.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "about",
  title: `Tentang DIGITAX — Jasa Website, Akuntansi & Perpajakan`,
  description: `DIGITAX menyediakan jasa pembuatan website, layanan akuntansi, dan solusi perpajakan berbasis digital.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Profil Singkat",
    description: (
      <>
        DIGITAX adalah penyedia jasa pembuatan website, layanan akuntansi, dan solusi perpajakan berbasis digital.
        Fokus kami adalah membangun sistem yang rapi, konsisten, dan siap diuji—mulai dari website bisnis,
        pembukuan, hingga dukungan kepatuhan dan penanganan persoalan perpajakan.
      </>
    ),

  },
  work: {
    display: true, // set to false to hide this section
    title: (
  <>
    Part of{" "}
    <a
      href="https://cvsolusikita.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit", fontWeight: 600, textDecoration: "underline" }}
    >
      CV SOLUSI KITA
    </a>
  </>
),
    experiences: [
      {
         company: (
        <a
          href="https://portalcvsolusikita.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          Portal 
        </a>
      ),
        timeframe: "2024 - Sekarang",
        role: "IT & Systems Development",
        achievements: [
        <>
          Merancang dan mengembangkan <a
          href="https://portalcvsolusikita.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          Portal CV SOLUSI KITA
        </a>
        , sebuah aplikasi web
          internal untuk mendukung akuntansi, pengelolaan data klien, dan workflow pajak
          yang terstruktur dan defensible.
        </>,
        <>
          Membangun sistem akuntansi berbasis jurnal (1 transaksi = 1 jurnal) yang
          menghasilkan laporan keuangan siap klarifikasi dan pemeriksaan pajak.
        </>,
        <>
          Mengembangkan modul persediaan dan HPP (FIFO) berbasis web dengan kontrol
          approval, validasi data, dan jejak audit internal.
        </>,
        <>
          Mengintegrasikan website publik, portal internal, dan kebutuhan pajak
          menjadi satu ekosistem digital yang konsisten.
        </>,
      ],
    },
      {
  company: (
    <a
      href="https://membercvsolusikita.com/login"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
    >
      Member Portal (CV Solusi Kita)
    </a>
  ),
  timeframe: "",
  role: "Portal & Workflow System",
  achievements: [
    <>
      Merancang dan mengembangkan <b>Member Portal</b> untuk manajemen pengguna,
      autentikasi, dan distribusi dokumen/konten digital.
    </>,
    <>
      Menyusun arsitektur UI/UX dashboard dan workflow internal yang menekankan
      kejelasan data, konsistensi, dan kemudahan penggunaan.
    </>,
  ],
  images: [],
},


    ],
  },
  studies: {
  display: true,
  title: "Trusted by CV Solusi Kita",
  institutions: [
    {
      name: "CV Solusi Kita",
      description: (
        <>
          DIGITAX merupakan bagian dari ekosistem{" "}
          <a
            href="https://cvsolusikita.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600, color: "inherit", textDecoration: "underline" }}
          >
            CV Solusi Kita
          </a>
          , sebuah entitas konsultan pajak dan akuntansi yang telah beroperasi
          dan menangani berbagai kebutuhan kepatuhan serta problem solving perpajakan.
        </>
      ),
    },
    {
      name: "Ekosistem Akuntansi & Pajak",
      description: (
        <>
          Sistem digital DIGITAX dikembangkan untuk mendukung praktik nyata
          akuntansi dan perpajakan, termasuk pembukuan, penyusunan laporan keuangan,
          serta penanganan klarifikasi dan pemeriksaan pajak.
        </>
      ),
    },
  ],
},

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
  {
  title: "Website Audit & Digital Assessment",
  description: (
    <>
      Melakukan audit menyeluruh terhadap website dari sisi struktur, performa,
      keamanan, dan SEO untuk mengidentifikasi masalah serta peluang perbaikan
      sebelum dilakukan optimasi atau pengembangan lanjutan.
    </>
  ),
  tags: [
    { name: "Audit", icon: "figma" },
    { name: "SEO", icon: "figma" },
    { name: "Performance", icon: "figma" },
  ],
  images: [
    {
      src: "/images/projects/about/portal1.png",
      alt: "Website Audit & Digital Assessment – DIGITAX",
      width: 16,
      height: 9,
    },
  ],
},

{
  title: "Integrasi Website & Sistem Bisnis",
  description: (
    <>
      Mengintegrasikan website dengan kebutuhan operasional bisnis seperti formulir
      data klien, sistem booking, dashboard internal, dan workflow administrasi
      untuk mendukung proses akuntansi dan pengelolaan data yang lebih rapi.
    </>
  ),
  tags: [
    { name: "Integration", icon: "figma" },
    { name: "Workflow", icon: "figma" },
    { name: "System", icon: "figma" },
  ],
  images: [
    {
      src: "/images/projects/about/lainnya3hd.png",
      alt: "Integrasi Website & Sistem Bisnis – DIGITAX",
      width: 16,
      height: 9,
    },
  ],
},

],

  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/portal1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/lainnya1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/lainnyakafe.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/lainnya22.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/iniportalreal.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/member.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/lainnya4hdd.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/lainnya33.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
