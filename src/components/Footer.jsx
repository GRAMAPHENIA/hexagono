import Image from "next/image";

// Constantes de estilos
const listItemStyle =
  "hover:text-[var(--font-light)] text-[var(--button-pres)] text-sm font-extralight";

const FooterList = ({ title, items }) => (
  <section className="col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-start mb-10">
    <ul className="text-center lg:text-left">
      <h1 className="text-2xl text-amber-100 mb-5 lg:mt-32">{title}</h1>
      {items.map(({ titulo }) => (
        <li key={titulo} className={listItemStyle}>
          {titulo}
        </li>
      ))}
    </ul>
  </section>
);

const Footer = () => {
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
            Página creada con <span className="text-amber-100">⌨</span> por Bird
            & Fang.
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
