import Image from "next/image";
import Link from "next/link";

// Constantes de estilos
const listItemStyle =
  "hover:text-[var(--font-light)] text-[var(--button-pres)] text-lg font-extralight text-left lg:text-left cursor-pointer";

const ModalList = ({ title, items, handleCloseModal }) => (
  <section className="col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-center px-10">
    <ul className="text-center lg:text-left">
      <h1 className="text-2xl text-amber-100 mb-5 mt-5 ">{title}</h1>
      {items.map(({ titulo, enlace }) => (
        <li key={titulo} className={`${listItemStyle} text-center`}>
          {/* Verifica si hay un enlace antes de renderizar el componente Link */}
          {enlace ? (
            <Link href={enlace} onClick={handleCloseModal} prefetch={true}>
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

const ListaModalMenu = ({ handleCloseModal }) => {
  const navegacion = [
    { titulo: "Comenzar", enlace: "/" },
    { titulo: "Diseño Gráfico", enlace: "/#diseno-grafico" },
    { titulo: "Desarrollo Web", enlace: "/#desarrollo-web" },
    { titulo: "Modelado 3D", enlace: "/#modelado-3d" },
    { titulo: "Tecnologías", enlace: "/#tecnologias" },
  ];

  const informacion = [
    { titulo: "Información", enlace: "/informacion" },
    { titulo: "Dominios", enlace: "/informacion#dominios" },
    { titulo: "Hosting", enlace: "/informacion#hosting" },
    { titulo: "Planes Web", enlace: "/planes-desarrollo-web#planes" },
    // { titulo: "Formas de Pago", enlace: "/informacion#formas-pago" },
  ];

  const hexagono = [
    { titulo: "Sobre Hexágono", enlace: "/hexagono" },
    { titulo: "Tecnologías", enlace: "/hexagono/#tecnologias" },
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
      <figure className="bg-[#101112a5] px-12 pb-12 rounded-md col-span-2 row-span-3 flex flex-col justify-end items-center">
        {/* <p className="text-center w-[250px] text-[var(--button-pres)] text-6xl mt-2 font-extrabold">
          MENU
        </p> */}

          {/* <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={100}
            height={100}
            className="mt-10"
          /> */}

       

        <section className="flex flex-col lg:flex-row lg:justify-center lg:items-start mt-32 gap-12">
          {/* Sección de navegación */}
          <ModalList
            title="Navegación"
            items={navegacion}
            handleCloseModal={handleCloseModal}
          />

          {/* Sección de información */}
          <ModalList
            title="Información"
            items={informacion}
            handleCloseModal={handleCloseModal}
          />

          {/* Sección de compañía */}
          <ModalList
            title="Hexágono"
            items={hexagono}
            handleCloseModal={handleCloseModal}
          />

          {/* Sección de redes */}
          <ModalList
            title="Redes"
            items={redes}
            handleCloseModal={handleCloseModal}
          />
        </section>
        <Image
          src="/icons/route.svg"
          alt="Picture of the author"
          width={280}
          height={280}
          className="mt-10"
        />
      </figure>
    </>
  );
};

export default ListaModalMenu;
