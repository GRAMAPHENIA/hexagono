import Image from "next/image";
import Link from "next/link";


// Constantes de estilos
const listItemStyle =
  "hover:text-[var(--font-light)] text-[var(--button-pres)] text-sm font-extralight text-left lg:text-left cursor-pointer";

const ModalList = ({ title, items }) => (
  <section className="col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-center">
    <ul className="text-center lg:text-left">
      <h1 className="text-2xl text-amber-100 mb-5 mt-10 ">{title}</h1>
      {items.map(({ titulo, enlace }) => (
        <li key={titulo} className={`${listItemStyle} text-center`}>
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

const ListaModalMenu = () => {
  const navegacion = [
    { titulo: "Desarrollo Web", enlace: "#desarrollo-web" },
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
      <section className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-3 justify-center align-middle gap-2 mt-5">
        {/* Sección de navegación */}
        <ModalList title="Navegación" items={navegacion} />

        {/* Sección de información */}
        <ModalList title="Información" items={informacion} />

        {/* Sección de compañía */}
        <ModalList title="Compañía" items={compania} />

        {/* Sección de redes */}
        <ModalList title="Redes" items={redes} />
      </section>
      <figure className="col-span-2 row-span-3 flex flex-col justify-end items-center mt-16 mb-10">
        <Image
          src="/logo.svg"
          alt="Picture of the author"
          width={80}
          height={100}
        />
        <h1 className="text-3xl text-center text-amber-100 p-5">
          Concepto Hexágono
        </h1>
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
    </>
  );
};

export default ListaModalMenu;
