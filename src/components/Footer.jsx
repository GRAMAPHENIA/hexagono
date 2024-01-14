import Image from "next/image";

const Footer = () => {
  const redes = [
    {
      titulo: "Diseño Responsivo",
    },
    {
      titulo: "Experiencia Usuario",
    },
    {
      titulo: "Optimización y SEO",
    },
    {
      titulo: "Redes Sociales",
    },
    {
      titulo: "Estándares Web",
    },
  ];

  return (
    <>
      <footer className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-3 justify-center align-middle pt-20 gap'4">
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
        <section className="col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-start mb-10">
          <ul className=" text-center text-[var(--button-pres)] text-sm font-extralight">
            <h1 className="text-2xl text-amber-100 mb-5 lg:mt-32">
              Navegación
            </h1>
            <li className="hover:text-[var(--font-semi-light)]">
              Desarrollo Web
            </li>
            <li className="hover:text-[var(--font-semi-light)]">
              Diseño gráfico
            </li>
            <li className="hover:text-[var(--font-semi-light)]">Modelado 3D</li>
            <li className="hover:text-[var(--font-semi-light)]">
              Difusion de Redes
            </li>
          </ul>
        </section>
        <section className="col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-start mb-10">
          <ul className=" text-center text-[var(--button-pres)] text-sm font-extralight">
            <h1 className="text-2xl text-amber-100 mb-5 lg:mt-32">
              Información
            </h1>
            <li className="hover:text-[var(--font-semi-light)]">Dominios</li>
            <li className="hover:text-[var(--font-semi-light)]">Hosting</li>
            <li className="hover:text-[var(--font-semi-light)]">Precios</li>
            <li className="hover:text-[var(--font-semi-light)]">
              Formas de pago
            </li>
          </ul>
        </section>
        <section className="col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-start mb-10">
          <ul className=" text-center text-[var(--button-pres)] text-sm font-extralight">
            <h1 className="text-2xl text-amber-100 mb-5 lg:mt-32">Compañía</h1>
            <li className="hover:text-[var(--font-semi-light)]">
              Sobre Hexágono
            </li>
            <li className="hover:text-[var(--font-semi-light)]">
              Tecnologías que utilizamos
            </li>
            <li className="hover:text-[var(--font-semi-light)]">
              Mapa de ruta
            </li>
            <li className="hover:text-[var(--font-semi-light)]">Blog</li>
          </ul>
        </section>
        <section className="col-span-1 row-span-4 flex flex-col lg:justify-start lg:items-start mb-10">
          <ul className=" text-center text-[var(--button-pres)] text-sm font-extralight">
            <h1 className="text-2xl text-amber-100 mb-5 lg:mt-32">Redes</h1>
            <li className="hover:text-[var(--font-semi-light)]">Facebook</li>
            <li className="hover:text-[var(--font-semi-light)]">Instagram</li>
            <li className="hover:text-[var(--font-semi-light)]">WhatsApp</li>
            <li className="hover:text-[var(--font-semi-light)]">Youtube</li>
          </ul>
        </section>
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
