import Image from "next/image";
import Link from "next/link";

// Constantes de estilos
const listItemStyle =
  "hover:text-[var(--font-light)] text-[var(--button-pres)] text-sm font-extralight";

const FooterList = ({ title, items }) => (
  <section className="lg:mt-40 col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-center mb-10">
    <ul className="text-center lg:text-left">
      <h1 className="text-2xl text-amber-100 mb-5 ">{title}</h1>
      {items.map(({ titulo, enlace }) => (
        <li key={titulo} className={listItemStyle}>
          {/* Verifica si hay un enlace antes de renderizar el componente Link */}
          {enlace ? (
            <Link href={enlace}>{titulo}</Link>
          ) : (
            // Si no hay enlace, renderiza solo el título
            <span>{titulo}</span>
          )}
        </li>
      ))}
    </ul>
  </section>
);

const Footer = () => {
  const navegacion = [
    { titulo: "Desarrollo Web", enlace: "/desarrollo-web" },
    { titulo: "Diseño Gráfico", enlace: "/diseno-grafico" },
    { titulo: "Modelado 3D", enlace: "/modelado-3d" },
    { titulo: "Difusión de Redes", enlace: "/difusion-redes" },
  ];

  const informacion = [
    { titulo: "Dominios", enlace: "/dominios" },
    { titulo: "Hosting", enlace: "/hosting" },
    { titulo: "Precios", enlace: "/precios" },
    { titulo: "Formas de Pago", enlace: "/formas-pago" },
  ];

  const compania = [
    { titulo: "Sobre Hexágono", enlace: "/sobre-hexagono" },
    { titulo: "Tecnologías que utilizamos", enlace: "/tecnologias" },
    { titulo: "Mapa de Ruta", enlace: "/mapa-ruta" },
    { titulo: "Blog", enlace: "/blog" },
  ];

  const redes = [
    { titulo: "Instagram", enlace: "https://www.instagram.com/" },
    { titulo: "Facebook", enlace: "https://www.facebook.com/" },
    { titulo: "Youtube", enlace: "https://www.youtube.com/" },
    { titulo: "WhatsApp", enlace: "https://wa.me/" },
  ];

  return (
    <>
      <footer className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-3 justify-center align-middle pt-20 gap-4">
        <figure className="col-span-2 row-span-3 flex flex-col justify-end items-center mb-10">
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={80}
            height={100}
          />
          <h1 className="text-3xl text-amber-100 p-5">Concepto Hexágono</h1>
          <p className="text-center font-light w-[250px] text-[var(--button-pres)]">
            <small>
              Transformamos Ideas en Realidad Digital: Desarrollo Web, Diseño
              Gráfico y Modelado 3D de Estilo.
            </small>
            <br />
            <br />
            <span className="flex justify-center text-amber-50">2020-2024</span>
          </p>
        </figure>

        {/* Sección de navegación */}
        <FooterList title="Navegación" items={navegacion} />

        {/* Sección de información */}
        <FooterList title="Información" items={informacion} />

        {/* Sección de compañía */}
        <FooterList title="Compañía" items={compania} />

        {/* Sección de redes */}
        <FooterList title="Redes" items={redes} />

        <section className="col-span-6 flex justify-center items-center my-10 text-[var(--font-light)]">
          <p>
            Página creada con <span className="text-amber-100">⌨</span> por Juno
            && Max.
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
