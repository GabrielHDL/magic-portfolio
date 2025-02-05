import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Lato",
  lastName: "Agency",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Agencia Digital Creativa",
  avatar: "/images/logo/profile_bck.png",
  location: "America/Mexico_City", // IANA time zone
  languages: ["Español", "English"], // Puedes dejarlo vacío si no deseas mostrar idiomas
};

const newsletter = {
  display: true,
  title: <>Suscríbete a las novedades de {person.firstName}</>,
  description: (
    <>
      Ocasionalmente compartimos ideas sobre branding, tecnología e ingeniería
      de software, y reflexiones sobre la intersección entre la creatividad y la
      innovación.
    </>
  ),
};

const social = [
  // Links visibles automáticamente.
  // Importa nuevos íconos en /once-ui/icons.ts
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/latomx.agency",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/lato.agency",
  },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  // },
  // {
  //   name: "X", // antes Twitter
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hola@lato.mx",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Este sitio muestra nuestro trabajo como ${person.role}`,
  headline: <>Agencia Digital Creativa</>,
  subline: (
    <>
      Somos Lato Agency, con sede en la Ciudad de México, donde diseñamos
      experiencias intuitivas que fusionan branding, ingeniería de software y
      marketing digital para potenciar marcas y negocios en el mundo digital.
    </>
  ),
};

const about = {
  label: "Nosotros",
  title: "Sobre Nosotros",
  description: `Conoce a ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/lato.agency",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Lato Agency es una agencia digital creativa con sede en la Ciudad de
        México, especializada en branding e ingeniería de software. Nuestro
        objetivo es convertir retos complejos en soluciones ágiles y atractivas,
        abarcando interfaces digitales, experiencias interactivas y la
        convergencia entre diseño y tecnología.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia",
    experiences: [
      {
        company: "Lato Agency",
        timeframe: "2023 - Presente",
        role: "Agencia Digital Creativa",
        achievements: [
          <>
            En 2023 evolucionamos de <strong>Houdle</strong> a{" "}
            <strong>Lato</strong> para adaptarnos a las nuevas tecnologías y
            tendencias del mercado.
          </>,
          <>
            Hemos colaborado con marcas para crear y desarrollar identidades
            visuales sólidas, aumentando su engagement digital de manera
            significativa.
          </>,
          <>
            Implementamos soluciones de software a medida con un enfoque en
            escalabilidad e integración de tecnologías modernas.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Proyecto Once UI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Houdle",
        timeframe: "2019 - 2023",
        role: "Agencia Digital y Software",
        achievements: [
          <>
            Durante esta etapa, consolidamos una agencia con un enfoque en
            branding, diseño y desarrollo de software.
          </>,
          <>
            Creamos estrategias digitales innovadoras para marcas emergentes y
            consolidadas, optimizando su posicionamiento en el mercado.
          </>,
          <>
            Implementamos soluciones tecnológicas personalizadas, enfocadas en
            UI/UX y escalabilidad.
          </>,
        ],
        images: [],
      },
      {
        company: "Proyectos Anteriores",
        timeframe: "Antes de 2019",
        role: "Branding & Desarrollo",
        achievements: [
          <>
            Realizamos proyectos freelance para pymes y emprendimientos,
            fortaleciendo su presencia digital y desarrollando estrategias de
            marca.
          </>,
          <>
            Participación en iniciativas open-source, aportando experiencia en
            diseño de interfaces y desarrollo front-end.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: false,
    title: "Studies",
    institutions: [
      {
        name: "Universidad de la Ciudad de México",
        description: <>Ingeniería de software y fundamentos de desarrollo.</>,
      },
      {
        name: "Especializaciones en Branding",
        description: (
          <>Cursos y diplomados en marketing online y estrategia de marca.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Tecnologías",
    skills: [
      {
        title: "React",
        description: (
          <>
            Construimos interfaces dinámicas y altamente interactivas con React.
          </>
        ),
        images: [
          {
            src: "/images/stack/react/1_qksBcJJdqxLgDGsywG8lQQ.webp",
            alt: "Interfaz desarrollada con React",
            width: 16,
            height: 9,
          },
          {
            src: "/images/stack/react/Meta-1024x683.png",
            alt: "Aplicación con componentes de React",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Creamos aplicaciones de alto rendimiento con Next.js, optimizando
            SEO y carga rápida.
          </>
        ),
        images: [
          {
            src: "/images/stack/nextjs/nextjs3.webp",
            alt: "Proyecto desarrollado con Next.js",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Laravel",
        description: (
          <>Desarrollamos backends robustos y escalables con Laravel.</>
        ),
        images: [
          {
            src: "/images/stack/laravel/0_oUyjZH6_leRq64sQ.png",
            alt: "Backend construido con Laravel",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tailwind CSS",
        description: (
          <>
            Creamos diseños modernos y responsivos con Tailwind CSS para una
            mejor experiencia de usuario.
          </>
        ),
        images: [
          {
            src: "/images/stack/tailwindcss/64b524021adc5990918944.png",
            alt: "Interfaz estilizada con Tailwind CSS",
            width: 16,
            height: 9,
          },
          {
            src: "/images/stack/tailwindcss/tailwind2.png",
            alt: "Componentes estilizados con Tailwind",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Strapi",
        description: (
          <>
            Utilizamos Strapi como CMS Headless para la gestión de contenido
            flexible y eficiente.
          </>
        ),
        images: [
          {
            src: "/images/stack/strapi/meta.CuOjROfl_2ooYIw.webp",
            alt: "Sistema de gestión de contenido con Strapi",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Inteligencia Artificial (IA)",
        description: (
          <>
            Desarrollamos soluciones con IA para automatización, análisis
            predictivo y asistentes conversacionales.
          </>
        ),
        images: [
          {
            src: "/images/stack/ia/GettyImages-1462188043-e1686340799615.webp",
            alt: "Soluciones de IA en Lato Agency",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Machine Learning",
        description: (
          <>
            Implementamos modelos de Machine Learning para análisis de datos y
            personalización de experiencias.
          </>
        ),
      },
      {
        title: "Illustrator",
        description: (
          <>
            Creamos gráficos vectoriales de alta calidad para branding y diseño
            digital.
          </>
        ),
        images: [
          {
            src: "/images/stack/illustrator/illustrator.png",
            alt: "Diseño en Adobe Illustrator",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Photoshop",
        description: (
          <>
            Edición avanzada de imágenes y retoque digital con Adobe Photoshop.
          </>
        ),
        images: [
          {
            src: "/images/stack/photoshop/photoshop.png",
            alt: "Proyecto de edición en Photoshop",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Adobe Premiere Pro",
        description: (
          <>
            Edición y postproducción de videos profesionales con Adobe Premiere
            Pro.
          </>
        ),
        images: [
          {
            src: "/images/stack/premiere/premiere.jpeg",
            alt: "Proyecto de edición de video en Premiere Pro",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cinema 4D",
        description: (
          <>Modelado y animación 3D para renders y contenido visual.</>
        ),
        images: [
          {
            src: "/images/stack/cinema4d/7f056e_04220e7cf28e487cb154d589445a5961~mv2.jpg",
            alt: "Render 3D en Cinema 4D",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Adobe XD",
        description: (
          <>
            Diseño de interfaces de usuario y prototipos interactivos con Adobe
            XD.
          </>
        ),
        images: [
          {
            src: "/images/stack/adobe-xd/Adobe-XD-CC-Featured-Image.png.webp",
            alt: "Prototipo en Adobe XD",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Noticias y reflexiones sobre diseño y tecnología",
  description: `Lee lo más reciente de ${person.name} y descubre nuestras ideas sobre branding y desarrollo.`,
  // Agrega nuevas entradas .mdx en app/blog/posts
};

const work = {
  label: "Proyectos",
  title: "Proyectos",
  description: `Descubre proyectos de branding y desarrollo de ${person.name}`,
  // Añade nuevos .mdx en app/work para enumerarlos en /home y /work
};

const gallery = {
  label: "Galería",
  title: "Galería",
  description: `Colección de imágenes de ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
