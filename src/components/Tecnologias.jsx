import Image from "next/image";

const Tecnologias = () => {
  const metodos = [
    {
      titulo: "html",
    },
    {
      titulo: "css",
    },
    {
      titulo: "js",
    },
    {
      titulo: "react",
    },
    {
      titulo: "nextjs",
    },
    {
      titulo: "tailwind",
    },
  ];

  return (
    <>
      <section className="mt-20 ">
        <figure className="flex flex-col items-center py-10">
          <Image
            src="/titulos/tecnologias.svg"
            alt="Imagen para la sección que destaca el desarrollo tecnologías"
            width={400}
            height={100}
            className="py-10"
          />
          <p className="text-[var(--font-light)] text-xl font-extralight text-center max-w-[720px] border border-[var(--button-dark)] p-10 rounded-xl bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-sm">
            <span className="text-amber-50 text-4xl">
              ¡Moderniza tu Espacio Virtual con Nuestro Estilo Tecnológico!
            </span>
            <br />
            <br />
            Utilizando herramientas avanzadas de desarrollo, creamos
            experiencias web modernas, optimizadas y dinámicas, fusionando
            diseño elegante con funcionalidad eficiente, elevando así la calidad
            y velocidad de nuestras páginas para ofrecer una navegación
            cautivadora y fluida.
          </p>
        </figure>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-6 justify-center gap-8 pt-2">
        {metodos.map(({ titulo }, index) => (
          <div
            className="text-[var(--dark)] lg:col-span-1 flex justify-center items-center bg-[var(--font-semi-light)] p-2 py-2 rounded-sm sombra-inactiva border border-[var(--border-card-dark)]"
            key={index}
          >
            <h1 className="text-sm text-sm:ml-48 ml-2">{titulo}</h1>
          </div>
        ))}
      </section>
      <div className="flex justify-center lg:justify-end mt-10 mb-20">
        <button className="col-span-6 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]">
          Saber Más
        </button>
      </div>
    </>
  );
};

export default Tecnologias;
