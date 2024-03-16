import Image from "next/image";
import { useState } from "react";

const clientes = [
  {
    nombre: "Di corato",
    descripcion: "Servicios de Luthería.",
    src: "clientes/luthier.svg",
    alt: "imagen del sitio Di corato Luthier",
  },
  {
    nombre: "Babushka",
    descripcion: "Bordados y telas.",
    src: "clientes/babushka.svg",
    alt: "imagen del sitio Babushka",
  },
  {
    nombre: "El Método",
    descripcion: "Para adultos mayores.",
    src: "clientes/elmetodo.svg",
    alt: "imagen del sitio El Método",
  },
];

const ChildrenModalPortfolio = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <section className="bg-[var(--dark)] px-10 lg:px-32 rounded-t-xl border border-gray-600 border-b-0 py-20 pb-10 sombra-inactiva-portfolio">
        <Image
          className="mx-auto"
          src="fondo/adornos/portfolio.svg"
          alt=""
          width={300}
          height={300}
        />
        <h2 className="text-6xl text-amber-200 lg:text-8xl font-serif font-black text-center antialiased mt-1">
          Portfolio
        </h2>
        <h6 className="text-2xl text-gray-500 lg:text-4xl font-serif font-normal text-center antialiased pb-10">
          <span className="text-amber-100">.</span> coleccion de trabajos
          realizados <span className="text-amber-100">.</span>
        </h6>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-20">
          {clientes.map((cliente, index) => (
            <li key={index} className="relative">
              <figure
                className="relative border border-gray-600 p-2 h-full rounded-lg text-[var(--font-light)] text-base lg:text-xl font-extralight text-left bg-[var(--card-dark)] space-y-8 sombra-portfolio"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{ minHeight: "450px" }} // Establecer una altura mínima fija para el contenedor
              >
                <Image
                  className={`mx-auto border-[px] bg-[var(--dark)] border-gray-700 w-full rounded-t-lg ${
                    hoverIndex === index ? "opacity-100" : "opacity-99"
                  }`}
                  src={cliente.src}
                  alt={cliente.alt}
                  width={100}
                  height={100}
                />
                <section
                  className={`w-full h-full ${
                    hoverIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div className="text-center text-amber-100">
                    <h1 className="text-5xl font-bold">{cliente.nombre}</h1>
                    <p className="text-center">{cliente.descripcion}</p>
                  </div>{" "}
                  <button className="close-button mx-auto flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-4 py-2 rounded-full sombra-light-amber border border-[var(--card-light)] mt-5 mr-5">
                    visitar
                  </button>
                </section>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ChildrenModalPortfolio;
