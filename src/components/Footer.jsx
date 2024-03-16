import Image from "next/image";
import Link from "next/link";

// Constantes de estilos
const listItemStyle =
  "hover:text-[var(--font-light)] text-[var(--button-pres)] text-md font-light";

const FooterList = ({ title, items, handleCloseModal }) => (
  <section className="lg:mt-24 col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-center mb-10">
    <ul className="text-center lg:text-left">
      <h1 className="text-2xl font-bold text-amber-50 mb-5 ">{title}</h1>
      {items.map(({ titulo, enlace }) => (
        <li key={titulo} className={listItemStyle}>
          {/* Verifica si hay un enlace antes de renderizar el componente Link */}
          {enlace ? (
            <Link href={enlace} onClick={handleCloseModal}>
              {titulo}
            </Link>
          ) : (
            // Si no hay enlace, renderiza solo el título
            <span>{titulo}</span>
          )}
        </li>
      ))}
    </ul>
  </section>
);

const Footer = ({ handleCloseModal }) => {
  const navegacion = [
    { titulo: "Comenzar", enlace: "/" },
    { titulo: "Diseño Gráfico", enlace: "/#diseno-grafico" },
    { titulo: "Desarrollo Web", enlace: "/#desarrollo-web" },
    { titulo: "Modelado 3D", enlace: "/#modelado-3d" },
    // { titulo: "Tecnologías", enlace: "/#tecnologias" },
  ];

  const informacion = [
    { titulo: "Información", enlace: "/informacion" },
    { titulo: "Dominios", enlace: "/informacion#dominios" },
    { titulo: "Hosting", enlace: "/informacion#hosting" },
    { titulo: "Planes Web", enlace: "/planes-desarrollo-web#planes" },
  ];

  const hexagono = [
    { titulo: "Sobre Hexágono", enlace: "/hexagono" },
    { titulo: "Tecnologías", enlace: "/#tecnologias" },
    // { titulo: "Mapa de Ruta", enlace: "/" },
    // { titulo: "Blog", enlace: "/hexagono/#blog" },
  ];

  const redes = [
    { titulo: "Instagram", enlace: "https://www.instagram.com/" },
    { titulo: "Facebook", enlace: "https://www.facebook.com/" },
    { titulo: "Youtube", enlace: "https://www.youtube.com/" },
    { titulo: "WhatsApp", enlace: "https://wa.me/" },
  ];

  return (
    <>
      <footer className="flex flex-col lg:grid lg:grid-cols-6 justify-center align-middle gap-4 font-light text-[var(--font-light)] px-4 py-2 rounded-2xl border border-[var(--card-light)] mb-10 mx-2 bg-[#1011129f] backdrop-blur-lg">
        <figure className="col-span-2 flex flex-col justify-end items-center px-10 mt-5">
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <h1 className="text-3xl text-center text-amber-100 font-extrabold p-5">
            CONCEPTO HEXAGONO
          </h1>
          <p className="text-center font-light w-[250px] text-[var(--button-pres)]">
            <small>Desarrollo Web, Diseño Gráfico y Modelado 3D.</small>
            <br />
            <br />
            <span className="flex justify-center text-[var(--button-pres)]">
              2020-2024
            </span>
          </p>
        </figure>

        {/* Sección de navegación */}
        <FooterList
          title="Navegación"
          items={navegacion}
          handleCloseModal={handleCloseModal}
        />

        {/* Sección de información */}
        <FooterList
          title="Información"
          items={informacion}
          handleCloseModal={handleCloseModal}
        />

        {/* Sección de compañía */}
        <FooterList
          title="Hexágono"
          items={hexagono}
          handleCloseModal={handleCloseModal}
        />

        {/* Sección de redes */}
        <FooterList
          title="Redes"
          items={redes}
          handleCloseModal={handleCloseModal}
        />
      </footer>{" "}
      <section className="col-span-6 flex justify-center items-center my-10 text-[var(--font-light)]">
        <p>
          Página creada con <span className="text-amber-100">⌨ </span>por{" "}
          <span className="text font-light text-[#78b3cd]"> Juno && Max.</span>
        </p>
      </section>
    </>
  );
};

export default Footer;
