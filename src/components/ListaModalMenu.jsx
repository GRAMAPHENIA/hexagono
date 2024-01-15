import Image from "next/image";

// Constantes de estilos
const listItemStyle =
  "hover:text-[var(--font-light)] text-[var(--button-pres)] text-sm font-extralight text-left";

const ModalList = ({ title, items }) => (
  <section className="col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-center mb-10">
    <ul className="text-center lg:text-left">
      <h1 className="text-2xl text-amber-100 mb-5 ">{title}</h1>
      {items.map(({ titulo }) => (
        <li key={titulo} className={listItemStyle}>
          {titulo}
        </li>
      ))}
    </ul>
  </section>
);

const ListaModalMenu = () => {
  const navegacion = [
    { titulo: "Desarrollo Web" },
    { titulo: "Diseño Gráfico" },
    { titulo: "Modelado 3D" },
    { titulo: "Difusion de Redes" },
  ];

  const informacion = [
    { titulo: "Dominios" },
    { titulo: "Hosting" },
    { titulo: "Precios" },
    { titulo: "Formas de Pago" },
  ];

  const compania = [
    { titulo: "Sobre Hexágono" },
    { titulo: "Tecnologías que utilizamos" },
    { titulo: "Mapa de Ruta" },
    { titulo: "Blog" },
  ];

  const redes = [
    { titulo: "Instagram" },
    { titulo: "Facebook" },
    { titulo: "Youtube" },
    { titulo: "WhatsApp" },
  ];

  return (
    <>
      <section className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-3 justify-center align-middle gap-4 mt-5">
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
