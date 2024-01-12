import Image from "next/image";

const DesarrolloWeb = () => {
  const caracteristicas = [
    {
      titulo: "Diseño Responsivo",
      descripcion:
        "Asegura que las páginas web se vean y funcionen bien en una variedad de dispositivos, como computadoras de escritorio, tabletas y teléfonos móviles.",
      imagen: "/fondo/adornos/polygono-detalle-web.svg",
    },
    {
      titulo: "Experiencia Usuario",
      descripcion:
        "Crea diseños intuitivos y atractivos que mejoren la experiencia del usuario y la retención de visitantes.",
      imagen: "/fondo/adornos/polygono-detalle-web.svg",
    },
    {
      titulo: "Optimización y SEO",
      descripcion:
        "Garantiza páginas rápidas y eficientes para mejorar el SEO y la satisfacción del usuario.",
      imagen: "/fondo/adornos/polygono-detalle-web.svg",
    },
    {
      titulo: "Redes Sociales",
      descripcion:
        "Facilita la interacción social al integrar botones de compartir y feeds de redes sociales según sea necesario.",
      imagen: "/fondo/adornos/polygono-detalle-web.svg",
    },
    {
      titulo: "Estándares Web",
      descripcion:
        "Asegúrate de que el sitio web cumple con los estándares y las mejores prácticas web para garantizar la compatibilidad y la accesibilidad.",
      imagen: "/fondo/adornos/polygono-detalle-web.svg",
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
          <p className="text-[var(--font-light)] text-xl font-extralight text-center max-w-[920px] pb-10 border border-[var(--button-dark)]  p-10 rounded-xl bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md">
            En un mundo donde la presencia digital es la nueva vitrina, tu
            negocio o proyecto merece destacar. Desde dispositivos móviles hasta
            computadoras de escritorio, cada pantalla es una oportunidad de
            conexión. Asegurar la visibilidad de tu empresa en este universo
            virtual es fundamental para alcanzar a tu audiencia en cualquier
            momento y lugar.
          </p>
        </figure>
        <section className="grid lg:grid-cols-5 justify-center gap-8 pt-10">
          {caracteristicas.map(({ titulo, descripcion, imagen }, index) => (
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
