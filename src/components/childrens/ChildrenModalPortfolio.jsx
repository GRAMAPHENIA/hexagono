import Image from "next/image";

const clientes = [
  {
    nombre: "Luthier",
    descripcion: "Servicios de lutería para instrumentos musicales.",
    src: "clientes/luthier.svg",
    alt: "imagen del sitio Di corato Luthier",
  },
  {
    nombre: "Babushka",
    descripcion: "Muñecas Rusas",
    src: "clientes/babushka.svg",
    alt: "imagen del sitio Babushka",
  },
  {
    nombre: "El Método",
    descripcion: "Gimnasia para adultos mayores",
    src: "clientes/elmetodo.svg",
    alt: "imagen del sitio El Método",
  },
  // {
  //   nombre: "Gramaphenia",
  //   descripcion: "Página web especializada en diseño 3D.",
  //   src: "fondo/esqueleton.svg",
  //   alt: "imagen de sitio para Gramaphenia",
  // },
  // {
  //   nombre: "404",
  //   descripcion: "Empresa de desarrollo de software y programación.",
  //   src: "fondo/esqueleton.svg",
  //   alt: "imagen de sitio para 404",
  // },
  // {
  //   nombre: "R.A.D",
  //   descripcion:
  //     "Plataforma de venta de activos digitales y recursos gráficos.",
  //   src: "fondo/esqueleton.svg",
  //   alt: "imagen de sitio para R.A.D",
  // },
  // {
  //   nombre: "Hexágono",
  //   descripcion: "Tienda online especializada en la venta de páginas web.",
  //   src: "fondo/esqueleton.svg",
  //   alt: "imagen de sitio para Hexágono",
  // },
];

const ChildrenModalPortfolio = () => {
  return (
    <>
      <section className="bg-[var(--dark)] px-10 lg:px-32 rounded-t-xl border border-gray-600 border-b-0 py-20 pb-40 sombra-inactiva-portfolio">
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
        <h6 className="text-2xl text-gray-500 lg:text-4xl font-serif font-normal text-center antialiased  pb-10">
          <span className="text-amber-100">.</span> coleccion de trabajos
          realizados <span className="text-amber-100">.</span>
        </h6>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-20">
          {clientes.map((nombre, index) => (
            <li key={index}>
              <figure className="border border-gray-600 p-2 h-full rounded-lg text-[var(--font-light)] text-base lg:text-xl font-extralight text-left bg-[var(--card-dark)] space-y-8">
                <Image
                  className="mx-auto border-[3px] bg-[var(--dark)] border-gray-700 w-full rounded-t-lg opacity-100 hover:opacity-70"
                  src={nombre.src}
                  alt={nombre.alt}
                  width={100}
                  height={100}
                />
                <section>
                  <h1 className="text-2xl font-bold mx-5 mb-2 text-amber-100">
                    {nombre.nombre}
                  </h1>
                  <p className="mx-5 mb-10">{nombre.descripcion}</p>
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
