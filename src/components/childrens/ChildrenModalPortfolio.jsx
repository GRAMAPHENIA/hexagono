import Image from "next/image";

const clientes = [
  {
    nombre: "Gramaphenia",
    descripcion: "Página web especializada en diseño 3D.",
    src: "fondo/esqueleton.svg",
    alt: "imagen de sitio para Gramaphenia",
  },
  {
    nombre: "Luthier",
    descripcion: "Servicios de lutería para instrumentos musicales.",
    src: "fondo/esqueleton.svg",
    alt: "imagen de sitio para Luthier",
  },
  {
    nombre: "404",
    descripcion: "Empresa de desarrollo de software y programación.",
    src: "fondo/esqueleton.svg",
    alt: "imagen de sitio para 404",
  },
  {
    nombre: "R.A.D",
    descripcion:
      "Plataforma de venta de activos digitales y recursos gráficos.",
    src: "fondo/esqueleton.svg",
    alt: "imagen de sitio para R.A.D",
  },
  {
    nombre: "Hexágono",
    descripcion: "Tienda online especializada en la venta de páginas web.",
    src: "fondo/esqueleton.svg",
    alt: "imagen de sitio para Hexágono",
  },
];

const ChildrenModalPortfolio = () => {
  return (
    <>
      <section className="bg-gray-800/40 backdrop-blur-xl px-32 rounded-xl border border-gray-600 py-20">
        <Image
          className="mx-auto"
          src="fondo/adornos/portfolio.svg"
          alt=""
          width={300}
          height={300}
        />
        <h2 className="text-6xl text-amber-200 lg:text-8xl font-serif font-black text-center antialiased mt-1">
          Portafolio
        </h2>
        <h6 className="text-2xl text-gray-500 lg:text-4xl font-serif font-normal text-center antialiased  pb-10">
          <span className="text-amber-100">.</span> coleccion de trabajos
          realizados <span className="text-amber-100">.</span>
        </h6>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
          {clientes.map((nombre, index) => (
            <li key={index}>
              <figure className="border border-gray-600 m-4 h-full rounded-lg text-[var(--font-light)] text-base lg:text-xl font-extralight text-left bg-[var(--card-dark)] space-y-8">
                <Image
                  className="mx-auto border-b border-gray-600 w-full rounded-t-lg"
                  src={nombre.src}
                  alt={nombre.alt}
                  width={80}
                  height={100}
                />
                <section>
                  <h1 className="text-2xl font-bold mx-5 mb-5 text-amber-100">
                    {nombre.nombre}
                  </h1>
                  <p className="mx-5">{nombre.descripcion}</p>
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
