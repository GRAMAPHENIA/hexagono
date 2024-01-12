import Image from "next/image";

const DesarrolloWeb = () => {
  const caracteristicas = [
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
      <section className="my-20">
        <figure className="flex flex-col items-center">
          <Image
            src="/titulos/web.svg"
            alt="Imagen para la sección que destaca el desarrollo web"
            width={300}
            height={100}
            className="py-10"
          />
          <p className="text-[var(--font-light)] text-xl font-extralight text-center max-w-[820px] pb-10 border border-[var(--button-dark)] p-10 rounded-xl bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-sm">
            <span className="text-amber-50">
              ¡Destaca tu Presencia Digital con Nuestros Servicios de Desarrollo
              Web!
            </span>{" "}
            En el dinámico mundo actual, la presencia digital es clave para el
            éxito de cualquier negocio. En Concepto Hexágono, entendemos la
            importancia de tener una presencia en línea sólida y atractiva. Es
            por eso que ofrecemos servicios de desarrollo web de alta calidad
            para impulsar tu marca y destacar en el vasto universo digital.
          </p>
        </figure>
        <section className="grid lg:grid-cols-5 justify-center gap-8 pt-10">
          {caracteristicas.map(({ titulo }, index) => (
            <div
              className="col-span-1 flex justify-center items-center bg-[var(--font-semi-light)] p-2 py-2 rounded-sm sombra-inactiva"
              key={index}
            >
              <h1 className="text-sm text-[var(--button-dark)] ml-2">
                {titulo}
              </h1>
            </div>
          ))}
        </section>
        <div className="flex justify-center my-20">
          <button className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light">
            Saber Más
          </button>
        </div>
      </section>
    </>
  );
};

export default DesarrolloWeb;
